import Link from "next/link";
import { solutionHighlights } from "@content/categories";
import { Section, SectionHeading } from "../ui/Section";

export function SolutionsStrip() {
  return (
    <Section id="nuestras-soluciones">
      <SectionHeading
        eyebrow="Nuestras soluciones"
        title="Tecnología para comunicar, interactuar y convertir"
        description="Catálogo completo de cartelería digital: fabricación propia, marcas líderes y software a medida."
      />
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {solutionHighlights.map((item, i) => (
          <Link
            key={item.id}
            href={item.href}
            className="group border-t border-border pt-6 transition-colors hover:border-navy"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-medium tracking-tight text-navy group-hover:text-accent">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            <span className="mt-5 inline-block text-sm font-medium text-navy underline-offset-4 group-hover:underline">
              Ver categoría
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
