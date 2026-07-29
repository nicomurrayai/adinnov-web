import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@content/site";
import { Container } from "@/components/ui/Container";
import {
  ContactForm,
  type ContactProductOption,
} from "@/components/contact/ContactForm";
import { getAllProducts, getProduct } from "@/lib/content";
import { isContactIntent, type ContactIntent } from "@/lib/contact-schema";

export const metadata: Metadata = {
  title: "Contacto y cotizaciones",
  description:
    "Cotizá la compra o alquiler de cartelería digital, pantallas LED, tótems y soluciones interactivas de Adinnov.",
  alternates: { canonical: "/contacto" },
};

type SearchParams = Promise<{
  intent?: string | string[];
  product?: string | string[];
}>;

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default function ContactoPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="relative overflow-hidden bg-white pb-24 pt-24 md:pb-32 md:pt-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[linear-gradient(115deg,var(--surface),transparent_68%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
          <ContactAside />
          <Suspense fallback={<ContactFormFallback />}>
            <ContactFormPanel searchParams={searchParams} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

async function ContactFormPanel({ searchParams }: { searchParams: SearchParams }) {
  const query = await searchParams;
  const queryIntent = firstValue(query.intent);
  const requestedSlug = firstValue(query.product);
  const intent: ContactIntent = isContactIntent(queryIntent) ? queryIntent : "contacto";
  const requestedProduct = requestedSlug ? getProduct(requestedSlug) : undefined;
  const validProduct =
    requestedProduct &&
    (intent !== "alquiler" || requestedProduct.availability.rental) &&
    (intent !== "venta" || requestedProduct.availability.sale)
      ? requestedProduct
      : undefined;

  const products: ContactProductOption[] = getAllProducts().map((product) => ({
    slug: product.slug,
    title: product.title,
    sale: product.availability.sale,
    rental: product.availability.rental,
  }));

  const heading = validProduct
    ? `${intent === "alquiler" ? "Alquilá" : "Cotizá"} ${validProduct.title}`
    : intent === "catalogo"
      ? "Recibí el catálogo"
      : intent === "distribuidor"
        ? "Conversemos sobre distribución"
        : "Contanos sobre tu proyecto";

  return (
    <section aria-labelledby="contact-form-title" className="rounded-sm border border-border bg-surface p-6 shadow-[0_24px_80px_rgba(11,31,58,0.08)] sm:p-8 lg:p-10">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
        Respuesta comercial personalizada
      </p>
      <h2
        id="contact-form-title"
        className="mt-3 max-w-xl font-[family-name:var(--font-outfit)] text-3xl font-medium tracking-tight text-navy md:text-4xl"
      >
        {heading}
      </h2>
      <p className="mb-9 mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        Completá los datos y un especialista de Adinnov va a revisar la necesidad antes de responderte.
      </p>
      <ContactForm
        initialIntent={intent}
        initialProductSlug={validProduct?.slug}
        products={products}
      />
    </section>
  );
}

function ContactAside() {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
        Hablemos
      </p>
      <h1 className="mt-4 max-w-lg text-balance font-[family-name:var(--font-outfit)] text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-navy md:text-6xl">
        Tecnología pensada para tu espacio.
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
        Venta, alquiler e integración de cartelería digital para empresas, instituciones y eventos.
      </p>

      <dl className="mt-10 divide-y divide-border border-y border-border">
        <ContactLine term="Email">
          <a href={`mailto:${site.email}`} className="font-medium text-navy hover:text-accent">
            {site.email}
          </a>
        </ContactLine>
        <ContactLine term="Teléfonos">
          <span className="flex flex-col items-end gap-1">
            {site.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className="font-medium text-navy hover:text-accent">
                {phone.display}
              </a>
            ))}
          </span>
        </ContactLine>
        <ContactLine term="WhatsApp">
          <span className="flex flex-col items-end gap-1">
            {site.whatsapp.map((channel) => (
              <a
                key={channel.href}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy hover:text-accent"
              >
                {channel.display}
              </a>
            ))}
          </span>
        </ContactLine>
        <ContactLine term="Ubicación">
          <span className="max-w-[14rem] text-right font-medium text-navy">
            Membrillar 74, Ciudad de Buenos Aires
          </span>
        </ContactLine>
      </dl>

      <a
        href={site.whatsapp[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-navy pb-1 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
      >
        Escribir por WhatsApp
        <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}

function ContactLine({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-6 py-5 text-sm">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function ContactFormFallback() {
  return (
    <div className="min-h-[48rem] animate-pulse rounded-sm border border-border bg-surface p-8" role="status" aria-label="Cargando formulario…">
      <div className="h-3 w-40 bg-surface-2" />
      <div className="mt-5 h-10 w-3/4 bg-surface-2" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-16 bg-white" />
        ))}
      </div>
    </div>
  );
}
