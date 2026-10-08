import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const resendMock = vi.hoisted(() => ({
  send: vi.fn(),
}));

const inquiriesMock = vi.hoisted(() => ({
  save: vi.fn(),
}));

vi.mock("resend", () => ({
  Resend: class MockResend {
    emails = { send: resendMock.send };
  },
}));

// El catálogo vive en Supabase: el test de la ruta usa un producto fijo.
vi.mock("@/lib/content", () => ({
  getProduct: vi.fn(async (slug: string) =>
    slug === "totem-digital"
      ? { slug, title: "Tótem Digital", availability: { sale: true, rental: true } }
      : undefined,
  ),
}));

// Supabase se simula: el test controla si la consulta quedó guardada para el panel.
vi.mock("@/lib/contact-inquiries", () => ({
  saveContactInquiry: inquiriesMock.save,
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

function createRequest(payload: Record<string, unknown> = validPayload) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

describe("POST /api/contact con Resend", () => {
  beforeEach(() => {
    resendMock.send.mockReset();
    inquiriesMock.save.mockReset();
    inquiriesMock.save.mockResolvedValue(false);
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    vi.stubEnv("RESEND_FROM", "Adinnov QA <qa@adinnov.com.ar>");
    vi.stubEnv("CONTACT_TO", "ventas@adinnov.com.ar");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("devuelve éxito cuando Resend confirma un data.id", async () => {
    resendMock.send.mockResolvedValue({
      data: { id: "email_confirmado_123" },
      error: null,
    });

    const response = await POST(createRequest());
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ ok: true });
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

  it("devuelve fallback 503 cuando Resend responde result.error y no se pudo guardar", async () => {
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

  it("devuelve fallback 503 cuando el proveedor lanza una excepción y no se pudo guardar", async () => {
    resendMock.send.mockRejectedValue(new Error("Resend no disponible"));

    const response = await POST(createRequest());
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body.ok).toBe(false);
    expect(body.error).toContain("No pudimos enviar");
    expect(body.fallback).toBeDefined();
  });
});

describe("POST /api/contact guarda la consulta para el panel", () => {
  beforeEach(() => {
    resendMock.send.mockReset();
    inquiriesMock.save.mockReset();
    inquiriesMock.save.mockResolvedValue(true);
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("guarda la consulta con el producto resuelto y además envía el email", async () => {
    resendMock.send.mockResolvedValue({ data: { id: "email_123" }, error: null });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(inquiriesMock.save).toHaveBeenCalledOnce();
    expect(inquiriesMock.save).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Prueba de proveedor",
        email: "qa@example.com",
        phone: "11 5555 5555",
        intent: "venta",
        quantity: 2,
      }),
      expect.objectContaining({ slug: "totem-digital", title: "Tótem Digital" }),
    );
    expect(resendMock.send).toHaveBeenCalledOnce();
  });

  it("confirma el envío aunque falle el email si la consulta quedó guardada", async () => {
    resendMock.send.mockResolvedValue({ data: null, error: { message: "Proveedor caído" } });

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
  });

  it("confirma el envío sin Resend configurado si la consulta quedó guardada", async () => {
    vi.stubEnv("RESEND_API_KEY", "");

    const response = await POST(createRequest());

    expect(response.status).toBe(200);
    expect(resendMock.send).not.toHaveBeenCalled();
  });

  it("devuelve fallback 503 si no hay Resend ni se pudo guardar", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    inquiriesMock.save.mockResolvedValue(false);

    const response = await POST(createRequest());
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body).toMatchObject({ ok: false, fallback: { mailto: expect.stringMatching(/^mailto:/) } });
  });

  it("no guarda el honeypot", async () => {
    const response = await POST(createRequest({ ...validPayload, website: "https://spam.example" }));

    expect(response.status).toBe(400);
    expect(inquiriesMock.save).not.toHaveBeenCalled();
    expect(resendMock.send).not.toHaveBeenCalled();
  });
});
