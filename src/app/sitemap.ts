import type { MetadataRoute } from "next";
import { site } from "@content/site";
import { CASE_BASE_PATH, casePath } from "../lib/case-studies/map";
import { getCaseStudies } from "../lib/case-studies/queries";
import { getProductSlugs } from "../lib/content";

async function getIndexableCaseStudies() {
  try {
    return (await getCaseStudies()).filter((caseStudy) => caseStudy.seo.isIndexable);
  } catch (error) {
    // Un fallo al leer los casos no debe dejar sin sitemap al resto del sitio.
    console.error(error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url;
  const staticRoutes = [
    "",
    "/productos",
    "/alquileres",
    "/nosotros",
    CASE_BASE_PATH,
    "/clientes",
    "/contacto",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const [productSlugs, caseStudies] = await Promise.all([getProductSlugs(), getIndexableCaseStudies()]);

  const products = productSlugs.map((slug) => ({
    url: `${base}/productos/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Sólo casos publicados (RLS) e indexables; si tienen canonical externa, la URL propia no se lista.
  const cases = caseStudies
    .filter((caseStudy) => !caseStudy.seo.canonicalUrl || caseStudy.seo.canonicalUrl === `${base}${casePath(caseStudy.slug)}`)
    .map((caseStudy) => ({
      url: `${base}${casePath(caseStudy.slug)}`,
      lastModified: new Date(caseStudy.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: caseStudy.cover ? [caseStudy.cover.src] : undefined,
    }));

  return [...staticRoutes, ...products, ...cases];
}
