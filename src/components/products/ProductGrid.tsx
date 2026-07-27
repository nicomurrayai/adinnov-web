import type { Product } from "@content/types";
import { categories } from "@content/categories";
import { ProductCard } from "./ProductCard";
import Link from "next/link";

export function ProductFilters({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-border pb-6">
      <Link
        href="/productos"
        className={`px-3 py-1.5 text-sm transition-colors ${
          !active
            ? "bg-navy text-white"
            : "bg-surface text-navy hover:bg-surface-2"
        }`}
      >
        Todos
      </Link>
      {categories.map((c) => (
        <Link
          key={c.id}
          href={`/productos?categoria=${c.id}`}
          className={`px-3 py-1.5 text-sm transition-colors ${
            active === c.id
              ? "bg-navy text-white"
              : "bg-surface text-navy hover:bg-surface-2"
          }`}
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <p className="py-16 text-center text-muted">
        No hay productos en esta categoría.
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
