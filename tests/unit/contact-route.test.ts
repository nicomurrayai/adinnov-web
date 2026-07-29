import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const resendMock = vi.hoisted(() => ({
  send: vi.fn(),
}));

vi.mock("resend", () => ({
  Resend: class MockResend {
    emails = { send: resendMock.send };
  },
}));

import { POST } from "../../src/app/api/contact/route";

const validPayload = {
  name: "Prueba de proveedor",
  email: "qa@example.com",
  phone: "11 5555 5555",
  company: "Empresa QA",
  message: "Necesitamos cotizar una solución de cartelería digital.",
  intent: "venta",
  productSlug: "totem-digital",
  quantity: 2,
};

function createRequest(payload = validPayload) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

describe("POST /api/contact con Resend", () => {
  beforeEach(() => {
    resendMock.send.mockReset();
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    vi.stubEnv("RESEND_FROM", "Adinnov QA <qa@adinnov.com.ar>");
    vi.stubEnv("CONTACT_TO", "ventas@adinnov.com.ar");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("devuelve éxito únicamente cuando Resend confirma un data.id", async () => {
    resendMock.send.mockResolvedValue({
      data: { id: "email_confirmado_123" },
      error: null,
    });

    const response = await POST(createRequest());
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ ok: true, id: "email_confirmado_123" });
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(resendMock.send).toHaveBeenCalledOnce();
    expect(resendMock.send).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "Adinnov QA <qa@adinnov.com.ar>",
        to: ["ventas@adinnov.com.ar"],
        replyTo: "qa@example.com",
        subject: expect.stringContaining("Prueba de proveedor"),
        text: expect.stringContaining("Tótem Digital"),
      }),
    );
  });

  it("devuelve fallback 503 cuando Resend responde result.error", async () => {
    resendMock.send.mockResolvedValue({
      data: null,
      error: { message: "Proveedor rechazó el envío" },
    });

    const response = await POST(createRequest());
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body).toMatchObject({
      ok: false,
      fallback: {
        email: expect.stringContaining("@"),
        mailto: expect.stringMatching(/^mailto:/),
        whatsapp: expect.stringMatching(/^https:\/\/wa\.me\//),
      },
    });
  });

  it("devuelve fallback 503 cuando el proveedor lanza una excepción", async () => {
    resendMock.send.mockRejectedValue(new Error("Resend no disponible"));

    const response = await POST(createRequest());
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body.ok).toBe(false);
    expect(body.error).toContain("No pudimos enviar");
    expect(body.fallback).toBeDefined();
  });
});
