import type { Metadata } from "next";
import { caseStudiesIntro, site } from "@content/site";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CASE_BASE_PATH } from "@/lib/case-studies/map";
import { getCaseStudies } from "@/lib/case-studies/queries";
import { caseStudiesCollectionJsonLd } from "@/lib/case-studies/structured-data";

const title = "Casos de éxito";

export const metadata: Metadata = {
  title,
  description: caseStudiesIntro,
  alternates: { canonical: CASE_BASE_PATH },
  openGraph: {
    title: `${title} | Adinnov`,
    description: caseStudiesIntro,
    url: CASE_BASE_PATH,
    siteName: site.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Adinnov`,
    description: caseStudiesIntro,
  },
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      {caseStudies.length > 0 ? (
        <StructuredData data={caseStudiesCollectionJsonLd(caseStudies, caseStudiesIntro)} />
      ) : null}

      <Section>
        <SectionHeading as="h1" title={title} description={caseStudiesIntro} align="center" />

        {caseStudies.length > 0 ? (
          <CaseStudiesGrid caseStudies={caseStudies} className="mt-14 lg:mt-20" />
        ) : (
          <div className="mx-auto mt-14 max-w-2xl border border-dashed border-border bg-paper px-6 py-12 text-center lg:mt-20">
            <p className="eyebrow text-signal">Próximamente</p>
            <h2 className="font-display mt-4 text-balance text-2xl font-medium tracking-[-0.03em] text-navy md:text-3xl">
              Estamos preparando nuestros casos de éxito
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Mientras tanto, contanos qué querés implementar y te mostramos proyectos similares.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href="/contacto?intent=venta">Hablemos de tu proyecto</Button>
            </div>
          </div>
        )}
      </Section>

      <section className="border-y border-border bg-ivory py-14 md:py-20">
        <Container className="grid gap-7 md:grid-cols-12 md:items-center">
          <p className="eyebrow text-signal md:col-span-3">Trabajo a medida</p>
          <p className="font-display text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-navy md:col-span-6 md:text-4xl">
            Si el formato no existe, podemos diseñarlo alrededor del espacio.
          </p>
          <div className="md:col-span-3 md:flex md:justify-end">
            <Button href="/contacto?intent=venta">Contanos la idea</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
