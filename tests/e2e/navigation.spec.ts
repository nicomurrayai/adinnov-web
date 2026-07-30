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
      await page.getByRole("link", { name: "Productos" }).click();
    } else {
      const trigger = page
        .getByRole("navigation", { name: "Navegación principal" })
        .getByRole("button", { name: "Productos" });
      await trigger.focus();
      await page.keyboard.press("ArrowDown");
      await expect(trigger).toHaveAttribute("aria-expanded", "true");
      await expect(page.getByRole("link", { name: /Ver catálogo completo/ })).toBeFocused();

      await page.keyboard.press("Escape");
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
      await expect(trigger).toBeFocused();

      await trigger.click();
      await page.getByRole("link", { name: /Ver catálogo completo/ }).click();
    }

    await expect(page).toHaveURL(/\/productos$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("el enlace de salto lleva el foco al contenido principal", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const skipLink = page.getByRole("link", { name: "Saltar al contenido" });

    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    await skipLink.press("Enter");
    await expect(page).toHaveURL(/#contenido-principal$/);
  });
});
