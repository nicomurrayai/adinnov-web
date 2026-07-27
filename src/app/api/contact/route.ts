import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@content/site";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  intent?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  const phone = (body.phone || "").trim();
  const company = (body.company || "").trim();
  const intent = (body.intent || "contacto").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Completá nombre, email y mensaje." },
      { status: 400 },
    );
  }

  const text = [
    `Intent: ${intent}`,
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone || "-"}`,
    `Empresa: ${company || "-"}`,
    "",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM || "Adinnov Web <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO || site.email],
        replyTo: email,
        subject: `[Adinnov] ${intent}: ${name}`,
        text,
      });
      return NextResponse.json({ ok: true });
    } catch {
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el email." },
        { status: 500 },
      );
    }
  }

  // Fallback: client can open mailto
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `[Adinnov] ${intent}: ${name}`,
  )}&body=${encodeURIComponent(text)}`;

  return NextResponse.json({
    ok: true,
    mailto,
    whatsapp: site.whatsapp[0].href,
  });
}
