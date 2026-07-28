import type { Metadata } from "next";
import { Container } from "../../components/ui/Container";
import { ProductFilters, ProductGrid } from "../../components/products/ProductGrid";
import { filterProducts, getCategory } from "../../lib/content";

type Props = {
  searchParams: Promise<{ categoria?: string; q?: string }>;
};

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo de tótems, pantallas LED, pizarras interactivas, kioscos y software de cartelería digital Adinnov.",
};

export default async function ProductosPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.categoria;
  const products = filterProducts({ category, q: params.q });
  const cat = category ? getCategory(category) : null;

  return (
    <div className="bg-white pb-20 pt-24 md:pb-28 md:pt-28">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Catálogo
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-medium tracking-tight text-navy md:text-5xl">
          {cat?.name ?? "Productos"}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {cat?.description ??
            "Fabricación propia y soluciones de marcas líderes para venta y alquiler."}
        </p>
        <div className="mt-10">
          <ProductFilters active={category} />
          <ProductGrid products={products} />
        </div>
      </Container>
    </div>
  );
}
