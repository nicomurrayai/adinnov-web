import { verticals } from "@content/verticals";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Section, SectionHeading } from "../ui/Section";

export function Verticals() {
  return (
    <Section id="verticales">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          eyebrow="Sectores"
          title="Pensado para el contexto, no sólo para la pantalla"
          description="Cada entorno tiene su propio ritmo, audiencia y nivel de exigencia. La solución se define a partir de ese contexto."
          className="lg:col-span-9"
        />
        <div className="lg:col-span-3 lg:flex lg:justify-end">
          <Button href="/soluciones" variant="secondary">
            Ver soluciones
          </Button>
        </div>
      </div>

      <ol className="mt-14 border-t border-border lg:mt-20">
        {verticals.map((vertical, index) => (
          <li key={vertical.id} className="border-b border-border">
            <Reveal>
              <div className="group grid gap-4 py-6 transition-colors md:grid-cols-12 md:items-center md:py-7">
                <span className="font-mono text-[0.64rem] text-signal md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-navy md:col-span-4 md:text-3xl">
                  {vertical.title}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-muted md:col-span-6">{vertical.description}</p>
                <span
                  aria-hidden="true"
                  className="hidden text-right text-xl text-navy/35 transition-transform group-hover:translate-x-1 md:col-span-1 md:block"
                >
                  →
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
