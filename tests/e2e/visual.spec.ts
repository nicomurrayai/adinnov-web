import { expect, test } from "@playwright/test";
import { waitForImages, waitForStablePage } from "./support";

test.describe.configure({ mode: "serial" });

const visualPages = [
  ["inicio", "/"],
  ["catalogo", "/productos"],
  ["ficha-totem-digital", "/productos/totem-digital"],
  ["alquileres", "/alquileres"],
  ["contacto", "/contacto"],
] as const;

test.describe("regresión visual", () => {
  test.skip(
    process.env.VISUAL_REGRESSION !== "1",
    "Activá VISUAL_REGRESSION=1 y usá --update-snapshots para generar baselines.",
  );

  for (const [name, route] of visualPages) {
    test(`${name} conserva su composición`, async ({ page }) => {
      test.setTimeout(120_000);
      await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "light" });
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await waitForStablePage(page);
      await waitForImages(page);
      await page.addStyleTag({
        content: "video { visibility: hidden !important; }",
      });

      await expect(page).toHaveScreenshot(`${name}.png`, {
        fullPage: true,
        timeout: 30_000,
      });
    });
  }
});
