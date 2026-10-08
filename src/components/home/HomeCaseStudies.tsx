import Link from "next/link";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { Container } from "@/components/ui/Container";
import type { CaseStudy } from "@/lib/case-studies/map";

export function HomeCaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section id="casos-destacados" aria-labelledby="home-cases-heading" className="bg-ivory py-16 md:py-24">
      <Container>
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-signal">Proyectos reales</p>
            <h2 id="home-cases-heading" className="font-display mt-3 text-balance text-4xl font-semibold tracking-[-0.04em] text-navy md:text-5xl">Casos destacados</h2>
          </div>
          <Link href="/casos-de-exito" className="inline-flex min-h-11 items-center gap-2 font-semibold text-signal underline-offset-4 hover:underline">Ver todos los casos <span aria-hidden="true">↗</span></Link>
        </div>
        {caseStudies.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((caseStudy) => <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} headingLevel="h3" />)}
          </div>
        ) : (
          <p className="max-w-xl text-lg text-muted">Pronto vas a poder conocer los proyectos que desarrollamos junto a nuestros clientes.</p>
        )}
      </Container>
    </section>
  );
}
