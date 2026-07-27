import Image from "next/image";
import { site } from "@content/site";
import { Button } from "../ui/Button";
import { Section, SectionHeading } from "../ui/Section";

export function CustomWork() {
  return (
    <Section id="medida">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading
            eyebrow="Soluciones a medida"
            title={site.customWork.title}
            description={site.customWork.description}
          />
          <Button href="/trabajos">Ver trabajos</Button>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <Image
            src="/products/pantallas-led/01.jpg"
            alt="Proyecto de cartelería digital a medida"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
