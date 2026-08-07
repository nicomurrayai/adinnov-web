import type { Metadata } from "next";
import Image from "next/image";
import { clients, clientsIntro, clientSegments } from "@content/clients";
import { site } from "@content/site";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { Section, SectionHeading } from "../../components/ui/Section";

export const metadata: Metadata = {
  title: "Clientes",
  description: clientsIntro,
  alternates: { canonical: "/clientes" },
};

export default function ClientesPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientes"
        title="Soluciones para organizaciones reales"
        description={clientsIntro}
        index="04"
      >
        <Button href="/contacto">Iniciar un proyecto</Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeading
            eyebrow="Experiencia"
            title="Marcas e instituciones que eligieron Adinnov"
            description="Una muestra de organizaciones publicadas en el archivo institucional de Adinnov."
            className="lg:col-span-5"
          />
          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:col-span-7">
            {clients.map((client, index) => (
              <Reveal key={client.name} delay={(index % 3) * 0.035}>
                <div className="flex min-h-32 items-center justify-center bg-paper px-5 text-center transition-colors hover:bg-ivory">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={220}
                    height={96}
                    sizes="(max-width: 640px) 40vw, 180px"
                    className="h-14 w-full max-w-44 object-contain grayscale opacity-70 transition-[filter,opacity] duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Escalas y sectores"
          title="Una relación distinta para cada contexto"
          description="La propuesta se adapta al uso, la operación y el alcance del proyecto."
        />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {clientSegments.map((segment, index) => (
            <article key={segment.title} className="flex min-h-64 flex-col bg-ivory p-6">
              <span className="font-mono text-[0.63rem] text-signal">0{index + 1}</span>
              <h2 className="font-display mt-auto text-2xl font-medium leading-tight tracking-[-0.035em] text-navy">
                {segment.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">{segment.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-paper py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow text-signal">Partners</p>
            <h2 className="font-display mt-5 text-4xl font-medium leading-none tracking-[-0.045em] text-navy md:text-5xl">
              Una red que amplía cada solución
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-8 lg:col-span-7 lg:justify-end">
            {site.partners.map((partner) => (
              <div
                key={partner.name}
                className="opacity-65 grayscale transition-[opacity,filter] hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={170}
                  height={66}
                  sizes="170px"
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
