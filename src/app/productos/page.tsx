import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "../../components/ui/Container";
import { ProductGrid } from "../../components/products/ProductGrid";
import { CatalogPreload } from "../../components/products/CatalogPreload";
import { getCatalogProducts } from "../../lib/content";

export const metadata: Metadata = {
  title: "Productos de cartelería digital",
  description:
    "Explorá el catálogo de tótems, pantallas profesionales, LED, pizarras interactivas, kioscos y software de Adinnov.",
  alternates: { canonical: "/productos" },
  openGraph: {
    title: "Productos de cartelería digital | Adinnov",
    description:
      "Equipos y soluciones de cartelería digital para proyectos corporativos, retail, educación y eventos.",
    url: "/productos",
  },
};

function CatalogFallback() {
  return (
    <div
      className="grid animate-pulse gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14"
      aria-label="Cargando catálogo"
      role="status"
    >
      <div className="space-y-4">
        <div className="h-3 w-24 bg-surface-2" />
        <div className="h-12 w-full bg-surface" />
        <div className="mt-8 h-px w-full bg-border" />
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-10 w-full bg-surface" />
        ))}
      </div>
      <div>
        <div className="h-10 border-b border-border" />
        <div className="mt-8 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <div className="aspect-[4/3] bg-surface" />
              <div className="mt-4 h-3 w-20 bg-surface-2" />
              <div className="mt-3 h-6 w-4/5 bg-surface" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductosPage() {
  const products = getCatalogProducts();
  const firstMedia = products[0]?.media[0];

  return (
    <div className="bg-background pb-24 pt-28 md:pb-32 md:pt-36">
      {firstMedia?.type === "image" ? (
        <CatalogPreload src={firstMedia.src} alt={firstMedia.alt} />
      ) : null}
      <Container>
        <header className="grid gap-8 border-b border-border pb-12 md:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] md:items-end md:pb-16">
          <div>
            <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.2em] text-accent">
              Catálogo / {products.length.toString().padStart(2, "0")} equipos
            </p>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl font-medium leading-[0.96] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
              Tecnología elegida para cada espacio.
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted md:pb-1">
            Combinamos fabricación propia, hardware profesional y software para
            resolver proyectos de comunicación, interacción y autogestión.
            Filtrá por contexto o contanos qué necesitás.
          </p>
        </header>

        <div className="pt-10 md:pt-14">
          <Suspense fallback={<CatalogFallback />}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
