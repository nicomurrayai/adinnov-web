import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@content/site";
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
        title={site.about.title}
        description={site.about.lead}
        index="05"
      >
        <div className="flex items-end gap-4 border-l-2 border-signal pl-5 md:justify-end">
          <span className="font-display text-6xl font-medium leading-[0.75] tracking-[-0.06em] text-navy md:text-7xl">
            +10
          </span>
          <span className="max-w-28 pb-0.5 font-mono text-[0.65rem] uppercase leading-4 tracking-[0.12em] text-muted">
            años creando soluciones
          </span>
        </div>
      </PageHero>

      <Section className="overflow-hidden">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="relative min-h-[30rem] overflow-hidden bg-surface sm:min-h-[38rem] lg:sticky lg:top-28 lg:h-[calc(100vh-9rem)] lg:max-h-[52rem]">
              <Image
                src="/site/nosotros.jpg"
                alt="Tótem digital interactivo de fabricación propia Adinnov"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="image-zoom object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/45 to-transparent p-6 pt-32 text-white md:p-8">
                <p className="font-mono text-[0.63rem] uppercase tracking-[0.1em] text-white/55">
                  Buenos Aires · Argentina
                </p>
                <p className="font-display mt-2 text-2xl font-medium tracking-[-0.03em]">
                  Diseñamos. Fabricamos. Integramos.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-signal">Fabricación propia</p>
            <h2 className="font-display mt-5 text-balance text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.052em] text-navy">
              {site.about.manufacturing.title}
            </h2>
            <div className="mt-10 space-y-6 border-t border-border pt-8 text-lg leading-8 text-muted">
              <p>{site.about.manufacturing.description}</p>
              <p>{site.about.manufacturing.products}</p>
            </div>

            <div className="mt-14 bg-ivory p-7 md:p-9">
              <div className="flex items-center justify-between gap-5">
                <p className="eyebrow text-signal">Diseño protegido</p>
                <span className="font-mono text-xs text-muted">INPI · ARG</span>
              </div>
              <p className="font-display mt-8 max-w-xl text-2xl font-medium leading-tight tracking-[-0.035em] text-navy md:text-3xl">
                Un modelo de tótem único en el mercado, desarrollado y patentado por Adinnov.
              </p>
            </div>

            <Reveal className="mt-16 border-t border-border pt-8" delay={0.08}>
              <p className="eyebrow text-signal">Indoor + Outdoor</p>
              <h3 className="font-display mt-5 text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-navy md:text-4xl">
                {site.about.led.title}
              </h3>
              <p className="mt-6 text-lg leading-8 text-muted">{site.about.led.description}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="border-y border-border">
        <SectionHeading
          eyebrow="Lo que nos define"
          title="Cuatro ideas. Una forma de trabajar."
          description="Cada proyecto combina conocimiento acumulado, control sobre el producto y una mirada siempre puesta en lo que viene."
        />
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {site.about.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06}>
              <article className="group flex min-h-72 flex-col justify-between bg-ivory p-6 transition-colors duration-300 hover:bg-paper md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] text-signal">0{index + 1}</span>
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal transition-transform duration-300 group-hover:scale-[1.8]" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-medium leading-none tracking-[-0.04em] text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{pillar.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy" className="editorial-grid overflow-hidden">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-signal-pale">Venta + alquiler</p>
            <h2 className="font-display mt-5 text-balance text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.052em]">
              {site.about.operations.title}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/68">
              {site.about.operations.description}
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="border-t border-white/20">
              {site.about.operations.steps.map((step, index) => (
                <li key={step} className="group flex items-center gap-5 border-b border-white/20 py-5 md:py-6">
                  <span className="font-mono text-[0.65rem] text-signal-pale/60">0{index + 1}</span>
                  <span className="font-display text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                    {step}
                  </span>
                  <span aria-hidden="true" className="ml-auto text-signal-pale transition-transform duration-300 group-hover:translate-x-1">→</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-px bg-border lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full min-h-[28rem] flex-col justify-between bg-paper p-7 md:p-10 lg:p-12">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-signal">Clientes</p>
                <span className="font-mono text-[0.65rem] text-muted">01 / 02</span>
              </div>
              <div className="mt-16">
                <h2 className="font-display max-w-xl text-balance text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-navy md:text-5xl">
                  {site.about.clients.title}
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-muted">{site.about.clients.description}</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="flex h-full min-h-[28rem] flex-col justify-between bg-ivory p-7 md:p-10 lg:p-12">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-signal">Desarrollo propio</p>
                <span className="font-mono text-[0.65rem] text-muted">02 / 02</span>
              </div>
              <div className="mt-16">
                <h2 className="font-display max-w-xl text-balance text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-navy md:text-5xl">
                  {site.about.software.title}
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-muted">{site.about.software.description}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      <section className="relative overflow-hidden border-y border-border bg-ivory py-20 md:py-28">
        <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[5rem] border-signal/5 md:h-[30rem] md:w-[30rem] md:border-[8rem]" />
        <Container className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-signal">Vocación innovadora</p>
            <h2 className="font-display mt-6 text-balance text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.92] tracking-[-0.052em] text-navy">
              Crear lo que sigue también es parte de nuestro trabajo.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">{site.about.closing}</p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Button href="/contacto">Hablemos de tu proyecto</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
