"use client";

import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import { processSteps } from "@content/site";
import { Section, SectionHeading } from "../ui/Section";

const ease = [0.22, 1, 0.36, 1] as const;

function StepConnector({
  index,
  reducedMotion,
}: {
  index: number;
  reducedMotion: boolean | null;
}) {
  const delay = reducedMotion ? 0 : 0.35 + index * 0.55;
  const duration = reducedMotion ? 0 : 0.55;

  return (
    <li
      className="flex shrink-0 list-none items-center justify-center self-stretch py-1 md:w-12 md:self-center md:px-1 md:py-0 lg:w-16"
      aria-hidden="true"
    >
      {/* Mobile: vertical connector */}
      <div className="relative flex h-11 w-4 flex-col items-center justify-center md:hidden">
        <m.span
          className="absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 bg-white/30"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration, delay, ease }}
        />
        <m.span
          className="relative z-10 mt-auto bg-navy px-0.5 text-[0.7rem] leading-none text-white/35"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reducedMotion ? 0 : 0.3,
            delay: delay + 0.35,
            ease,
          }}
        >
          ↓
        </m.span>
      </div>

      {/* Desktop: horizontal connector */}
      <div className="relative hidden h-4 w-full items-center md:flex">
        <m.span
          className="absolute left-0 top-1/2 h-px w-full origin-left -translate-y-1/2 bg-white/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration, delay, ease }}
        />
        <m.span
          className="relative z-10 ml-auto bg-navy pl-1 text-[0.75rem] leading-none text-white/35"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reducedMotion ? 0 : 0.3,
            delay: delay + 0.35,
            ease,
          }}
        >
          →
        </m.span>
      </div>
    </li>
  );
}

function ProcessStep({
  step,
  index,
  reducedMotion,
}: {
  step: (typeof processSteps)[number];
  index: number;
  reducedMotion: boolean | null;
}) {
  const delay = reducedMotion
    ? 0
    : index === 0
      ? 0.08
      : 0.35 + (index - 1) * 0.55 + 0.5;

  return (
    <m.li
      className="min-w-0 flex-1 list-none"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay,
        ease,
      }}
    >
      <article className="flex h-full flex-col border border-white/15 px-6 py-8 md:px-7 md:py-10">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/50">
          {step.index}
        </span>
        <h3 className="font-display mt-8 text-2xl font-medium leading-[1.05] tracking-[-0.035em] text-white md:mt-10 md:text-[1.75rem] lg:text-3xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-6 text-white/58 md:mt-5">
          {step.description}
        </p>
      </article>
    </m.li>
  );
}

export function Process() {
  const reducedMotion = useReducedMotion();

  return (
    <Section tone="navy" className="editorial-grid">
      <SectionHeading
        align="center"
        eyebrow="Método"
        title="Del objetivo a una solución operativa"
        description="Un proceso simple para reducir incertidumbre y llegar a una implementación que funcione en el espacio real."
        light
      />
      <p className="font-mono mt-6 text-center text-xs leading-6 text-white/60">
        Diseño · Integración · Puesta en marcha
      </p>

      <LazyMotion features={domAnimation} strict>
        <ol className="mt-14 flex flex-col md:mt-20 md:flex-row md:items-stretch">
          {processSteps.flatMap((step, index) => {
            const nodes = [];
            if (index > 0) {
              nodes.push(
                <StepConnector
                  key={`connector-${step.index}`}
                  index={index - 1}
                  reducedMotion={reducedMotion}
                />,
              );
            }
            nodes.push(
              <ProcessStep
                key={step.index}
                step={step}
                index={index}
                reducedMotion={reducedMotion}
              />,
            );
            return nodes;
          })}
        </ol>
      </LazyMotion>
    </Section>
  );
}
