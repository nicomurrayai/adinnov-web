import { expect, test, type APIRequestContext } from "@playwright/test";

test.describe.configure({ mode: "serial" });

/** Las fichas publicadas salen del sitemap: sólo incluye productos visibles en Supabase. */
async function getPublishedProductSlugs(request: APIRequestContext) {
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const xml = await response.text();
  return Array.from(
    xml.matchAll(/<loc>https:\/\/adinnov\.com\.ar\/productos\/([a-z0-9-]+)<\/loc>/g),
    (match) => match[1],
  );
}

test.describe("fichas de producto", () => {
  test.beforeEach(({ isMobile }) => {
    test.skip(isMobile, "El smoke HTTP se ejecuta una sola vez en el proyecto desktop.");
  });

  test("las fichas publicadas responden, publican metadata y muestran CTAs correctos", async ({
    request,
  }) => {
    test.setTimeout(120_000);
    const slugs = await getPublishedProductSlugs(request);
    expect(slugs.length).toBeGreaterThan(0);
    expect(new Set(slugs).size).toBe(slugs.length);

    const batchSize = 6;
    for (let offset = 0; offset < slugs.length; offset += batchSize) {
      const batch = slugs.slice(offset, offset + batchSize);
      const responses = await Promise.all(
        batch.map(async (slug) => ({
          slug,
          response: await request.get(`/productos/${slug}`),
        })),
      );

      for (const { slug, response } of responses) {
        const html = await response.text();
        expect.soft(response.status(), slug).toBe(200);
        expect.soft(html, slug).toContain("<h1");
        expect
          .soft(html, `${slug}: canonical`)
          .toContain(`https://adinnov.com.ar/productos/${slug}`);
        expect.soft(html, `${slug}: JSON-LD Product`).toContain('"@type":"Product"');
        expect.soft(html, `${slug}: CTA WhatsApp`).toContain("Consultar por WhatsApp");
        expect.soft(html, `${slug}: sin CTA alquiler`).not.toContain("Cotizar alquiler");
      }
    }
  });

  test("un slug inexistente responde 404", async ({ request }) => {
    const response = await request.get("/productos/slug-inexistente-adinnov");
    expect(response.status()).toBe(404);
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
      // Local (/products/…) o Supabase Storage (…/product-media/products/…).
      if (optimizedSource.endsWith("/products/totem-digital/01.jpg")) {
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

  test("la ficha solo ofrece consultar por WhatsApp", async ({ page }) => {
    await page.goto("/productos/totem-digital");
    await expect(page.getByRole("link", { name: "Consultar por WhatsApp" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Cotizar alquiler" })).toHaveCount(0);
  });
});
