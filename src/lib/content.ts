import {
  categories,
  productFamilyByCategory,
} from "@content/categories";
import { buildMegaMenuColumns, type MegaMenuColumn } from "@content/megaMenu";
import type {
  CatalogProductSummary,
  EnrichedProduct,
  ProductCategoryId,
  ProductEnvironment,
  ProductFamilyId,
  ProductInteraction,
} from "@content/types";
import { getCatalog } from "@/lib/catalog/queries";

function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLocaleLowerCase("es-AR")
    .trim();
}

export async function getAllProducts(): Promise<EnrichedProduct[]> {
  return (await getCatalog()).products;
}

export async function getCatalogProducts(): Promise<CatalogProductSummary[]> {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
    title: product.title,
    description: product.description,
    family: product.family,
    environments: product.environments,
    interaction: product.interaction,
    availability: product.availability,
    media: product.media.slice(0, 1),
    searchText: normalizeSearch(
      [
        product.title,
        product.description,
        ...product.highlights.map((highlight) => highlight.description),
      ].join(" "),
    ),
  }));
}

export async function getProduct(slug: string): Promise<EnrichedProduct | undefined> {
  return (await getCatalog()).bySlug.get(slug);
}

/** Slug actual de un producto cuya URL cambió desde el panel. */
export async function getProductRedirect(slug: string): Promise<string | undefined> {
  return (await getCatalog()).redirects.get(slug);
}

export async function getProductsByCategory(category: string): Promise<EnrichedProduct[]> {
  const products = await getAllProducts();
  const family = getProductFamily(category);
  return family
    ? products.filter((product) => product.family === family)
    : products.filter((product) => product.category === category);
}

export async function getProductSlugs(): Promise<string[]> {
  return (await getAllProducts()).map((product) => product.slug);
}

export async function getMegaMenuColumns(): Promise<MegaMenuColumn[]> {
  return buildMegaMenuColumns((await getCatalog()).menuEntries);
}

export function getCategory(id: string) {
  const family = getProductFamily(id);
  return family ? categories.find((category) => category.id === family) : undefined;
}

export function getProductFamily(value: string): ProductFamilyId | undefined {
  const direct = categories.find((category) => category.id === value);
  if (direct) return direct.id;
  return productFamilyByCategory[value as ProductCategoryId];
}

export function getCategoryLabel(id: string): string {
  return getCategory(id)?.name ?? id;
}

export async function filterProducts(opts: {
  category?: string;
  family?: ProductFamilyId | string;
  environment?: ProductEnvironment | string;
  interaction?: ProductInteraction | string;
  modality?: "sale" | "rental" | string;
  q?: string;
}): Promise<EnrichedProduct[]> {
  let list = await getAllProducts();
  const family = getProductFamily(opts.family ?? opts.category ?? "");

  if (family) {
    list = list.filter((product) => product.family === family);
  }
  if (opts.environment === "indoor" || opts.environment === "outdoor") {
    list = list.filter((product) =>
      product.environments.includes(opts.environment as ProductEnvironment),
    );
  }
  if (
    opts.interaction === "touch" ||
    opts.interaction === "non-touch" ||
    opts.interaction === "mixed"
  ) {
    list = list.filter((product) => product.interaction === opts.interaction);
  }
  if (opts.modality === "sale" || opts.modality === "rental") {
    const modality: "sale" | "rental" = opts.modality;
    list = list.filter((product) => product.availability[modality]);
  }
  if (opts.q) {
    const query = normalizeSearch(opts.q);
    list = list.filter((product) =>
      normalizeSearch(
        [
          product.title,
          product.description,
          ...product.highlights.map((highlight) => highlight.description),
        ].join(" "),
      ).includes(query),
    );
  }
  return list;
}

export async function getRelatedProducts(
  slug: string,
  limit = 3,
): Promise<EnrichedProduct[]> {
  const { bySlug } = await getCatalog();
  const product = bySlug.get(slug);
  if (!product) return [];

  return product.relatedSlugs
    .map((relatedSlug) => bySlug.get(relatedSlug))
    .filter((related): related is EnrichedProduct => Boolean(related))
    .slice(0, limit);
}

export type {
  CatalogProductSummary,
  EnrichedProduct,
  ProductCategoryId,
  ProductEnvironment,
  ProductFamilyId,
  ProductInteraction,
};
