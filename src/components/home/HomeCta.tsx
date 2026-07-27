import { site } from "@content/site";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function HomeCta() {
  return (
    <Section tone="navy" className="!py-16 md:!py-20">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-medium tracking-tight text-white md:text-4xl">
            ¿En qué podemos ayudarte?
          </h2>
          <p className="mt-3 max-w-lg text-white/65">
            Contanos tu proyecto y te asesoramos en venta, alquiler o fabricación a medida.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contacto" className="bg-white text-navy hover:bg-surface">
            Contactar
          </Button>
          <Button
            href={site.whatsapp[0].href}
            external
            variant="secondary"
            className="border-white/25 bg-transparent text-white hover:border-white/50 hover:bg-white/10"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
}
