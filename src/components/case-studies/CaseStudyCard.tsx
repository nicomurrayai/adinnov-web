import Image from "next/image";
import Link from "next/link";
import { casePath, type CaseStudy } from "@/lib/case-studies/map";

export function CaseStudyCard({
  caseStudy,
  headingLevel = "h2",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  caseStudy: CaseStudy;
  headingLevel?: "h2" | "h3";
  sizes?: string;
}) {
  const Heading = headingLevel;

  return (
    <article className="group/card relative flex h-full flex-col border border-border bg-paper transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] has-[a:focus-visible]:outline has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-signal hover:-translate-y-0.5 hover:border-navy/35 hover:shadow-[var(--shadow-card)] motion-reduce:transform-none">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        {caseStudy.cover ? (
          <Image
            src={caseStudy.cover.src}
            alt={caseStudy.cover.alt}
            fill
            sizes={sizes}
            loading="lazy"
            className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.03] motion-reduce:transform-none"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_48%,var(--border)_49%_51%,transparent_52%)] opacity-70"
          />
        )}
        {caseStudy.category ? (
          <span className="absolute left-4 top-4 inline-flex border border-signal/25 bg-signal-pale px-2 py-1 font-mono text-[0.58rem] font-medium uppercase tracking-[0.14em] text-signal">
            {caseStudy.category}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
        {caseStudy.client.name ? (
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">{caseStudy.client.name}</p>
        ) : null}
        <Heading className="font-display mt-2 text-balance text-[clamp(1.25rem,1.9vw,1.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-navy">
          <Link
            href={casePath(caseStudy.slug)}
            className="transition-colors after:absolute after:inset-0 after:content-[''] hover:text-signal focus-visible:outline-none"
          >
            {caseStudy.title}
          </Link>
        </Heading>
        {caseStudy.summary ? (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{caseStudy.summary}</p>
        ) : null}
        <div aria-hidden="true" className="mt-auto pt-6">
          <span className="flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.08em] text-navy">
            Ver caso
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1 motion-reduce:transform-none"
            >
              <path d="M3.5 10h12m-4.5-4.5L15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
