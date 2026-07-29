import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@content/site";
import { HomeCta } from "../../components/home/HomeCta";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { Section, SectionHeading } from "../../components/ui/Section";

export const metadata: Metadata = {
  title: "Nosotros",
  description: site.about.lead,
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Innovar es hacer que la tecnología tenga sentido"
        description={site.about.lead}
        index="05"
      >
        <Button href="/contacto">Conocer al equipo</Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative min-h-[34rem] overflow-hidden bg-surface lg:sticky lg:top-28 lg:h-[calc(100vh-9rem)] lg:max-h-[52rem]">
              <Image
                src="/site/nosotros.jpg"
                alt="Tótem interactivo fabricado por Adinnov"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/82 to-transparent p-6 pt-24 text-white">
                <p className="font-mono text-[0.63rem] uppercase tracking-[0.1em] text-white/55">
                  Buenos Aires · Argentina
                </p>
                <p className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
                  Diseño, fabricación e integración
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-signal">Nuestra mirada</p>
            <h2 className="font-display mt-5 text-balance text-[clamp(2.7rem,5vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.052em] text-navy">
              {site.about.title}
            </h2>
            <div className="mt-10 space-y-7 border-t border-border pt-8 text-lg leading-8 text-muted">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 border-l-2 border-signal pl-6">
              <p className="eyebrow text-signal">Principio de trabajo</p>
              <p className="font-display mt-3 text-2xl font-medium leading-tight tracking-[-0.035em] text-navy md:text-3xl">
                La innovación aparece cuando el hardware, el contenido y el espacio funcionan como una sola experiencia.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Capacidades"
          title="Un equipo, varias disciplinas"
          description="La fabricación y la integración técnica conviven con el desarrollo de software y la operación en campo."
        />
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {site.about.capabilities.map((capability, index) => (
            <article key={capability} className="flex min-h-48 flex-col justify-between bg-ivory p-6">
              <span className="font-mono text-[0.63rem] text-signal">0{index + 1}</span>
              <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-navy">
                {capability}
              </h3>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-paper py-14 md:py-20">
        <Container className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-signal">Dónde estamos</p>
            <h2 className="font-display mt-4 text-3xl font-medium tracking-[-0.04em] text-navy md:text-5xl">
              {site.address}
            </h2>
            <p className="mt-4 text-muted">Atendemos proyectos para empresas e instituciones en toda la Argentina.</p>
          </div>
          <div className="md:col-span-5 md:flex md:justify-end">
            <Button href="/contacto">Coordinar una consulta</Button>
          </div>
        </Container>
      </section>

      <HomeCta />
    </>
  );
}
