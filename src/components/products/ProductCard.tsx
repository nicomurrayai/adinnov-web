import Image from "next/image";
import Link from "next/link";
import type { EnrichedProduct } from "@content/types";
import { getCategoryLabel } from "@/lib/content";

export function ProductCard({ product }: { product: EnrichedProduct }) {
  const primaryMedia =
    product.media.find((item) => item.type === "image") ??
    product.media.find((item) => item.type === "video" && item.poster);
  const imageSrc = primaryMedia?.type === "video" ? primaryMedia.poster : primaryMedia?.src;

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-white transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-navy/40 hover:shadow-[0_20px_55px_rgba(11,31,58,0.10)] motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={primaryMedia?.alt ?? product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_48%,var(--border)_49%_51%,transparent_52%)] opacity-70" />
        )}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          <span className="rounded-full border border-white/45 bg-white/90 px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-navy backdrop-blur-sm">
            {getCategoryLabel(product.category)}
          </span>
          {product.availability.rental ? (
            <span className="rounded-full bg-accent px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white shadow-sm">
              Venta · Alquiler
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
          {product.availability.rental ? "Venta · Alquiler" : "Venta"}
        </p>
        <h3 className="font-display mt-2 text-xl font-medium leading-tight tracking-[-0.02em] text-navy transition-colors group-hover:text-accent">
          {product.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {product.description}
        </p>

        <span className="mt-6 inline-flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.08em] text-navy">
          Ver producto
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true">
      <path d="M3.5 10h12m-4.5-4.5L15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
