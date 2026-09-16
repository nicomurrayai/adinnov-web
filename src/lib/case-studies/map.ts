import { publicStorageUrl } from "@/lib/catalog/map";

export const CASES_TAG = "case-studies";
export const CASE_MEDIA_BUCKET = "case-study-media";
export const CASE_BASE_PATH = "/casos-de-exito";

export function casePath(slug: string): string {
  return `${CASE_BASE_PATH}/${slug}`;
}

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type CaseStudyMetric = { value: string; label: string };

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  projectDate: string | null;
  client: {
    name: string | null;
    industry: string | null;
    location: string | null;
    logo: string | null;
  };
  cover: CaseStudyImage | null;
  challenge: string;
  solution: string;
  process: string;
  results: string;
  metrics: CaseStudyMetric[];
  cta: { title: string | null; text: string | null };
  seo: {
    title: string | null;
    description: string | null;
    focusKeyword: string | null;
    canonicalUrl: string | null;
    isIndexable: boolean;
  };
  publishedAt: string | null;
  updatedAt: string;
  gallery: CaseStudyImage[];
  products: { slug: string; title: string }[];
};

export type CaseStudyRow = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  project_date: string | null;
  client_name: string | null;
  client_industry: string | null;
  client_location: string | null;
  client_logo_path: string | null;
  cover_path: string | null;
  cover_alt: string;
  cover_width: number | null;
  cover_height: number | null;
  challenge: string;
  solution: string;
  process: string;
  results: string;
  metrics: unknown;
  cta_title: string | null;
  cta_text: string | null;
  seo_title: string | null;
  seo_description: string | null;
  focus_keyword: string | null;
  canonical_url: string | null;
  is_indexable: boolean;
  published_at: string | null;
  updated_at: string;
  sort_order: number;
  case_study_images: {
    storage_path: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
    position: number;
  }[];
  case_study_products: { position: number; products: { slug: string; title: string } | null }[];
};

export const CASE_SELECT = [
  "id, slug, title, summary, category, project_date",
  "client_name, client_industry, client_location, client_logo_path",
  "cover_path, cover_alt, cover_width, cover_height",
  "challenge, solution, process, results, metrics, cta_title, cta_text",
  "seo_title, seo_description, focus_keyword, canonical_url, is_indexable",
  "published_at, updated_at, sort_order",
  "case_study_images(storage_path, alt, caption, width, height, position)",
  "case_study_products(position, products(slug, title))",
].join(", ");

const byPosition = (a: { position: number }, b: { position: number }) => a.position - b.position;

function isMetric(value: unknown): value is CaseStudyMetric {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as CaseStudyMetric).value === "string" &&
    typeof (value as CaseStudyMetric).label === "string"
  );
}

/** Convierte una fila de Supabase al modelo que renderiza la web. */
export function mapCaseStudy(row: CaseStudyRow, supabaseUrl: string): CaseStudy {
  const media = (path: string) => publicStorageUrl(supabaseUrl, CASE_MEDIA_BUCKET, path);

  const cover =
    row.cover_path && row.cover_width && row.cover_height
      ? {
          src: media(row.cover_path),
          alt: row.cover_alt || row.title,
          caption: "",
          width: row.cover_width,
          height: row.cover_height,
        }
      : null;

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    category: row.category,
    projectDate: row.project_date,
    client: {
      name: row.client_name,
      industry: row.client_industry,
      location: row.client_location,
      logo: row.client_logo_path ? media(row.client_logo_path) : null,
    },
    cover,
    challenge: row.challenge,
    solution: row.solution,
    process: row.process,
    results: row.results,
    metrics: Array.isArray(row.metrics) ? row.metrics.filter(isMetric) : [],
    cta: { title: row.cta_title, text: row.cta_text },
    seo: {
      title: row.seo_title,
      description: row.seo_description,
      focusKeyword: row.focus_keyword,
      canonicalUrl: row.canonical_url,
      isIndexable: row.is_indexable,
    },
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    gallery: [...(row.case_study_images ?? [])].sort(byPosition).map((image) => ({
      src: media(image.storage_path),
      alt: image.alt || row.title,
      caption: image.caption,
      width: image.width,
      height: image.height,
    })),
    products: [...(row.case_study_products ?? [])]
      .sort(byPosition)
      .flatMap((item) => (item.products ? [{ slug: item.products.slug, title: item.products.title }] : [])),
  };
}

export type CaseStudyMetadataInput = Pick<CaseStudy, "slug" | "title" | "summary" | "seo">;

/** Título, descripción y canonical efectivos (valores SEO o, si faltan, los del caso). */
export function resolveCaseSeo(caseStudy: CaseStudyMetadataInput, siteUrl: string) {
  const path = casePath(caseStudy.slug);
  return {
    title: caseStudy.seo.title?.trim() || caseStudy.title,
    description: caseStudy.seo.description?.trim() || caseStudy.summary,
    path,
    canonical: caseStudy.seo.canonicalUrl || `${siteUrl.replace(/\/$/, "")}${path}`,
    indexable: caseStudy.seo.isIndexable,
  };
}
