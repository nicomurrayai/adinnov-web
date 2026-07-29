import { z } from "zod";

export const contactIntents = [
  "contacto",
  "venta",
  "alquiler",
  "catalogo",
  "distribuidor",
] as const;

export type ContactIntent = (typeof contactIntents)[number];

const optionalText = (max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
    z.string().trim().max(max).optional(),
  );

const optionalPositiveInteger = z.preprocess(
  (value) => (value === "" || value === null || value === undefined ? undefined : value),
  z.coerce.number().int().min(1).max(999).optional(),
);

const optionalDate = z.preprocess(
  (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
  z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Ingresá una fecha válida.")
    .refine((value) => {
      const [year, month, day] = value.split("-").map(Number);
      const date = new Date(Date.UTC(year, month - 1, day));
      return (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() === month - 1 &&
        date.getUTCDate() === day
      );
    }, "Ingresá una fecha válida.")
    .optional(),
);

export const contactSchema = z
  .object({
    name: z.string().trim().min(2, "Ingresá tu nombre.").max(80),
    email: z.string().trim().email("Ingresá un email válido.").max(254),
    phone: optionalText(40),
    company: optionalText(120),
    message: z
      .string()
      .trim()
      .min(10, "Contanos un poco más sobre tu consulta.")
      .max(3000),
    intent: z.enum(contactIntents).default("contacto"),
    productSlug: z.preprocess(
      (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
      z
        .string()
        .trim()
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Elegí un producto válido.")
        .max(120, "Elegí un producto válido.")
        .optional(),
    ),
    quantity: optionalPositiveInteger,
    location: optionalText(160),
    startDate: optionalDate,
    endDate: optionalDate,
    eventType: optionalText(120),
    website: optionalText(200),
  })
  .superRefine((data, ctx) => {
    if ((data.intent === "venta" || data.intent === "alquiler") && !data.productSlug) {
      ctx.addIssue({
        code: "custom",
        path: ["productSlug"],
        message: "Elegí el equipo que querés cotizar.",
      });
    }

    if (Boolean(data.startDate) !== Boolean(data.endDate)) {
      ctx.addIssue({
        code: "custom",
        path: [data.startDate ? "endDate" : "startDate"],
        message: "Completá ambas fechas para indicar un período.",
      });
    }

    if (data.startDate && data.endDate && data.endDate < data.startDate) {
      ctx.addIssue({
        code: "custom",
        path: ["endDate"],
        message: "La fecha de fin debe ser posterior a la de inicio.",
      });
    }
  });

export type ContactPayload = z.infer<typeof contactSchema>;

export function isContactIntent(value: string | undefined): value is ContactIntent {
  return contactIntents.includes(value as ContactIntent);
}
