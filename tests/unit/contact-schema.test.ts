import { describe, expect, it } from "vitest";
import {
  contactIntents,
  contactSchema,
  isContactIntent,
} from "../../src/lib/contact-schema";

const validGeneralPayload = {
  name: "Equipo de Compras",
  email: "compras@example.com",
  message: "Necesitamos evaluar cartelería digital para una nueva sede.",
};

describe("contactSchema", () => {
  it("acepta una consulta general y aplica el intent por defecto", () => {
    const result = contactSchema.safeParse(validGeneralPayload);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.intent).toBe("contacto");
      expect(result.data.name).toBe("Equipo de Compras");
    }
  });

  it.each(["venta", "alquiler"] as const)(
    "requiere producto para el intent %s",
    (intent) => {
      const result = contactSchema.safeParse({
        ...validGeneralPayload,
        intent,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.productSlug).toBeDefined();
      }
    },
  );

  it("normaliza cantidad y campos opcionales vacíos", () => {
    const result = contactSchema.parse({
      ...validGeneralPayload,
      intent: "venta",
      productSlug: "totem-digital",
      quantity: "12",
      phone: "",
      company: "   ",
    });

    expect(result.quantity).toBe(12);
    expect(result.phone).toBeUndefined();
    expect(result.company).toBeUndefined();
  });

  it("valida formato y orden del período", () => {
    const missingEnd = contactSchema.safeParse({
      ...validGeneralPayload,
      intent: "alquiler",
      productSlug: "totem-digital",
      startDate: "2026-10-05",
    });
    expect(missingEnd.success).toBe(false);

    const reversed = contactSchema.safeParse({
      ...validGeneralPayload,
      intent: "alquiler",
      productSlug: "totem-digital",
      startDate: "2026-10-10",
      endDate: "2026-10-05",
    });
    expect(reversed.success).toBe(false);

    const impossible = contactSchema.safeParse({
      ...validGeneralPayload,
      intent: "alquiler",
      productSlug: "totem-digital",
      startDate: "2026-02-31",
      endDate: "2026-03-02",
    });
    expect(impossible.success).toBe(false);

    const valid = contactSchema.safeParse({
      ...validGeneralPayload,
      intent: "alquiler",
      productSlug: "totem-digital",
      startDate: "2026-10-05",
      endDate: "2026-10-08",
    });
    expect(valid.success).toBe(true);
  });

  it("rechaza límites, email, slug y cantidad inválidos", () => {
    expect(
      contactSchema.safeParse({ ...validGeneralPayload, name: "A" }).success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({ ...validGeneralPayload, email: "sin-arroba" })
        .success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({ ...validGeneralPayload, message: "corto" })
        .success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({
        ...validGeneralPayload,
        intent: "venta",
        productSlug: "Slug Inválido",
      }).success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({
        ...validGeneralPayload,
        intent: "venta",
        productSlug: "totem-digital",
        quantity: 0,
      }).success,
    ).toBe(false);
  });

  it("mantiene el honeypot para que la API pueda rechazarlo", () => {
    const result = contactSchema.parse({
      ...validGeneralPayload,
      website: "https://spam.example",
    });

    expect(result.website).toBe("https://spam.example");
  });

  it("reconoce únicamente intents públicos", () => {
    for (const intent of contactIntents) {
      expect(isContactIntent(intent)).toBe(true);
    }
    expect(isContactIntent("newsletter")).toBe(false);
    expect(isContactIntent(undefined)).toBe(false);
  });
});
