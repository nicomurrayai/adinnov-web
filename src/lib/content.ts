import {
  categories,
  productFamilyByCategory,
} from "@content/categories";
import { enrichProducts } from "@content/productMeta";
import { products as sourceProducts } from "@content/products";
import type {
  CatalogProductSummary,
  EnrichedProduct,
  ProductCategoryId,
  ProductEnvironment,
  ProductFamilyId,
  ProductInteraction,
} from "@content/types";

const products = enrichProducts(sourceProducts);
const productsBySlug = new Map(products.map((product) => [product.slug, product]));

function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-AR")
    .trim();
}

export function getAllProducts(): EnrichedProduct[] {
  return products;
}

export function getCatalogProducts(): CatalogProductSummary[] {
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

export function getProduct(slug: string): EnrichedProduct | undefined {
  return productsBySlug.get(slug);
}

export function getProductsByCategory(category: string): EnrichedProduct[] {
  const family = getProductFamily(category);
  return family
    ? products.filter((product) => product.family === family)
    : products.filter((product) => product.category === category);
}

export function getProductSlugs(): string[] {
  return products.map((product) => product.slug);
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

export function filterProducts(opts: {
  category?: string;
  family?: ProductFamilyId | string;
  environment?: ProductEnvironment | string;
  interaction?: ProductInteraction | string;
  modality?: "sale" | "rental" | string;
  q?: string;
}): EnrichedProduct[] {
  let list = products;
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

export function getRelatedProducts(
  slug: string,
  limit = 3,
): EnrichedProduct[] {
  const product = getProduct(slug);
  if (!product) return [];

  return product.relatedSlugs
    .map((relatedSlug) => productsBySlug.get(relatedSlug))
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
