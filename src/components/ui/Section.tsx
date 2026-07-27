import { type ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  id,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "surface" | "navy";
}) {
  const tones = {
    white: "bg-white text-navy",
    surface: "bg-surface text-navy",
    navy: "bg-navy text-white",
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-medium uppercase tracking-[0.18em] ${
            light ? "text-white/60" : "text-muted"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-[family-name:var(--font-outfit)] text-3xl font-medium tracking-tight md:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
