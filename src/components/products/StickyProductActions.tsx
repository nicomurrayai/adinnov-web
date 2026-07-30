import Link from "next/link";
import type { EnrichedProduct } from "@content/types";
import { site } from "@content/site";

export function StickyProductActions({ product }: { product: EnrichedProduct }) {
  const rentalHref = `/contacto?intent=alquiler&product=${encodeURIComponent(product.slug)}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_40px_rgba(11,31,58,0.12)] backdrop-blur-xl lg:sticky lg:top-28 lg:z-10 lg:rounded-sm lg:border lg:p-6 lg:shadow-[0_18px_60px_rgba(11,31,58,0.08)]">
      <div className="mx-auto flex max-w-6xl items-center gap-2 pr-[4.5rem] sm:pr-36 lg:block lg:pr-0">
        <div className="hidden lg:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Próximo paso
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-medium leading-tight text-navy">
            Diseñemos tu solución
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Contanos el entorno, la cantidad y el objetivo. Nuestro equipo prepara una propuesta a medida.
          </p>
        </div>

        <a
          href={site.whatsapp[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-sm bg-navy px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:mt-6 lg:w-full"
        >
          Consultar por WhatsApp
          <span className="hidden sm:inline" aria-hidden="true">↗</span>
        </a>
        {product.availability.rental ? (
          <Link
            href={rentalHref}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-sm border border-navy bg-white px-4 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:mt-3 lg:w-full"
          >
            Cotizar alquiler
          </Link>
        ) : null}
      </div>
    </div>
  );
}
