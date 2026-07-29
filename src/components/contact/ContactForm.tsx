"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { site } from "@content/site";
import type { ContactIntent } from "@/lib/contact-schema";

export type ContactProductOption = {
  slug: string;
  title: string;
  sale: boolean;
  rental: boolean;
};

type Status = "idle" | "loading" | "success" | "error";

type ApiResponse = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
  fallback?: {
    email: string;
    mailto: string;
    whatsapp: string;
  };
};

const intentOptions: { value: ContactIntent; label: string }[] = [
  { value: "contacto", label: "Consulta general" },
  { value: "venta", label: "Cotizar una compra" },
  { value: "alquiler", label: "Cotizar un alquiler" },
  { value: "catalogo", label: "Solicitar catálogo" },
  { value: "distribuidor", label: "Ser distribuidor" },
];

const fieldClass =
  "min-h-12 w-full rounded-sm border border-navy/50 bg-white px-4 py-3 text-[15px] text-navy transition-[border-color,box-shadow] duration-200 placeholder:text-muted focus-visible:border-accent focus-visible:ring-4 focus-visible:ring-accent/10 disabled:cursor-not-allowed disabled:bg-surface";

function focusFirstFieldError(
  form: HTMLFormElement,
  errors: Record<string, string> | undefined,
) {
  const firstField = Object.keys(errors ?? {})[0];
  if (!firstField) return;
  const control = form.elements.namedItem(firstField);
  if (control instanceof HTMLElement) control.focus();
}

export function ContactForm({
  initialIntent = "contacto",
  initialProductSlug = "",
  products = [],
}: {
  initialIntent?: ContactIntent;
  initialProductSlug?: string;
  products?: ContactProductOption[];
}) {
  const [intent, setIntent] = useState<ContactIntent>(initialIntent);
  const [productSlug, setProductSlug] = useState(initialProductSlug);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [fallback, setFallback] = useState<ApiResponse["fallback"]>();

  const availableProducts = useMemo(() => {
    if (intent === "alquiler") return products.filter((product) => product.rental);
    if (intent === "venta") return products.filter((product) => product.sale);
    return products;
  }, [intent, products]);

  const isQuote = intent === "venta" || intent === "alquiler";

  function changeIntent(nextIntent: ContactIntent) {
    setIntent(nextIntent);
    setFieldErrors({});
    setStatus("idle");
    setMessage("");
    setFallback(undefined);

    if (nextIntent !== "venta" && nextIntent !== "alquiler") {
      setProductSlug("");
      return;
    }

    const selected = products.find((product) => product.slug === productSlug);
    const remainsAvailable =
      selected && (nextIntent === "venta" ? selected.sale : selected.rental);
    if (!remainsAvailable) setProductSlug("");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setMessage("Enviando tu consulta…");
    setFieldErrors({});
    setFallback(undefined);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      const json = (await response.json()) as ApiResponse;

      if (!response.ok || !json.ok) {
        setStatus("error");
        setMessage(
          json.error ?? "No pudimos enviar el mensaje. Revisá los datos e intentá de nuevo.",
        );
        setFieldErrors(json.fieldErrors ?? {});
        setFallback(json.fallback);
        focusFirstFieldError(form, json.fieldErrors);
        return;
      }

      setStatus("success");
      setMessage("Tu consulta fue enviada. Nuestro equipo te va a responder a la brevedad.");
      form.reset();
      setIntent(initialIntent);
      setProductSlug(initialProductSlug);
    } catch {
      setStatus("error");
      setMessage("No pudimos conectar con el servidor. Podés escribirnos por email o WhatsApp.");
      setFallback({
        email: site.email,
        mailto: `mailto:${site.email}`,
        whatsapp: site.whatsapp[0].href,
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      onInput={(event) => {
        const fieldName = (event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).name;
        if (!fieldName || !fieldErrors[fieldName]) return;
        setFieldErrors((current) => {
          const next = { ...current };
          delete next[fieldName];
          return next;
        });
      }}
      className="space-y-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Nombre y apellido" name="name" error={fieldErrors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={fieldClass}
            placeholder="Ej.: Ana Pérez…"
          />
        </FormField>
        <FormField label="Email laboral" name="email" error={fieldErrors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={254}
            spellCheck={false}
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={fieldClass}
            placeholder="Ej.: nombre@empresa.com…"
          />
        </FormField>
        <FormField label="Teléfono" name="phone" error={fieldErrors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={40}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            className={fieldClass}
            placeholder="Ej.: 11 0000 0000…"
          />
        </FormField>
        <FormField label="Empresa u organización" name="company" error={fieldErrors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={fieldErrors.company ? "company-error" : undefined}
            className={fieldClass}
            placeholder="Ej.: Nombre de la organización…"
          />
        </FormField>
      </div>

      <FormField label="¿Cómo podemos ayudarte?" name="intent" error={fieldErrors.intent} required>
        <select
          id="intent"
          name="intent"
          value={intent}
          onChange={(event) => changeIntent(event.target.value as ContactIntent)}
          aria-invalid={Boolean(fieldErrors.intent)}
          aria-describedby={fieldErrors.intent ? "intent-error" : undefined}
          className={fieldClass}
          required
        >
          {intentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>

      {isQuote ? (
        <fieldset className="rounded-sm border border-border bg-white p-5 md:p-6">
          <legend className="px-2 font-[family-name:var(--font-outfit)] text-lg font-medium text-navy">
            Datos de la {intent === "alquiler" ? "reserva" : "cotización"}
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <FormField
                label="Producto"
                name="productSlug"
                error={fieldErrors.productSlug}
                required
              >
                <select
                  id="productSlug"
                  name="productSlug"
                  value={productSlug}
                  onChange={(event) => setProductSlug(event.target.value)}
                  required
                  aria-invalid={Boolean(fieldErrors.productSlug)}
                  aria-describedby={fieldErrors.productSlug ? "productSlug-error" : undefined}
                  className={fieldClass}
                >
                  <option value="">Elegí un producto</option>
                  {availableProducts.map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.title}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <FormField label="Cantidad" name="quantity" error={fieldErrors.quantity}>
              <input
                id="quantity"
                name="quantity"
                type="number"
                inputMode="numeric"
                min={1}
                max={999}
                aria-invalid={Boolean(fieldErrors.quantity)}
                aria-describedby={fieldErrors.quantity ? "quantity-error" : undefined}
                className={fieldClass}
                placeholder="Ej.: 1…"
              />
            </FormField>
            <FormField label="Ciudad / ubicación" name="location" error={fieldErrors.location}>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="address-level2"
                maxLength={160}
                aria-invalid={Boolean(fieldErrors.location)}
                aria-describedby={fieldErrors.location ? "location-error" : undefined}
                className={fieldClass}
                placeholder="Ej.: Ciudad Autónoma de Buenos Aires…"
              />
            </FormField>

            {intent === "alquiler" ? (
              <>
                <FormField label="Fecha de inicio" name="startDate" error={fieldErrors.startDate}>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    aria-invalid={Boolean(fieldErrors.startDate)}
                    aria-describedby={fieldErrors.startDate ? "startDate-error" : undefined}
                    className={fieldClass}
                  />
                </FormField>
                <FormField label="Fecha de fin" name="endDate" error={fieldErrors.endDate}>
                  <input
                    id="endDate"
                    name="endDate"
                    type="date"
                    aria-invalid={Boolean(fieldErrors.endDate)}
                    aria-describedby={fieldErrors.endDate ? "endDate-error" : undefined}
                    className={fieldClass}
                  />
                </FormField>
                <div className="sm:col-span-2">
                  <FormField
                    label="Tipo de evento"
                    name="eventType"
                    error={fieldErrors.eventType}
                  >
                    <input
                      id="eventType"
                      name="eventType"
                      type="text"
                      maxLength={120}
                      aria-invalid={Boolean(fieldErrors.eventType)}
                      aria-describedby={fieldErrors.eventType ? "eventType-error" : undefined}
                      className={fieldClass}
                      placeholder="Feria, congreso, evento corporativo…"
                    />
                  </FormField>
                </div>
              </>
            ) : null}
          </div>
        </fieldset>
      ) : null}

      <FormField label="Mensaje" name="message" error={fieldErrors.message} required>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={3000}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : "message-help"}
          className={`${fieldClass} resize-y`}
          placeholder="Contanos qué necesitás, dónde se va a instalar y para cuándo."
        />
        {!fieldErrors.message ? (
          <span id="message-help" className="mt-2 block text-xs leading-relaxed text-muted">
            Cuanto más contexto nos compartas, más precisa será la respuesta.
          </span>
        ) : null}
      </FormField>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Sitio web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Al enviar aceptás que usemos estos datos únicamente para responder tu consulta.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:bg-accent active:translate-y-px disabled:cursor-wait disabled:opacity-60"
        >
          {status === "loading" ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" aria-hidden="true" />
          ) : (
            <ArrowUpRight />
          )}
          {status === "loading" ? "Enviando…" : "Enviar consulta"}
        </button>
      </div>

      <div aria-live="polite" aria-atomic="true" className="min-h-6">
        {message ? (
          <div
            role={status === "error" ? "alert" : "status"}
            className={`rounded-sm border px-4 py-3 text-sm leading-relaxed ${
              status === "success"
                ? "border-emerald-700/20 bg-emerald-50 text-emerald-900"
                : status === "error"
                  ? "border-red-700/20 bg-red-50 text-red-900"
                  : "border-border bg-white text-muted"
            }`}
          >
            <p>{message}</p>
            {fallback ? (
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-2 font-medium">
                <a className="underline underline-offset-4" href={fallback.mailto}>
                  Enviar por email
                </a>
                <a
                  className="underline underline-offset-4"
                  href={fallback.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp
                </a>
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </form>
  );
}

function FormField({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required ? <span className="ml-1 text-accent" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {error ? (
        <span id={`${name}-error`} className="mt-2 block text-xs font-medium text-red-700">
          {error}
        </span>
      ) : null}
    </div>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
