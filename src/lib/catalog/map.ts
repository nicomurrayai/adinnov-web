import { productFamilyByCategory } from "@content/categories";
import type { MegaMenuEntry } from "@content/megaMenu";
import type {
  EnrichedProduct,
  ProductCategoryId,
  ProductEnvironment,
  ProductFAQ,
  ProductFamilyId,
  ProductHighlight,
  ProductInteraction,
  ProductMedia,
  ProductSpecGroup,
  ProductVariant,
} from "@content/types";

export const CATALOG_TAG = "products";
export const MEDIA_BUCKET = "product-media";
export const FILES_BUCKET = "product-files";

export type CatalogMediaRow = {
  storage_path: string;
  type: string;
  alt: string;
  width: number;
  height: number;
  poster_path: string | null;
  position: number;
  is_visible: boolean;
};

export type CatalogFileRow = {
  storage_path: string;
  label: string;
  size_bytes: number;
  position: number;
};

export type CatalogProductRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category_id: string;
  short_label: string | null;
  sort_order: number;
  available_for_sale: boolean;
  available_for_rental: boolean;
  environments: string[];
  interaction: string;
  highlights: unknown;
  variants: unknown;
  spec_groups: unknown;
  use_cases: string[];
  included_services: string[];
  faqs: unknown;
  seo_title: string | null;
  seo_description: string | null;
  menu_column: string | null;
  menu_label: string | null;
  menu_sort: number;
  menu_image_path: string | null;
  product_categories: { family_id: string } | null;
  product_media: CatalogMediaRow[];
  product_files: CatalogFileRow[];
  product_related: { related_id: string; position: number }[];
};

export const PRODUCT_SELECT = [
  "id, slug, title, description, category_id, short_label, sort_order",
  "available_for_sale, available_for_rental, environments, interaction",
  "highlights, variants, spec_groups, use_cases, included_services, faqs",
  "seo_title, seo_description, menu_column, menu_label, menu_sort, menu_image_path",
  "product_categories(family_id)",
  "product_media(storage_path, type, alt, width, height, poster_path, position, is_visible)",
  "product_files(storage_path, label, size_bytes, position)",
  "product_related!product_related_product_id_fkey(related_id, position)",
].join(", ");

export function publicStorageUrl(supabaseUrl: string, bucket: string, path: string): string {
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  return `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/public/${bucket}/${encodedPath}`;
}

const byPosition = (a: { position: number }, b: { position: number }) => a.position - b.position;

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function visibleMedia(row: CatalogProductRow): CatalogMediaRow[] {
  return row.product_media.filter((item) => item.is_visible).sort(byPosition);
}

/** Convierte filas de Supabase al modelo que ya renderiza la web (EnrichedProduct). */
export function mapCatalogRows(rows: CatalogProductRow[], supabaseUrl: string): EnrichedProduct[] {
  const slugById = new Map(rows.map((row) => [row.id, row.slug]));

  return [...rows]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((row) => {
      const media: ProductMedia[] = visibleMedia(row).map((item) => {
        const src = publicStorageUrl(supabaseUrl, MEDIA_BUCKET, item.storage_path);
        const base = { src, alt: item.alt, width: item.width, height: item.height };
        return item.type === "video" && item.poster_path
          ? { ...base, type: "video", poster: publicStorageUrl(supabaseUrl, MEDIA_BUCKET, item.poster_path) }
          : { ...base, type: "image" };
      });

      const family = (row.product_categories?.family_id ??
        productFamilyByCategory[row.category_id as ProductCategoryId] ??
        "software-servicios") as ProductFamilyId;

      return {
        slug: row.slug,
        title: row.title,
        description: row.description,
        category: row.category_id,
        shortLabel: row.short_label ?? undefined,
        images: media.map((item) => item.src),
        features: [],
        sections: [],
        availability: { sale: row.available_for_sale, rental: row.available_for_rental },
        media,
        highlights: asArray<ProductHighlight>(row.highlights),
        variants: asArray<ProductVariant>(row.variants),
        specGroups: asArray<ProductSpecGroup>(row.spec_groups),
        useCases: row.use_cases,
        includedServices: row.included_services,
        faqs: asArray<ProductFAQ>(row.faqs),
        relatedSlugs: [...row.product_related]
          .sort(byPosition)
          .map((related) => slugById.get(related.related_id))
          .filter((slug): slug is string => Boolean(slug)),
        seo: { title: row.seo_title ?? undefined, description: row.seo_description ?? undefined },
        family,
        environments: row.environments as ProductEnvironment[],
        interaction: row.interaction as ProductInteraction,
        files: [...row.product_files].sort(byPosition).map((file) => ({
          label: file.label,
          sizeBytes: file.size_bytes,
          url: publicStorageUrl(supabaseUrl, FILES_BUCKET, file.storage_path),
        })),
      };
    });
}

/** Entradas del mega menú: preview propia o, si no hay, la portada del producto. */
export function mapMegaMenuEntries(rows: CatalogProductRow[], supabaseUrl: string): MegaMenuEntry[] {
  return rows.flatMap((row) => {
    if (!row.menu_column) return [];
    const imagePath = row.menu_image_path ?? visibleMedia(row)[0]?.storage_path;
    return [
      {
        column: row.menu_column,
        label: row.menu_label || row.title,
        sort: row.menu_sort,
        slug: row.slug,
        image: imagePath ? publicStorageUrl(supabaseUrl, MEDIA_BUCKET, imagePath) : "",
      },
    ];
  });
}
