import Image from "next/image";
import Link from "next/link";
import type { Product } from "@content/types";
import { getCategoryLabel } from "../../lib/content";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex flex-col border-t border-border pt-5 transition-colors hover:border-navy"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {image ? (
          <Image
            src={image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : null}
      </div>
      <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
        {getCategoryLabel(product.category)}
      </p>
      <h3 className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-medium text-navy group-hover:text-accent">
        {product.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
        {product.description}
      </p>
    </Link>
  );
}
