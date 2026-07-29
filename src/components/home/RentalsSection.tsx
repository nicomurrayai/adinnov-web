import Image from "next/image";
import Link from "next/link";
import { rentalItems, rentalsIntro } from "@content/rentals";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Section, SectionHeading } from "../ui/Section";

const rentalHrefs: Record<string, string> = {
  "totem-interactivo": "/productos/totem-interactivo",
  "totem-digital": "/productos/totem-digital",
  "poster-led": "/productos/poster-led",
  "tv-soporte": "/productos/samsung-business-tv",
  "terminales-interactivas": "/productos/terminales-interactivas-pantallas-grandes",
  "pantallas-touch": "/productos/pantallas-touch",
  "pantallas-led": "/productos/pantallas-led",
  "atril-digital": "/productos/atril-digital",
};

export function RentalsSection() {
  return (
    <Section id="alquileres" tone="navy" className="editorial-grid overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          eyebrow="Modalidad flexible"
          title="Tecnología lista para tu próximo evento"
          description={rentalsIntro}
          light
          className="lg:col-span-9"
        />
        <div className="lg:col-span-3 lg:flex lg:justify-end">
          <Button
            href="/alquileres"
            variant="secondary"
            className="border-white/30 text-white hover:border-white hover:bg-white hover:text-navy"
          >
            Ver alquileres
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-px bg-white/16 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {rentalItems.slice(0, 4).map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.05} className="h-full">
            <Link
              href={rentalHrefs[item.slug] ?? "/alquileres"}
              className="group flex h-full min-h-[27rem] flex-col bg-navy p-3 transition-colors hover:bg-navy-mid"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/8">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="image-zoom object-cover"
                  />
                ) : null}
                <span className="font-mono absolute left-3 top-3 bg-navy px-2 py-1 text-[0.62rem] text-white/66">
                  A—0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{item.description}</p>
                <span className="mt-auto flex items-center justify-between border-t border-white/18 pt-5 text-xs font-semibold uppercase tracking-[0.08em] text-white/76">
                  Ver equipo
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
