import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

export async function waitForStablePage(page: Page) {
  await page.waitForLoadState("load");
  await expect(page.locator("body")).toBeVisible();
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
}

export async function expectNoSeriousA11yViolations(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  const blocking = results.violations
    .filter(
      (violation) =>
        violation.impact === "serious" || violation.impact === "critical",
    )
    .map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      help: violation.help,
      targets: violation.nodes.map((node) => node.target.join(" ")),
    }));

  expect(
    blocking,
    `Violaciones críticas/serias de axe:\n${JSON.stringify(blocking, null, 2)}`,
  ).toEqual([]);
}

export async function waitForImages(page: Page) {
  await page.evaluate(async () => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const step = Math.max(window.innerHeight, 600);
    for (let position = 0; position < root.scrollHeight; position += step) {
      window.scrollTo(0, position);
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      });
      await new Promise<void>((resolve) => setTimeout(resolve, 60));
    }

    const images = Array.from(document.images).filter((image) => {
      const rect = image.getBoundingClientRect();
      return (
        image.offsetParent !== null &&
        rect.right > 0 &&
        rect.left < window.innerWidth
      );
    });
    await Promise.race([
      Promise.all(
        images.map((image) => {
          if (image.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          });
        }),
      ),
      new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new Error("Las imagenes no terminaron de cargar en 30 s")),
          30_000,
        ),
      ),
    ]);

    await Promise.all(
      images.map(async (image) => {
        try {
          await image.decode();
        } catch {
          // Una imagen rota ya fue capturada por el fallback visual de la UI.
        }
      }),
    );

    window.scrollTo(0, 0);
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });

    root.style.scrollBehavior = previousScrollBehavior;
  });
}
