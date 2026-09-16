import { site } from "@content/site";
import { CASE_BASE_PATH, resolveCaseSeo, type CaseStudy } from "./map";
import { richTextToPlain } from "./rich-text";

const organization = {
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: { "@type": "ImageObject", url: `${site.url}/brand/logo.svg` },
};

/** JSON-LD Article + BreadcrumbList de un caso de éxito. */
export function caseStudyJsonLd(caseStudy: CaseStudy) {
  const seo = resolveCaseSeo(caseStudy, site.url);
  const url = `${site.url}${seo.path}`;
  const images = [caseStudy.cover, ...caseStudy.gallery]
    .filter((image): image is NonNullable<typeof image> => Boolean(image))
    .slice(0, 6)
    .map((image) => ({ "@type": "ImageObject", url: image.src, width: image.width, height: image.height }));
  const body = [caseStudy.challenge, caseStudy.solution, caseStudy.process, caseStudy.results]
    .map(richTextToPlain)
    .filter(Boolean)
    .join(" ");

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title.slice(0, 110),
    description: seo.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": seo.canonical },
    image: images.length > 0 ? images : undefined,
    datePublished: caseStudy.publishedAt ?? undefined,
    dateModified: caseStudy.updatedAt,
    author: organization,
    publisher: organization,
    inLanguage: "es-AR",
    articleSection: caseStudy.category || "Casos de éxito",
    keywords: caseStudy.seo.focusKeyword ?? undefined,
    wordCount: body ? body.split(" ").length : undefined,
    about: caseStudy.client.name
      ? {
          "@type": "Organization",
          name: caseStudy.client.name,
          ...(caseStudy.client.industry ? { description: caseStudy.client.industry } : {}),
        }
      : undefined,
    mentions:
      caseStudy.products.length > 0
        ? caseStudy.products.map((product) => ({
            "@type": "Product",
            name: product.title,
            url: `${site.url}/productos/${product.slug}`,
          }))
        : undefined,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
      { "@type": "ListItem", position: 2, name: "Casos de éxito", item: `${site.url}${CASE_BASE_PATH}` },
      { "@type": "ListItem", position: 3, name: caseStudy.title, item: url },
    ],
  };

  return [article, breadcrumbs];
}

/** JSON-LD CollectionPage con la lista de casos publicados. */
export function caseStudiesCollectionJsonLd(caseStudies: CaseStudy[], description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Casos de éxito",
    description,
    url: `${site.url}${CASE_BASE_PATH}`,
    inLanguage: "es-AR",
    publisher: organization,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((caseStudy, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${site.url}${CASE_BASE_PATH}/${caseStudy.slug}`,
        name: caseStudy.title,
      })),
    },
  };
}
