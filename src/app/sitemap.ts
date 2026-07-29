import type { MetadataRoute } from "next";
import { site } from "@content/site";
import { getProductSlugs } from "../lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/soluciones",
    "/productos",
    "/alquileres",
    "/nosotros",
    "/trabajos",
    "/clientes",
    "/contacto",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const products = getProductSlugs().map((slug) => ({
    url: `${base}/productos/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...products];
}
