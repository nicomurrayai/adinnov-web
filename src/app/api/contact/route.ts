import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@content/site";
import { getProduct } from "@/lib/content";
import { saveContactInquiry } from "@/lib/contact-inquiries";
import { contactSchema, type ContactPayload } from "@/lib/contact-schema";

const MAX_BODY_BYTES = 24_000;

const intentLabels: Record<ContactPayload["intent"], string> = {
  contacto: "Consulta general",
  venta: "Cotización de compra",
  alquiler: "Cotización de alquiler",
  catalogo: "Solicitud de catálogo",
  distribuidor: "Consulta de distribución",
};

function fallbackResponse(text: string, status = 503) {
  const subject = "Consulta desde adinnov.com.ar";
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  return NextResponse.json(
    {
      ok: false,
      error:
        "No pudimos enviar el mensaje en este momento. Podés continuar por email o WhatsApp.",
      fallback: {
        email: site.email,
        mailto,
        whatsapp: site.whatsapp[0].href,
      },
    },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "La consulta supera el tamaño permitido." },
      { status: 413 },
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "No pudimos leer los datos enviados." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    const fieldErrors = parsed.error.issues.reduce<Record<string, string>>(
      (errors, issue) => {
        const field = String(issue.path[0] ?? "form");
        errors[field] ??= issue.message;
        return errors;
      },
      {},
    );

    return NextResponse.json(
      {
        ok: false,
        error: "Revisá los campos marcados e intentá nuevamente.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  const payload = parsed.data;

  if (payload.website) {
    return NextResponse.json(
      { ok: false, error: "No pudimos procesar la consulta." },
      { status: 400 },
    );
  }

  const product = payload.productSlug ? await getProduct(payload.productSlug) : undefined;
  if (payload.productSlug && !product) {
    return NextResponse.json(
      {
        ok: false,
        error: "El producto seleccionado no existe.",
        fieldErrors: { productSlug: "Elegí un producto válido." },
      },
      { status: 400 },
    );
  }

  if (payload.intent === "alquiler" && product && !product.availability.rental) {
    return NextResponse.json(
      {
        ok: false,
        error: "Este equipo no está disponible para alquiler.",
        fieldErrors: { productSlug: "Elegí un equipo disponible para alquiler." },
      },
      { status: 400 },
    );
  }

  if (payload.intent === "venta" && product && !product.availability.sale) {
    return NextResponse.json(
      {
        ok: false,
        error: "Este equipo no está disponible para venta.",
        fieldErrors: { productSlug: "Elegí un equipo disponible para venta." },
      },
      { status: 400 },
    );
  }

  const text = [
    `Motivo: ${intentLabels[payload.intent]}`,
    `Producto: ${product?.title ?? "-"}`,
    `Cantidad: ${payload.quantity ?? "-"}`,
    `Ubicación: ${payload.location ?? "-"}`,
    `Fechas: ${payload.startDate && payload.endDate ? `${payload.startDate} a ${payload.endDate}` : "-"}`,
    `Tipo de evento: ${payload.eventType ?? "-"}`,
    "",
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Teléfono: ${payload.phone ?? "-"}`,
    `Empresa: ${payload.company ?? "-"}`,
    "",
    payload.message,
  ].join("\n");

  // La consulta se guarda para el panel (sección Consultas) y además se avisa por email.
  // Alcanza con que uno de los dos canales funcione para no perder el contacto.
  const [saved, emailed] = await Promise.all([
    saveContactInquiry(payload, product),
    sendContactEmail(payload, text),
  ]);

  if (!saved && !emailed) {
    return fallbackResponse(text);
  }

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}

async function sendContactEmail(payload: ContactPayload, text: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM || "Adinnov Web <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || site.email],
      replyTo: payload.email,
      subject: `[Adinnov] ${intentLabels[payload.intent]} · ${payload.name.replace(/\s+/g, " ")}`,
      text,
    });
    return !result.error && Boolean(result.data?.id);
  } catch {
    return false;
  }
}
