import { expect, test } from "@playwright/test";
import { products } from "../../content/products";

test.describe.configure({ mode: "serial" });

const rentalSlugs = new Set([
  "totem-interactivo",
  "totem-digital",
  "poster-led",
  "samsung-business-tv",
  "terminales-interactivas-pantallas-grandes",
  "pantallas-touch",
  "pantallas-led",
  "atril-digital",
]);

test.describe("fichas de producto", () => {
  test.beforeEach(({ isMobile }) => {
    test.skip(isMobile, "El smoke HTTP se ejecuta una sola vez en el proyecto desktop.");
  });

  test("las 47 fichas responden, publican metadata y muestran CTAs correctos", async ({
    request,
  }) => {
    test.setTimeout(120_000);
    expect(products).toHaveLength(47);

    const batchSize = 6;
    for (let offset = 0; offset < products.length; offset += batchSize) {
      const batch = products.slice(offset, offset + batchSize);
      const responses = await Promise.all(
        batch.map(async (product) => ({
          product,
          response: await request.get(`/productos/${product.slug}`),
        })),
      );

      for (const { product, response } of responses) {
        const html = await response.text();
        expect.soft(response.status(), product.slug).toBe(200);
        expect.soft(html, product.slug).toContain("<h1");
        expect
          .soft(html, `${product.slug}: canonical`)
          .toContain(`https://adinnov.com.ar/productos/${product.slug}`);
        expect.soft(html, `${product.slug}: JSON-LD Product`).toContain('"@type":"Product"');
        expect.soft(html, `${product.slug}: CTA WhatsApp`).toContain("Consultar por WhatsApp");

        if (rentalSlugs.has(product.slug)) {
          expect.soft(html, `${product.slug}: CTA alquiler`).toContain("Cotizar alquiler");
        } else {
          expect.soft(html, `${product.slug}: sin CTA alquiler`).not.toContain("Cotizar alquiler");
        }
      }
    }
  });
});

test.describe("interacciones de ficha", () => {
  test("el carrusel responde a teclado y abre/cierra la vista ampliada", async ({ page }) => {
    await page.goto("/productos/totem-digital");
    const carousel = page.locator('[aria-roledescription="carrusel"]');
    await expect(carousel).toBeVisible();

    const firstSlide = carousel.locator('[aria-roledescription="diapositiva"]').first();
    const viewport = firstSlide.locator("xpath=..");
    await viewport.focus();
    await page.keyboard.press("ArrowRight");
    await expect(carousel.locator('button[aria-current="true"]')).toHaveAccessibleName(
      /imagen 2/i,
    );

    await page.keyboard.press("End");
    const mediaCount = await carousel.locator('[aria-roledescription="diapositiva"]').count();
    await expect(carousel.locator('button[aria-current="true"]')).toHaveAccessibleName(
      new RegExp(`imagen ${mediaCount}`, "i"),
    );

    await carousel.getByRole("button", { name: /^Ampliar imagen:/ }).first().click();
    const dialog = page.getByRole("dialog", { name: /Vista ampliada/ });
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: "Cerrar vista ampliada" }).click();
    await expect(dialog).not.toBeVisible();
  });

  test("el carrusel muestra un fallback accesible si falla la imagen principal", async ({
    page,
  }) => {
    await page.route("**/_next/image?*", async (route) => {
      const optimizedSource = new URL(route.request().url()).searchParams.get("url") ?? "";
      if (optimizedSource === "/products/totem-digital/01.jpg") {
        await route.abort("failed");
        return;
      }
      await route.continue();
    });

    await page.goto("/productos/totem-digital");

    const carousel = page.locator('[aria-roledescription="carrusel"]');
    const fallback = carousel.getByRole("img", {
      name: /No pudimos cargar: .*vista principal/i,
    });
    await expect(fallback).toBeVisible();
    await expect(fallback).toContainText("Vista no disponible");
  });

  test("los CTAs trasladan intent y producto al formulario de alquiler", async ({ page }) => {
    await page.goto("/productos/totem-digital");
    await page
      .locator('a[href="/contacto?intent=alquiler&product=totem-digital"]:visible')
      .first()
      .click();
    await expect(page).toHaveURL(/intent=alquiler&product=totem-digital/);
    await expect(page.getByLabel("¿Cómo podemos ayudarte?")).toHaveValue("alquiler");
    await expect(page.getByLabel("Producto")).toHaveValue("totem-digital");
    await expect(page.getByLabel("Fecha de inicio")).toBeVisible();
  });

  test("una ficha solo venta no presenta la acción de alquiler", async ({ page }) => {
    await page.goto("/productos/apps-juegos-interactivos");
    await expect(page.getByRole("link", { name: "Consultar por WhatsApp" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Cotizar alquiler" })).toHaveCount(0);
  });
});
