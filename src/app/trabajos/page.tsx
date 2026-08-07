import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { works, worksIntro } from "@content/works";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";
import { Section, SectionHeading } from "../../components/ui/Section";

export const metadata: Metadata = {
  title: "Trabajos e implementaciones",
  description: worksIntro,
  alternates: { canonical: "/trabajos" },
};

const collectionIds = ["videowalls", "tvs", "totems", "led", "alquileres"] as const;

function galleryItemClass(index: number, total: number) {
  if (index === 0) return "sm:col-span-2 lg:col-span-7 lg:row-span-2";
  if (index === 1) return "lg:col-span-5 lg:row-span-2";
  if (total === 6 && index === 5) return "sm:col-span-2 lg:col-span-12";
  if (total === 7 && index >= 5) return "lg:col-span-6";
  return "lg:col-span-4";
}

export default function TrabajosPage() {
  return (
    <>
      <div className="sticky top-[4.75rem] z-20 border-b border-border bg-paper/94 backdrop-blur-xl">
        <Container className="overflow-x-auto">
          <nav aria-label="Colecciones de trabajos" className="flex min-w-max">
            {works.map((work, index) => (
              <a
                key={work.title}
                href={`#${collectionIds[index]}`}
                className="border-r border-border px-5 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-muted transition-colors first:border-l hover:bg-ivory hover:text-navy"
              >
                <span className="font-mono mr-2 text-[0.6rem] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {work.title}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <Section>
        <SectionHeading
          title="Casos de éxito"
          description="Así se ven nuestras soluciones instaladas: pantallas, tótems, LED y más, en proyectos reales."
        />

        <div className="mt-16 space-y-24 lg:mt-28 lg:space-y-36">
          {works.map((work, collectionIndex) => (
            <article
              key={work.title}
              id={collectionIds[collectionIndex]}
              className="scroll-mt-40"
            >
              <Reveal className="grid gap-8 border-t border-navy pt-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-3">
                  <p className="eyebrow text-signal">
                    Colección {String(collectionIndex + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <h2 className="font-display text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.055em] text-navy">
                    {work.title}
                  </h2>
                </div>
                <div className="lg:col-span-4">
                  <p className="max-w-lg text-base leading-7 text-muted">{work.description}</p>
                  <Link
                    href="/contacto?intent=venta"
                    className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.09em] text-navy transition-colors hover:text-signal"
                  >
                    Consultar proyecto
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>

              <div className="mt-9 grid auto-rows-[16rem] gap-3 sm:grid-cols-2 sm:auto-rows-[20rem] lg:grid-cols-12 lg:auto-rows-[15rem]">
                {work.images.map((src, imageIndex) => (
                  <Reveal
                    key={src}
                    delay={Math.min(imageIndex * 0.04, 0.2)}
                    className={galleryItemClass(imageIndex, work.images.length)}
                  >
                    <figure className="group relative h-full overflow-hidden bg-surface">
                      <Image
                        src={src}
                        alt={`${work.title}: implementación ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-navy/75 via-navy/20 to-transparent px-4 pb-4 pt-16 text-white">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em]">
                          {work.title}
                        </span>
                        <span className="font-mono text-[0.62rem] text-white/80">
                          {String(imageIndex + 1).padStart(2, "0")} / {String(work.images.length).padStart(2, "0")}
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>
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
