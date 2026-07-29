import { expect, test } from "@playwright/test";
import {
  expectNoSeriousA11yViolations,
  waitForStablePage,
} from "./support";

test.describe.configure({ mode: "serial" });

const representativePages = [
  ["Inicio", "/"],
  ["Catálogo", "/productos"],
  ["Ficha", "/productos/totem-digital"],
  ["Alquileres", "/alquileres"],
  ["Contacto", "/contacto"],
] as const;

test.describe("accesibilidad automatizada", () => {
  for (const [name, route] of representativePages) {
    test(`${name} no tiene errores críticos o serios de axe`, async ({ page }) => {
      const runtimeErrors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") runtimeErrors.push(message.text());
      });
      page.on("pageerror", (error) => runtimeErrors.push(error.message));

      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await waitForStablePage(page);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expectNoSeriousA11yViolations(page);
      expect(runtimeErrors, `Errores de runtime en ${name}`).toEqual([]);
    });
  }
});
