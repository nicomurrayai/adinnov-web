import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CASE_BASE_PATH, type CaseStudy } from "@/lib/case-studies/map";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { CaseStudiesGrid } from "./CaseStudiesGrid";
import { RichText } from "./RichText";

const monthFormatter = new Intl.DateTimeFormat("es-AR", { month: "long", year: "numeric", timeZone: "UTC" });

function formatProjectDate(value: string | null) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return null;
  const label = monthFormatter.format(date);
  return label.charAt(0).toUpperCase() + label.slice(1);
}

const SECTIONS = [
  { key: "challenge", id: "desafio", eyebrow: "El desafío", title: "Desafío inicial" },
  { key: "solution", id: "solucion", eyebrow: "La solución", title: "Solución implementada" },
  { key: "process", id: "proceso", eyebrow: "El proceso", title: "Proceso y desarrollo" },
  { key: "results", id: "resultados", eyebrow: "El impacto", title: "Resultados obtenidos" },
] as const;

export function CaseStudyArticle({
  caseStudy,
  related = [],
  preview = false,
}: {
  caseStudy: CaseStudy;
  related?: CaseStudy[];
  preview?: boolean;
}) {
  const projectDate = formatProjectDate(caseStudy.projectDate);
  const sections = SECTIONS.filter(
    (section) => caseStudy[section.key].trim() || (section.key === "results" && caseStudy.metrics.length > 0),
  );
  const facts: { label: string; value: ReactNode }[] = [];
  if (caseStudy.client.industry) facts.push({ label: "Rubro", value: caseStudy.client.industry });
  if (caseStudy.client.location) facts.push({ label: "Ubicación", value: caseStudy.client.location });
  if (caseStudy.category) facts.push({ label: "Solución", value: caseStudy.category });
  if (projectDate && caseStudy.projectDate) {
    facts.push({ label: "Fecha", value: <time dateTime={caseStudy.projectDate}>{projectDate}</time> });
  }
  const hasProjectInfo = Boolean(caseStudy.client.name || caseStudy.client.logo || facts.length || caseStudy.products.length);
  const ctaTitle = caseStudy.cta.title || "¿Tenés un proyecto parecido?";
  const ctaText =
    caseStudy.cta.text ||
    "Contanos qué necesitás comunicar y en qué espacio. Diseñamos, fabricamos e instalamos la solución completa.";

  return (
    <article className="bg-white pt-24 md:pt-28">
      <Container>
        {preview ? null : (
          <nav aria-label="Migas de pan" className="mb-8 overflow-x-auto pb-1">
            <ol className="flex min-w-max items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true" className="text-border">
                /
              </li>
              <li>
                <Link href={CASE_BASE_PATH} className="transition-colors hover:text-accent">
                  Casos de éxito
                </Link>
              </li>
              <li aria-hidden="true" className="text-border">
                /
              </li>
              <li aria-current="page" className="max-w-[55vw] truncate text-navy">
                {caseStudy.title}
              </li>
            </ol>
          </nav>
        )}

        <header className="grid gap-8 border-b border-border pb-10 lg:grid-cols-12 lg:items-end lg:pb-14">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              {caseStudy.category ? (
                <span className="inline-flex border border-signal/25 bg-signal-pale px-2 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] text-signal">
                  {caseStudy.category}
                </span>
              ) : null}
              <span className="eyebrow text-muted">Caso de éxito</span>
            </div>
            <h1 className="font-display mt-6 text-balance text-[clamp(2.4rem,5.4vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.05em] text-navy">
              {caseStudy.title}
            </h1>
          </div>
          {caseStudy.summary ? (
            <p className="text-lg leading-8 text-muted lg:col-span-4 md:text-xl md:leading-9">{caseStudy.summary}</p>
          ) : null}
        </header>

        {caseStudy.cover ? (
          <figure className="mt-10 overflow-hidden bg-surface md:mt-14">
            <Image
              src={caseStudy.cover.src}
              alt={caseStudy.cover.alt}
              width={caseStudy.cover.width}
              height={caseStudy.cover.height}
              sizes="(max-width: 1440px) 100vw, 1440px"
              preload
              quality={84}
              className="h-auto max-h-[78vh] w-full object-cover"
            />
          </figure>
        ) : null}

        <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <div className="min-w-0 space-y-14 md:space-y-20">
            {sections.length === 0 ? (
              <p className="text-lg leading-8 text-muted">Pronto vamos a sumar el detalle de este proyecto.</p>
            ) : null}
            {sections.map((section, index) => (
              <section key={section.key} aria-labelledby={`caso-${section.id}`} className="scroll-mt-28">
                <p className="eyebrow text-signal">
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")} · </span>
                  {section.eyebrow}
                </p>
                <h2
                  id={`caso-${section.id}`}
                  className="font-display mt-4 text-balance text-[clamp(1.75rem,3vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-navy"
                >
                  {section.title}
                </h2>
                {section.key === "results" && caseStudy.metrics.length > 0 ? (
                  <dl className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {caseStudy.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex flex-col-reverse gap-2 border border-border bg-ivory p-5 md:p-6">
                        <dt className="text-sm leading-6 text-muted">{metric.label}</dt>
                        <dd className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-medium leading-none tracking-[-0.05em] text-navy">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <RichText source={caseStudy[section.key]} className="mt-6 max-w-3xl" />
              </section>
            ))}
          </div>

          {hasProjectInfo ? (
            <aside aria-labelledby="caso-ficha" className="h-fit lg:sticky lg:top-28">
              <div className="border border-border bg-paper">
                <div className="border-b border-border px-5 py-4">
                  <h2 id="caso-ficha" className="eyebrow text-navy">
                    Ficha del proyecto
                  </h2>
                </div>
                <div className="space-y-5 px-5 py-5">
                  {caseStudy.client.logo || caseStudy.client.name ? (
                    <div>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">Cliente</p>
                      {caseStudy.client.logo ? (
                        <span className="relative mt-3 block h-12 w-32">
                          <Image
                            src={caseStudy.client.logo}
                            alt={caseStudy.client.name ? `Logo de ${caseStudy.client.name}` : "Logo del cliente"}
                            fill
                            sizes="128px"
                            className="object-contain object-left"
                          />
                        </span>
                      ) : null}
                      {caseStudy.client.name ? (
                        <p className="font-display mt-2 text-xl font-medium tracking-[-0.02em] text-navy">
                          {caseStudy.client.name}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {facts.length > 0 ? (
                    <dl className="space-y-4 border-t border-border pt-5">
                      {facts.map((fact) => (
                        <div key={fact.label}>
                          <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">{fact.label}</dt>
                          <dd className="mt-1 text-sm leading-6 text-navy">{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  {caseStudy.products.length > 0 ? (
                    <div className="border-t border-border pt-5">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                        Productos utilizados
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {caseStudy.products.map((product) => (
                          <li key={product.slug}>
                            <Link
                              href={`/productos/${product.slug}`}
                              className="inline-flex min-h-8 items-center gap-2 text-sm font-medium text-navy underline decoration-border underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
                            >
                              {product.title}
                              <span aria-hidden="true">→</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </aside>
          ) : null}
        </div>

        {caseStudy.gallery.length > 0 ? (
          <section aria-labelledby="caso-galeria" className="mt-16 border-t border-border pt-14 md:mt-24 md:pt-20">
            <p className="eyebrow text-signal">En el lugar</p>
            <h2
              id="caso-galeria"
              className="font-display mt-4 text-[clamp(1.75rem,3vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-navy"
            >
              Galería del proyecto
            </h2>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2 md:gap-6">
              {caseStudy.gallery.map((image, index) => (
                <li key={image.src} className={caseStudy.gallery.length % 2 === 1 && index === 0 ? "sm:col-span-2" : ""}>
                  <figure className="h-full">
                    <div className="overflow-hidden bg-surface">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        sizes={
                          caseStudy.gallery.length % 2 === 1 && index === 0
                            ? "(max-width: 1440px) 100vw, 1440px"
                            : "(max-width: 640px) 100vw, 50vw"
                        }
                        className="h-auto w-full"
                      />
                    </div>
                    {image.caption ? (
                      <figcaption className="mt-3 text-sm leading-6 text-muted">{image.caption}</figcaption>
                    ) : null}
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>

      <section aria-labelledby="caso-cta" className="mt-16 border-y border-border bg-ivory py-14 md:mt-24 md:py-20">
        <Container className="grid gap-7 md:grid-cols-12 md:items-center">
          <p className="eyebrow text-signal md:col-span-3">Hablemos</p>
          <div className="md:col-span-6">
            <h2
              id="caso-cta"
              className="font-display text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-navy md:text-4xl"
            >
              {ctaTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{ctaText}</p>
          </div>
          <div className="md:col-span-3 md:flex md:justify-end">
            <Button href="/contacto?intent=venta">Contanos tu proyecto</Button>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <Container>
          <section aria-labelledby="caso-relacionados" className="pb-20 pt-16 md:pb-28 md:pt-24">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-signal">Seguir leyendo</p>
                <h2
                  id="caso-relacionados"
                  className="font-display mt-3 text-3xl font-medium tracking-[-0.035em] text-navy md:text-4xl"
                >
                  Otros casos de éxito
                </h2>
              </div>
              <Link
                href={CASE_BASE_PATH}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline-offset-4 hover:text-accent hover:underline"
              >
                Ver todos los casos <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <CaseStudiesGrid caseStudies={related} headingLevel="h3" className="mt-9" />
          </section>
        </Container>
      ) : null}
    </article>
  );
}
