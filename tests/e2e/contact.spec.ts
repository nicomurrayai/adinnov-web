import { expect, test } from "@playwright/test";

test.describe.configure({ mode: "serial" });

const validPayload = {
  name: "Prueba automatizada",
  email: "qa@example.com",
  message: "Consulta de integración ejecutada por la suite automatizada.",
  intent: "contacto",
};

test.describe("API de contacto", () => {
  test.beforeEach(({ isMobile }) => {
    test.skip(isMobile, "Las pruebas de API se ejecutan una sola vez en desktop.");
  });

  test("rechaza payload inválido con errores de campo", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: { name: "A", email: "no-es-email", message: "corto" },
    });
    const body = await response.json();

    expect(response.status()).toBe(400);
    expect(body.ok).toBe(false);
    expect(body.fieldErrors).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
      message: expect.any(String),
    });
  });

  test("rechaza el honeypot sin invocar al proveedor", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: { ...validPayload, website: "https://spam.example" },
    });
    const body = await response.json();

    expect(response.status()).toBe(400);
    expect(body).toMatchObject({ ok: false });
  });

  test("rechaza alquiler de un producto no habilitado", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: {
        ...validPayload,
        intent: "alquiler",
        productSlug: "apps-juegos-interactivos",
      },
    });
    const body = await response.json();

    expect(response.status()).toBe(400);
    expect(body).toMatchObject({
      ok: false,
      fieldErrors: { productSlug: expect.any(String) },
    });
  });

  test("informa fallback real cuando Resend no está configurado", async ({ request }) => {
    test.skip(
      Boolean(process.env.RESEND_API_KEY),
      "Se evita disparar un correo real cuando RESEND_API_KEY está configurado.",
    );

    const response = await request.post("/api/contact", { data: validPayload });
    const body = await response.json();

    expect(response.status()).toBe(503);
    expect(body).toMatchObject({
      ok: false,
      fallback: {
        email: expect.stringContaining("@"),
        mailto: expect.stringMatching(/^mailto:/),
        whatsapp: expect.stringMatching(/^https:\/\/wa\.me\//),
      },
    });
  });
});

test.describe("formulario de contacto", () => {
  const intentCases = [
    ["contacto", "contacto"],
    ["catalogo", "catalogo"],
    ["distribuidor", "distribuidor"],
  ] as const;

  for (const [intent, expected] of intentCases) {
    test(`restaura el contexto ${intent} desde la URL`, async ({ page }) => {
      await page.goto(`/contacto?intent=${intent}`);
      await expect(page.getByLabel("¿Cómo podemos ayudarte?")).toHaveValue(expected);
    });
  }

  test("muestra el fallback del proveedor sin falso éxito", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 503,
        contentType: "application/json",
        body: JSON.stringify({
          ok: false,
          error: "No pudimos enviar el mensaje en este momento.",
          fallback: {
            email: "info@adinnov.com.ar",
            mailto: "mailto:info@adinnov.com.ar",
            whatsapp: "https://wa.me/5491154789803",
          },
        }),
      });
    });
    await page.goto("/contacto");
    await page.getByLabel("Nombre y apellido").fill("Prueba Playwright");
    await page.getByLabel("Email laboral").fill("qa@example.com");
    await page
      .getByLabel("Mensaje")
      .fill("Necesitamos una propuesta para cartelería digital corporativa.");
    await page.getByRole("button", { name: "Enviar consulta" }).click();

    const alert = page.locator('form [role="alert"]');
    await expect(alert).toContainText("No pudimos enviar");
    await expect(alert.getByRole("link", { name: "Enviar por email" })).toHaveAttribute(
      "href",
      /^mailto:/,
    );
    await expect(alert.getByRole("link", { name: "Abrir WhatsApp" })).toHaveAttribute(
      "href",
      /^https:\/\/wa\.me\//,
    );
    await expect(alert).not.toContainText("fue enviada");
  });

  test("confirma éxito solo frente a una respuesta exitosa", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, id: "email-test-id" }),
      });
    });
    await page.goto("/contacto");
    await page.getByLabel("Nombre y apellido").fill("Prueba Playwright");
    await page.getByLabel("Email laboral").fill("qa@example.com");
    await page
      .getByLabel("Mensaje")
      .fill("Necesitamos una propuesta para cartelería digital corporativa.");
    await page.getByRole("button", { name: "Enviar consulta" }).click();

    await expect(page.getByRole("status")).toContainText("Tu consulta fue enviada");
  });
});
