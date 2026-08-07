"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  startTransition,
  useMemo,
  useOptimistic,
  useState,
  useSyncExternalStore,
} from "react";
import { categories } from "@content/categories";
import type {
  CatalogProductSummary,
  ProductCategoryId,
  ProductFamilyId,
} from "@content/types";
import { catalogImageSizes } from "./CatalogPreload";

const familyNames = new Map(
  categories.map((category) => [category.id, category.shortName]),
);

const validFamilies = new Set(categories.map((category) => category.id));

const catalogUrlEvent = "adinnov:catalog-urlchange";

function subscribeToCatalogUrl(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener(catalogUrlEvent, onStoreChange);
  return () => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener(catalogUrlEvent, onStoreChange);
  };
}

function getCatalogUrlSnapshot() {
  return window.location.search.slice(1);
}

function getCatalogServerSnapshot() {
  return "";
}

function writeCatalogUrl(url: string, mode: "push" | "replace") {
  if (mode === "replace") window.history.replaceState(null, "", url);
  else window.history.pushState(null, "", url);
  window.dispatchEvent(new Event(catalogUrlEvent));
}

function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-AR")
    .trim();
}

function ProductCard({
  product,
  eager = false,
}: {
  product: CatalogProductSummary;
  eager?: boolean;
}) {
  const media = product.media[0];
  const family = familyNames.get(product.family) ?? product.family;

  return (
    <article className="group min-w-0 border-t border-border pt-4 transition-colors duration-300 hover:border-foreground">
      <Link
        href={`/productos/${product.slug}`}
        prefetch={false}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`Ver ${product.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          {media?.type === "image" ? (
            <Image
              src={media.src}
              alt={media.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none"
              sizes={catalogImageSizes}
              {...(eager ? { preload: true } : { loading: "lazy" as const })}
            />
          ) : (
            <div
              className="absolute inset-0 bg-[linear-gradient(135deg,var(--surface),var(--surface-2))]"
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-navy/80 to-transparent px-4 pb-4 pt-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="text-xs font-medium uppercase tracking-[0.14em]">
              Ver producto
            </span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4 pt-4">
          <div className="min-w-0">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted">
              {family}
            </p>
            <h2 className="mt-1 font-display text-xl font-medium leading-tight tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent">
              {product.title}
            </h2>
          </div>
          <span className="mt-0.5 shrink-0 rounded-full border border-border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
            {product.availability.rental ? "Venta · Alquiler" : "Venta"}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
          {product.description}
        </p>
      </Link>
    </article>
  );
}

type ProductGridProps = {
  products: CatalogProductSummary[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const searchParamsString = useSyncExternalStore(
    subscribeToCatalogUrl,
    getCatalogUrlSnapshot,
    getCatalogServerSnapshot,
  );
  const urlQuery = useMemo(
    () => new URLSearchParams(searchParamsString).get("q") ?? "",
    [searchParamsString],
  );

  return (
    <ProductGridState
      products={products}
      searchParamsString={searchParamsString}
      urlQuery={urlQuery}
    />
  );
}

function ProductGridState({
  products,
  searchParamsString,
  urlQuery,
}: ProductGridProps & { searchParamsString: string; urlQuery: string }) {
  const pathname = usePathname();
  const searchParams = useMemo(
    () => new URLSearchParams(searchParamsString),
    [searchParamsString],
  );
  const [query, setOptimisticQuery] = useOptimistic(urlQuery);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const legacyCategory = searchParams.get("categoria");
  const requestedFamily = searchParams.get("familia");
  const legacyFamily = legacyCategory
    ? categories.find((category) =>
        category.sourceCategories.includes(
          legacyCategory as ProductCategoryId,
        ),
      )?.id
    : undefined;
  const family = validFamilies.has(requestedFamily as ProductFamilyId)
    ? (requestedFamily as ProductFamilyId)
    : legacyFamily;

  const filteredProducts = useMemo(() => {
    const normalizedQuery = normalizeSearch(query);
    return products.filter((product) => {
      if (family && product.family !== family) return false;
      return !normalizedQuery || product.searchText.includes(normalizedQuery);
    });
  }, [family, products, query]);

  const activeFilterCount = [family, query.trim() || undefined].filter(
    Boolean,
  ).length;

  function updateParam(name: string, value?: string) {
    const params = new URLSearchParams(searchParamsString);
    if (value) params.set(name, value);
    else params.delete(name);
    if (name === "familia") params.delete("categoria");
    const nextUrl = params.size ? `${pathname}?${params}` : pathname;
    startTransition(() => writeCatalogUrl(nextUrl, "push"));
  }

  function updateQuery(value: string) {
    const params = new URLSearchParams(searchParamsString);
    const nextQuery = value.trim();
    if (nextQuery) params.set("q", nextQuery);
    else params.delete("q");
    const nextUrl = params.size ? `${pathname}?${params}` : pathname;
    startTransition(() => {
      setOptimisticQuery(value);
      writeCatalogUrl(nextUrl, "replace");
    });
  }

  function resetFilters() {
    setFiltersOpen(false);
    startTransition(() => {
      setOptimisticQuery("");
      writeCatalogUrl(pathname, "push");
    });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
      <aside aria-label="Filtros del catálogo" className="min-w-0">
        <button
          type="button"
          aria-expanded={filtersOpen}
          aria-controls="catalog-filter-panel"
          onClick={() => setFiltersOpen((open) => !open)}
          className="flex h-12 w-full items-center justify-between border-y border-border text-xs font-semibold uppercase tracking-[0.14em] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:hidden"
        >
          <span>{filtersOpen ? "Ocultar filtros" : "Filtrar catálogo"}</span>
          <span className="flex items-center gap-3 font-mono text-[0.65rem] text-muted">
            {activeFilterCount > 0 ? `${activeFilterCount} activos` : "Opciones"}
            <span aria-hidden="true">{filtersOpen ? "−" : "+"}</span>
          </span>
        </button>
        <div
          id="catalog-filter-panel"
          className={`${filtersOpen ? "block" : "hidden"} pt-7 lg:sticky lg:top-28 lg:block lg:pt-0`}
        >
          <div>
            <label
              htmlFor="catalog-search"
              className="text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-foreground"
            >
              Buscar producto
            </label>
            <div className="relative mt-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              >
                <circle cx="8.5" cy="8.5" r="5.75" stroke="currentColor" />
                <path d="m13 13 4 4" stroke="currentColor" strokeLinecap="round" />
              </svg>
              <input
                id="catalog-search"
                name="q"
                type="search"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Tótem, LED, videowall…"
                autoComplete="off"
                className="h-12 w-full border border-navy/50 bg-background pl-10 pr-3 text-sm text-foreground transition-colors placeholder:text-muted focus-visible:border-accent"
              />
            </div>
          </div>

          <fieldset className="mt-7 border-t border-border pt-6">
            <legend className="text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-foreground">
              Familia
            </legend>
            <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:items-stretch lg:gap-1">
              <button
                type="button"
                aria-pressed={!family}
                onClick={() => updateParam("familia")}
                className={`flex min-h-11 items-center justify-between gap-3 px-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                  !family
                    ? "bg-navy text-white"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                <span>Todos</span>
                <span className="font-mono text-[0.65rem]">
                  {products.length.toString().padStart(2, "0")}
                </span>
              </button>
              {categories.map((category) => {
                const count = products.filter(
                  (product) => product.family === category.id,
                ).length;
                const active = family === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => updateParam("familia", category.id)}
                    className={`flex min-h-11 items-center justify-between gap-3 px-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                      active
                        ? "bg-navy text-white"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    <span>{category.shortName}</span>
                    <span className="font-mono text-[0.65rem]">
                      {count.toString().padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {activeFilterCount > 0 ? (
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 text-xs font-semibold uppercase tracking-[0.13em] text-accent underline decoration-border underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Limpiar filtros ({activeFilterCount})
            </button>
          ) : null}
        </div>
      </aside>

      <section aria-labelledby="catalog-results-heading" className="min-w-0">
        <div className="flex min-h-10 items-end justify-between gap-4 border-b border-border pb-4">
          <h2
            id="catalog-results-heading"
            className="font-display text-xl font-medium tracking-[-0.02em] text-foreground"
          >
            Selección de equipos
          </h2>
          <p
            className="shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted"
            aria-live="polite"
            aria-atomic="true"
          >
            {filteredProducts.length} {filteredProducts.length === 1 ? "resultado" : "resultados"}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} eager={index === 0} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex min-h-80 flex-col items-start justify-center border border-border bg-surface p-8 md:p-12">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
              Sin coincidencias
            </p>
            <h3 className="mt-3 max-w-lg font-display text-3xl font-medium tracking-[-0.03em] text-foreground">
              Probemos una combinación más amplia.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">
              Quitá algún filtro o buscá por una aplicación, formato o tipo de pantalla.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Ver todo el catálogo
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
