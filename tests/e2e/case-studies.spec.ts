import { expect, test } from "@playwright/test";
import { expectNoSeriousA11yViolations, waitForImages, waitForStablePage } from "./support";

test.describe("casos de éxito", () => {
  test.beforeEach(async ({ page }) => {
    // Las animaciones de entrada (Reveal) alteran el contraste que mide axe a mitad de transición.
    await page.emulateMedia({ reducedMotion: "reduce" });
  });

  test("el listado tiene un único h1 y muestra tarjetas o el estado vacío", async ({ page }) => {
    const response = await page.goto("/casos-de-exito", { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await waitForStablePage(page);

    await waitForImages(page);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Casos de éxito");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/casos-de-exito$/);

    const cards = page.locator('main article a[href^="/casos-de-exito/"]');
    if ((await cards.count()) === 0) {
      await expect(page.getByText("Estamos preparando nuestros casos de éxito")).toBeVisible();
    }
    await expectNoSeriousA11yViolations(page);
  });

  test("la página de un caso publicado expone SEO técnico completo", async ({ page, isMobile }) => {
    test.skip(isMobile, "Los metadatos se verifican una sola vez en desktop.");
    await page.goto("/casos-de-exito", { waitUntil: "domcontentloaded" });
    const firstCard = page.locator('main article a[href^="/casos-de-exito/"]').first();
    test.skip((await firstCard.count()) === 0, "No hay casos publicados en Supabase.");

    const href = await firstCard.getAttribute("href");
    await page.goto(href!, { waitUntil: "domcontentloaded" });
    await waitForStablePage(page);
    await waitForImages(page);

    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "article");
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);

    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    const types = jsonLd.flatMap((text) => {
      const data = JSON.parse(text) as { "@type": string | string[] } | { "@type": string }[];
      return (Array.isArray(data) ? data : [data]).flatMap((item) => item["@type"]);
    });
    expect(types).toEqual(expect.arrayContaining(["Article", "BreadcrumbList"]));
    await expectNoSeriousA11yViolations(page);
  });

  test("un slug inexistente responde 404", async ({ request, isMobile }) => {
    test.skip(isMobile, "Las respuestas HTTP se verifican una sola vez en desktop.");
    const response = await request.get("/casos-de-exito/caso-que-no-existe-e2e", { maxRedirects: 0 });
    expect(response.status()).toBe(404);
  });

  test("una vista previa con token inválido responde 404 y no se indexa", async ({ request, isMobile }) => {
    test.skip(isMobile, "Las respuestas HTTP se verifican una sola vez en desktop.");
    const response = await request.get("/casos-de-exito/vista-previa/00000000-0000-4000-8000-000000000000");
    expect(response.status()).toBe(404);

    const robots = await request.get("/robots.txt");
    expect(await robots.text()).toContain("Disallow: /casos-de-exito/vista-previa/");
  });
});
