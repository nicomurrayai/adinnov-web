import Link from "next/link";
import type { EnrichedProduct } from "@content/types";
import { site } from "@content/site";
import { getCategoryLabel } from "@/lib/content";
import { ProductGallery } from "./ProductGallery";

export function ProductHero({ product }: { product: EnrichedProduct }) {
  const rentalHref = `/contacto?intent=alquiler&product=${encodeURIComponent(product.slug)}`;

  return (
    <section className="grid items-start gap-10 border-b border-border pb-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.85fr)] lg:gap-16 lg:pb-20">
      <ProductGallery media={product.media} productName={product.title} />

      <div className="lg:sticky lg:top-28">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            Producto
          </p>
          <span className="h-px w-6 bg-border" aria-hidden="true" />
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {getCategoryLabel(product.family)}
          </p>
        </div>

        <h1 className="mt-5 text-balance font-[family-name:var(--font-outfit)] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.96] tracking-[-0.045em] text-navy">
          {product.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {product.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Disponibilidad">
          {product.availability.sale ? <AvailabilityBadge>Disponible para venta</AvailabilityBadge> : null}
          {product.availability.rental ? <AvailabilityBadge>Disponible para alquiler</AvailabilityBadge> : null}
        </div>

        {product.highlights.length > 0 ? (
          <dl className="mt-8 grid grid-cols-2 border-y border-border">
            {product.highlights.slice(0, 4).map((highlight, index) => (
              <div
                key={`${highlight.title}-${index}`}
                className={`py-4 ${index % 2 === 0 ? "pr-4" : "border-l border-border pl-4"} ${index > 1 ? "border-t border-border" : ""}`}
              >
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  {highlight.title}
                </dt>
                <dd className="mt-1.5 text-sm font-medium leading-snug text-navy">
                  {highlight.description}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-8 hidden flex-col gap-3 sm:flex-row lg:flex">
          <a
            href={site.whatsapp[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Consultar por WhatsApp
            <span aria-hidden="true">↗</span>
          </a>
          {product.availability.rental ? (
            <Link
              href={rentalHref}
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-navy bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Cotizar alquiler
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function AvailabilityBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-medium text-navy">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}
