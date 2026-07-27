import { verticals } from "@content/verticals";
import { Section, SectionHeading } from "../ui/Section";

export function Verticals() {
  return (
    <Section id="verticales">
      <SectionHeading
        eyebrow="Verticales"
        title="Soluciones por industria"
        description="Aplicamos cartelería digital e interactiva en entornos de alto tránsito y comunicación crítica."
      />
      <ol className="grid gap-0 border-t border-border md:grid-cols-2">
        {verticals.map((v, i) => (
          <li
            key={v.id}
            className="border-b border-border py-7 md:odd:pr-8 md:even:border-l md:even:pl-8"
          >
            <div className="flex gap-5">
              <span className="font-[family-name:var(--font-outfit)] text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-outfit)] text-lg font-medium text-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
