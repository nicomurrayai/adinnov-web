import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { site } from "@content/site";
import { CaseStudyArticle } from "@/components/case-studies/CaseStudyArticle";
import { StructuredData } from "@/components/seo/StructuredData";
import { casePath, resolveCaseSeo } from "@/lib/case-studies/map";
import {
  getCaseStudies,
  getCaseStudy,
  getCaseStudyRedirect,
  getRelatedCaseStudies,
} from "@/lib/case-studies/queries";
import { caseStudyJsonLd } from "@/lib/case-studies/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getCaseStudies()).map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);
  if (!caseStudy) return { title: "Caso no encontrado", robots: { index: false, follow: true } };

  const seo = resolveCaseSeo(caseStudy, site.url);
  const robots = seo.indexable
    ? { index: true, follow: true }
    : { index: false, follow: true, googleBot: { index: false, follow: true } };
  const cover = caseStudy.cover;

  return {
    title: seo.title,
    description: seo.description,
    keywords: caseStudy.seo.focusKeyword ? [caseStudy.seo.focusKeyword] : undefined,
    alternates: { canonical: seo.canonical },
    robots,
    openGraph: {
      type: "article",
      title: seo.title,
      description: seo.description,
      url: casePath(caseStudy.slug),
      siteName: site.name,
      locale: "es_AR",
      publishedTime: caseStudy.publishedAt ?? undefined,
      modifiedTime: caseStudy.updatedAt,
      section: caseStudy.category || undefined,
      tags: caseStudy.seo.focusKeyword ? [caseStudy.seo.focusKeyword] : undefined,
      images: cover ? [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: cover ? [{ url: cover.src, alt: cover.alt }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);
  if (!caseStudy) {
    const currentSlug = await getCaseStudyRedirect(slug);
    if (currentSlug) permanentRedirect(casePath(currentSlug));
    notFound();
  }

  const related = await getRelatedCaseStudies(caseStudy, 3);

  return (
    <>
      <StructuredData data={caseStudyJsonLd(caseStudy)} />
      <CaseStudyArticle caseStudy={caseStudy} related={related} />
    </>
  );
}
