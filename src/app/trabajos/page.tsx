import type { Metadata } from "next";
import { bentoCases, worksIntro } from "@content/works";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Section, SectionHeading } from "../../components/ui/Section";
import { WorksBentoGrid } from "../../components/works/WorksBentoGrid";

export const metadata: Metadata = {
  title: "Trabajos e implementaciones",
  description: worksIntro,
  alternates: { canonical: "/trabajos" },
};

export default function TrabajosPage() {
  return (
    <>
      <Section>
        <SectionHeading
          title="Casos de éxito"
          description={worksIntro}
          align="center"
        />

        <WorksBentoGrid cases={bentoCases} />
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
