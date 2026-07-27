import Link from "next/link";
import { rentalItems, rentalsIntro } from "@content/rentals";
import { Button } from "../ui/Button";
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
    <Section id="alquileres" tone="navy">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Alquileres"
          title="Equipamiento para eventos"
          description={rentalsIntro}
          light
        />
        <Button
          href="/alquileres"
          className="shrink-0 bg-white text-navy hover:bg-surface"
        >
          Ver alquileres
        </Button>
      </div>
      <div className="mt-4 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
        {rentalItems.map((item) => (
          <Link
            key={item.slug}
            href={rentalHrefs[item.slug] ?? "/alquileres"}
            className="bg-navy p-6 transition-colors hover:bg-navy-mid"
          >
            <h3 className="font-[family-name:var(--font-outfit)] text-lg font-medium text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
