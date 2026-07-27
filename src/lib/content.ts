import { categories } from "@content/categories";
import { products } from "@content/products";
import type { Product, ProductCategoryId } from "@content/types";

export function getAllProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function getCategoryLabel(id: string): string {
  return getCategory(id)?.name ?? id;
}

export function filterProducts(opts: {
  category?: string;
  q?: string;
}): Product[] {
  let list = products;
  if (opts.category) {
    list = list.filter((p) => p.category === opts.category);
  }
  if (opts.q) {
    const q = opts.q.toLowerCase();
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q)),
    );
  }
  return list;
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const product = getProduct(slug);
  if (!product) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, limit);
}

export type { Product, ProductCategoryId };
