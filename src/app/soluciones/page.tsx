import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productFamilies, processSteps, site } from "@content/site";
import { verticals } from "@content/verticals";
import { HomeCta } from "../../components/home/HomeCta";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { Section, SectionHeading } from "../../components/ui/Section";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Soluciones consultivas de cartelería digital, interacción, LED, autogestión y software para espacios corporativos, comerciales e institucionales.",
  alternates: { canonical: "/soluciones" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Soluciones de Adinnov",
  itemListElement: productFamilies.map((family, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: family.title,
      description: family.description,
      provider: { "@type": "Organization", name: site.name },
      url: `${site.url}${family.href}`,
    },
  })),
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="Tecnología con una función clara"
        description="No empezamos por una pantalla: empezamos por lo que el espacio necesita comunicar, resolver o hacer posible."
        index="01"
      >
        <Button href="/contacto?intent=venta">Conversar el proyecto</Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Seis familias"
          title="Un sistema completo, de lo físico a lo digital"
          description="Cada familia puede funcionar por sí sola o integrarse con las demás en una solución diseñada para el proyecto."
        />

        <div className="mt-16 border-t border-border lg:mt-24">
          {productFamilies.map((family, index) => (
            <Reveal key={family.id}>
              <article className="grid gap-8 border-b border-border py-10 lg:grid-cols-12 lg:items-center lg:py-14">
                <div className={`lg:col-span-5 ${index % 2 ? "lg:col-start-8" : ""}`}>
                  <Link href={family.href} prefetch={false} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                      <Image
                        src={family.image}
                        alt={family.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="image-zoom object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`lg:col-span-6 ${
                    index % 2 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-7"
                  }`}
                >
                  <p className="font-mono text-[0.65rem] text-signal">{family.index}</p>
                  <h2 className="font-display mt-4 text-[clamp(2.4rem,4vw,4.7rem)] font-medium leading-[0.92] tracking-[-0.05em] text-navy">
                    {family.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-muted">{family.description}</p>
                  <Link
                    href={family.href}
                    prefetch={false}
                    className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.09em] text-navy"
                  >
                    Explorar productos
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy" className="editorial-grid">
        <SectionHeading
          eyebrow="Proceso consultivo"
          title="La elección correcta ocurre antes de instalar"
          description="Ordenamos las decisiones técnicas alrededor de la experiencia que querés construir."
          light
        />
        <ol className="mt-14 grid gap-px bg-white/16 md:grid-cols-3 lg:mt-20">
          {processSteps.map((step) => (
            <li key={step.index} className="min-h-72 bg-navy p-7">
              <p className="font-mono text-[0.65rem] text-white/60">{step.index}</p>
              <h3 className="font-display mt-20 text-3xl font-medium tracking-[-0.04em] text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/58">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-ivory py-[var(--space-section)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-signal">Entornos</p>
              <h2 className="font-display mt-5 text-balance text-[clamp(2.6rem,5vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.05em] text-navy">
                La misma tecnología, distintos desafíos
              </h2>
            </div>
            <ol className="border-t border-border lg:col-span-7">
              {verticals.slice(0, 6).map((vertical, index) => (
                <li key={vertical.id} className="grid gap-4 border-b border-border py-5 sm:grid-cols-12">
                  <span className="font-mono text-[0.62rem] text-signal sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-medium tracking-[-0.025em] text-navy sm:col-span-4">
                    {vertical.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted sm:col-span-7">{vertical.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <HomeCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
