"use client";

import Image from "next/image";
import type { WorkCase } from "@content/types";
import { WorkImageCarousel } from "./WorkImageCarousel";

export function WorkBentoCard({ work }: { work: WorkCase }) {
  const identityLabel =
    work.brands.length > 0
      ? work.brands.map((brand) => brand.name).join(" · ")
      : work.category;

  return (
    <article
      id={work.id}
      className="group/card flex h-full min-h-0 flex-col border border-border bg-paper transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-navy/35 hover:shadow-[var(--shadow-card)] motion-reduce:transform-none"
    >
      <div className="flex h-[11.5rem] shrink-0 flex-col gap-3 border-b border-border px-4 py-4 sm:h-[12.5rem] sm:px-5 sm:py-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex border border-signal/25 bg-signal-pale px-2 py-1 font-mono text-[0.58rem] font-medium uppercase tracking-[0.14em] text-signal">
            {work.category}
          </span>
        </div>

        {work.brands.some((brand) => brand.logo) ? (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {work.brands.map((brand) =>
              brand.logo ? (
                <span
                  key={brand.name}
                  className="relative h-7 w-16 shrink-0 sm:h-8 sm:w-20"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="80px"
                    className="object-contain object-left opacity-80 transition-opacity duration-300 group-hover/card:opacity-100"
                  />
                </span>
              ) : null,
            )}
          </div>
        ) : null}

        <div className="min-w-0">
          <h3 className="font-display line-clamp-2 text-[clamp(1.2rem,1.8vw,1.55rem)] font-medium leading-[1.05] tracking-[-0.035em] text-navy">
            {work.title}
          </h3>
          {work.description ? (
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{work.description}</p>
          ) : null}
        </div>
      </div>

      <div className="relative min-h-0 flex-1">
        <WorkImageCarousel
          images={work.images}
          label={identityLabel}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="absolute inset-0"
        />
      </div>
    </article>
  );
}
