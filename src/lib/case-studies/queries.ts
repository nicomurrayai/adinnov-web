import "server-only";
import { unstable_cache } from "next/cache";
import { cache } from "react";
import { getSupabase, getSupabaseUrl } from "@/lib/supabase/server";
import { CASES_TAG, CASE_SELECT, mapCaseStudy, type CaseStudy, type CaseStudyRow } from "./map";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Lectura cacheada de los casos publicados. Se invalida desde el panel vía /api/revalidate
 * (tag "case-studies") y, como respaldo, cada hora. RLS ya oculta los no publicados.
 */
const loadCaseStudies = unstable_cache(
  async () => {
    const supabase = getSupabase();
    const [caseStudies, redirects] = await Promise.all([
      supabase
        .from("case_studies")
        .select(CASE_SELECT)
        .eq("is_published", true)
        .order("sort_order")
        .order("published_at", { ascending: false }),
      supabase.from("case_study_slug_redirects").select("old_slug, case_study_id"),
    ]);
    if (caseStudies.error) {
      throw new Error(`No se pudieron leer los casos de éxito: ${caseStudies.error.message}`);
    }
    if (redirects.error) {
      throw new Error(`No se pudieron leer los redirects de casos: ${redirects.error.message}`);
    }
    return {
      rows: caseStudies.data as unknown as CaseStudyRow[],
      redirects: redirects.data as { old_slug: string; case_study_id: string }[],
    };
  },
  ["adinnov-case-studies-v1"],
  { tags: [CASES_TAG], revalidate: 3600 },
);

const getCaseStudyIndex = cache(async () => {
  const { rows, redirects } = await loadCaseStudies();
  const supabaseUrl = getSupabaseUrl();
  const caseStudies = rows.map((row) => mapCaseStudy(row, supabaseUrl));
  const slugById = new Map(caseStudies.map((caseStudy) => [caseStudy.id, caseStudy.slug]));

  return {
    caseStudies,
    bySlug: new Map(caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy])),
    redirects: new Map(
      redirects.flatMap((redirect) => {
        const slug = slugById.get(redirect.case_study_id);
        return slug ? [[redirect.old_slug, slug] as const] : [];
      }),
    ),
  };
});

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return (await getCaseStudyIndex()).caseStudies;
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  return (await getCaseStudyIndex()).bySlug.get(slug);
}

/** Slug actual de un caso cuya URL cambió desde el panel. */
export async function getCaseStudyRedirect(slug: string): Promise<string | undefined> {
  return (await getCaseStudyIndex()).redirects.get(slug);
}

/** Otros casos publicados para seguir leyendo (prioriza la misma categoría). */
export async function getRelatedCaseStudies(current: CaseStudy, limit = 3): Promise<CaseStudy[]> {
  const others = (await getCaseStudies()).filter((caseStudy) => caseStudy.id !== current.id);
  const sameCategory = others.filter((caseStudy) => current.category && caseStudy.category === current.category);
  const rest = others.filter((caseStudy) => !sameCategory.includes(caseStudy));
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Primer caso publicado que usa un producto, para enlazarlo desde la ficha. */
export async function getCaseStudyForProduct(productSlug: string): Promise<CaseStudy | undefined> {
  return (await getCaseStudies()).find((caseStudy) =>
    caseStudy.products.some((product) => product.slug === productSlug),
  );
}

/** Vista previa de un caso (publicado o no) mediante un token temporal generado en el panel. Sin caché. */
export async function getCaseStudyPreview(token: string): Promise<CaseStudy | null> {
  if (!UUID.test(token)) return null;
  const { data, error } = await getSupabase().rpc("get_case_study_preview", { p_token: token });
  if (error) throw new Error(`No se pudo leer la vista previa: ${error.message}`);
  if (!data) return null;
  return mapCaseStudy(data as CaseStudyRow, getSupabaseUrl());
}
