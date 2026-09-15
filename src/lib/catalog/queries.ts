import "server-only";
import { unstable_cache } from "next/cache";
import { cache } from "react";
import { getSupabase, getSupabaseUrl } from "@/lib/supabase/server";
import {
  CATALOG_TAG,
  PRODUCT_SELECT,
  mapCatalogRows,
  mapMegaMenuEntries,
  type CatalogProductRow,
} from "./map";

/**
 * Lectura cacheada del catálogo. Se invalida desde el panel vía /api/revalidate
 * (tag "products") y, como respaldo, cada hora.
 */
const loadCatalogRows = unstable_cache(
  async () => {
    const supabase = getSupabase();
    const [products, redirects] = await Promise.all([
      supabase.from("products").select(PRODUCT_SELECT).order("sort_order").order("slug"),
      supabase.from("product_slug_redirects").select("old_slug, product_id"),
    ]);
    if (products.error) {
      throw new Error(`No se pudo leer el catálogo desde Supabase: ${products.error.message}`);
    }
    if (redirects.error) {
      throw new Error(`No se pudieron leer los redirects de productos: ${redirects.error.message}`);
    }
    return {
      rows: products.data as unknown as CatalogProductRow[],
      redirects: redirects.data as { old_slug: string; product_id: string }[],
    };
  },
  ["adinnov-catalog-v1"],
  { tags: [CATALOG_TAG], revalidate: 3600 },
);

export const getCatalog = cache(async () => {
  const { rows, redirects } = await loadCatalogRows();
  const supabaseUrl = getSupabaseUrl();
  const products = mapCatalogRows(rows, supabaseUrl);
  const slugById = new Map(rows.map((row) => [row.id, row.slug]));

  return {
    products,
    bySlug: new Map(products.map((product) => [product.slug, product])),
    redirects: new Map(
      redirects.flatMap((redirect) => {
        const slug = slugById.get(redirect.product_id);
        return slug ? [[redirect.old_slug, slug] as const] : [];
      }),
    ),
    menuEntries: mapMegaMenuEntries(rows, supabaseUrl),
  };
});
