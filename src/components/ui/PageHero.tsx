import type { ReactNode } from "react";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  index,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  index?: string;
}) {
  return (
    <section className="paper-grid relative overflow-hidden border-b border-border bg-ivory pb-16 pt-32 md:pb-24 md:pt-40 lg:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <p className="eyebrow text-signal">{eyebrow}</p>
            <h1 className="font-display mt-6 max-w-5xl text-balance text-[clamp(3.25rem,8vw,8.4rem)] font-medium leading-[0.86] tracking-[-0.055em] text-navy">
              {title}
            </h1>
          </div>
          {index ? (
            <p aria-hidden="true" className="font-mono hidden text-right text-[clamp(3rem,6vw,6rem)] font-medium leading-none text-navy/10 lg:col-span-3 lg:block">
              {index}
            </p>
          ) : null}
        </div>
        <div className="mt-12 grid gap-8 border-t border-border pt-7 md:grid-cols-12 lg:mt-16">
          <p className="max-w-2xl text-lg leading-8 text-muted md:col-span-7 md:text-xl md:leading-9">
            {description}
          </p>
          {children ? <div className="md:col-span-5 md:flex md:justify-end">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
