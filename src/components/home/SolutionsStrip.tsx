import Image from "next/image";
import Link from "next/link";
import { productFamilies } from "@content/site";
import { Reveal } from "../ui/Reveal";
import { Section, SectionHeading } from "../ui/Section";

export function SolutionsStrip() {
  return (
    <Section
      id="nuestras-soluciones"
      className="overflow-hidden !py-12 md:!py-16"
    >
      <SectionHeading
        align="center"
        title="Conocé nuestros productos"
        description="Hardware, software e implementación a medida: una solución integral de cartelería digital, disponible en venta o alquiler, con fabricación propia, instalación y soporte post-venta."
        className="[&_h2]:mt-0 [&_p:last-child]:mt-3"
      />
      <p className="font-mono mt-3 text-center text-xs leading-6 text-muted">
        06 familias · 47 líneas de producto
      </p>

      <div className="mt-8 grid gap-px bg-border md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
        {productFamilies.map((family, index) => (
          <Reveal key={family.id} delay={index * 0.045} className="h-full">
            <Link
              href={family.href}
              prefetch={false}
              className="group flex h-full min-h-[29rem] flex-col bg-paper p-4 transition-colors hover:bg-ivory"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-aluminum-light">
                <Image
                  src={family.homeImage}
                  alt={family.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="image-zoom object-cover"
                />
                <span className="font-mono absolute left-3 top-3 bg-paper px-2 py-1 text-[0.62rem] text-signal">
                  {family.index}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
                <h3 className="font-display text-2xl font-medium leading-none tracking-[-0.035em] text-navy">
                  {family.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">{family.description}</p>
                <span className="mt-auto flex items-center justify-between border-t border-border pt-5 text-xs font-semibold uppercase tracking-[0.08em] text-navy">
                  Explorar catálogo
                  <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
