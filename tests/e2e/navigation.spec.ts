import { expect, test } from "@playwright/test";
import { waitForStablePage } from "./support";

test.describe.configure({ mode: "serial" });

const publicRoutes = [
  "/",
  "/productos",
  "/alquileres",
  "/trabajos",
  "/clientes",
  "/nosotros",
  "/contacto",
] as const;

test.describe("navegación pública", () => {
  for (const route of publicRoutes) {
    test(`${route} responde y expone un título principal`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });

      expect(response?.status()).toBe(200);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("lang", "es-AR");
    });
  }

  test("el menú es operable con teclado, Escape y foco", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await waitForStablePage(page);
    let expectedUrl = /\/productos$/;

    if (isMobile) {
      const trigger = page.locator('button[aria-controls="navegacion-movil"]');
      await expect(trigger).toHaveAccessibleName("Abrir menú");
      await trigger.click();
      await expect(trigger).toHaveAttribute("aria-expanded", "true");
      await expect(
        page.getByRole("navigation", { name: "Navegación móvil" }),
      ).toBeVisible();

      await page.keyboard.press("Escape");
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
      await expect(trigger).toBeFocused();

      await trigger.click();
      await page
        .getByRole("navigation", { name: "Navegación móvil" })
        .getByRole("link", { name: "Productos", exact: true })
        .click();
    } else {
      const trigger = page
        .getByRole("navigation", { name: "Navegación principal" })
        .getByRole("button", { name: "Productos" });
      await trigger.focus();
      await page.keyboard.press("ArrowDown");
      await expect(trigger).toHaveAttribute("aria-expanded", "true");
      const firstProduct = page.getByRole("link", { name: "Totem Digital", exact: true });
      await expect(firstProduct).toBeFocused();

      await page.keyboard.press("Escape");
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
      await expect(trigger).toBeFocused();

      await trigger.click();
      await firstProduct.click();
      expectedUrl = /\/productos\/totem-digital$/;
    }

    await expect(page).toHaveURL(expectedUrl);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("el mega menú actualiza la preview por hover y foco", async ({ page, isMobile }) => {
    test.skip(isMobile, "El mega menú completo solo se muestra en escritorio.");
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await waitForStablePage(page);

    const trigger = page
      .getByRole("navigation", { name: "Navegación principal" })
      .getByRole("button", { name: "Productos" });
    await trigger.focus();
    await page.keyboard.press("ArrowDown");

    const preview = page.locator('[data-mega-menu-preview="true"]');
    const image = preview.locator('[data-mega-menu-preview-image="true"]');
    await expect(preview).toContainText("Totem Digital");
    await expect(image).toHaveAttribute("src", /totem-digital\.webp/);

    const poster = page.getByRole("link", { name: "POSTER LED", exact: true });
    await poster.hover();
    await expect(preview).toContainText("POSTER LED");
    await expect(image).toHaveAttribute("src", /poster-led\.webp/);

    const software = page.getByRole("link", {
      name: "Software de CARTELERIA DIGITAL",
      exact: true,
    });
    await software.focus();
    await expect(preview).toContainText("Software de CARTELERIA DIGITAL");
    await expect(image).toHaveAttribute("src", /software-carteleria-digital\.webp/);

    await page.mouse.click(10, (page.viewportSize()?.height ?? 1000) - 10);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("el mega menú permite acceder a todos los enlaces con viewport bajo", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "El mega menú completo solo se muestra en escritorio.");
    await page.setViewportSize({ width: 1440, height: 650 });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await waitForStablePage(page);

    const trigger = page
      .getByRole("navigation", { name: "Navegación principal" })
      .getByRole("button", { name: "Productos" });
    await trigger.focus();
    await page.keyboard.press("ArrowDown");
    const panel = page.locator("#familias-productos > div");
    await expect(panel).toBeVisible();
    await expect(panel).toHaveCSS("overflow-y", "auto");
    await page.getByRole("link", { name: "Lustrador automático de calzado" }).scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("link", { name: "Lustrador automático de calzado" }),
    ).toBeVisible();
  });

  test("el enlace de salto lleva el foco al contenido principal", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const skipLink = page.getByRole("link", { name: "Saltar al contenido" });

    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    await skipLink.press("Enter");
    await expect(page).toHaveURL(/#contenido-principal$/);
  });

  test("Nosotros está disponible en el navbar y refleja la página activa", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/nosotros", { waitUntil: "domcontentloaded" });

    if (isMobile) {
      await page.locator('button[aria-controls="navegacion-movil"]').click();
      const link = page
        .getByRole("navigation", { name: "Navegación móvil" })
        .getByRole("link", { name: "Nosotros", exact: true });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("aria-current", "page");
      return;
    }

    const link = page
      .getByRole("navigation", { name: "Navegación principal" })
      .getByRole("link", { name: "Nosotros", exact: true });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("aria-current", "page");
  });
});
