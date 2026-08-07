import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: "white" | "surface" | "navy";
}) {
  const tones = {
    white: "bg-paper text-navy",
    surface: "bg-ivory text-navy",
    navy: "bg-navy text-white",
  };

  return (
    <section id={id} className={`py-[var(--space-section)] ${tones[tone]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <header
      className={`max-w-5xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${light ? "text-white/56" : "text-signal"}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`font-display mt-5 text-balance text-[clamp(1.85rem,3.2vw,3.15rem)] font-medium leading-[1.05] tracking-[-0.035em] ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-4xl text-base leading-7 md:text-lg md:leading-8 ${centered ? "mx-auto" : ""} ${light ? "text-white/68" : "text-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
