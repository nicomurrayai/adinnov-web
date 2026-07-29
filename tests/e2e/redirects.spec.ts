import { expect, test } from "@playwright/test";

const redirects = [
  ["/producto/totem-digital", "/productos/totem-digital"],
  ["/nuestros-trabajos", "/trabajos"],
  ["/nuestros-clientes", "/clientes"],
  ["/servicios", "/soluciones"],
] as const;

test.describe("redirecciones históricas", () => {
  test.beforeEach(({ isMobile }) => {
    test.skip(isMobile, "Las redirecciones HTTP se verifican una sola vez en desktop.");
  });

  for (const [source, destination] of redirects) {
    test(`${source} responde 301 hacia ${destination}`, async ({ request }) => {
      const response = await request.get(source, { maxRedirects: 0 });

      expect(response.status()).toBe(301);
      expect(response.headers().location).toContain(destination);
    });
  }
});
