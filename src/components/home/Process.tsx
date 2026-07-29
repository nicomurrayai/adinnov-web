import { processSteps } from "@content/site";
import { Reveal } from "../ui/Reveal";
import { Section, SectionHeading } from "../ui/Section";

export function Process() {
  return (
    <Section tone="navy" className="editorial-grid">
      <div className="grid gap-10 lg:grid-cols-12">
        <SectionHeading
          eyebrow="Método"
          title="Del objetivo a una solución operativa"
          description="Un proceso simple para reducir incertidumbre y llegar a una implementación que funcione en el espacio real."
          light
          className="lg:col-span-7"
        />
        <p className="font-mono self-end border-l border-white/18 pl-5 text-xs leading-6 text-white/60 lg:col-span-3 lg:col-start-10">
          Diseño<br />Integración<br />Puesta en marcha
        </p>
      </div>

      <ol className="mt-14 grid gap-px bg-white/16 md:grid-cols-3 lg:mt-20">
        {processSteps.map((step, index) => (
          <li key={step.index} className="bg-navy">
            <Reveal delay={index * 0.06} className="h-full">
              <article className="flex min-h-72 h-full flex-col p-7 md:min-h-80">
                <span className="font-mono text-[0.65rem] text-white/60">{step.index}</span>
                <h3 className="font-display mt-auto text-3xl font-medium leading-none tracking-[-0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/58">{step.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
