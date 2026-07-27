"use client";

import { useState, type FormEvent } from "react";
import { site } from "@content/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ intent = "contacto" }: { intent?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          message: data.get("message"),
          intent,
        }),
      });

      const json = (await res.json()) as {
        ok: boolean;
        error?: string;
        mailto?: string;
        whatsapp?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error || "No se pudo enviar. Intentá por WhatsApp.");
        return;
      }

      setStatus("success");
      setMessage("Recibimos tu consulta. Te respondemos a la brevedad.");
      form.reset();

      if (json.mailto) {
        window.location.href = json.mailto;
      }
    } catch {
      setStatus("error");
      setMessage("Error de red. Escribinos por WhatsApp.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Teléfono" name="phone" type="tel" />
        <Field label="Empresa" name="company" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-border bg-white px-3 py-2.5 text-sm text-navy outline-none transition focus:border-navy"
          placeholder="Contanos sobre tu proyecto..."
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-mid disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
        <a
          href={site.whatsapp[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-navy underline-offset-4 hover:underline"
        >
          O escribinos por WhatsApp
        </a>
      </div>

      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-accent" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-border bg-white px-3 py-2.5 text-sm text-navy outline-none transition focus:border-navy"
      />
    </div>
  );
}
