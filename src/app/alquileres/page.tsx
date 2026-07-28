import type { Metadata } from "next";
import Link from "next/link";
import { rentalItems, rentalsIntro } from "@content/rentals";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { site } from "@content/site";

export const metadata: Metadata = {
  title: "Alquileres",
  description: rentalsIntro,
};

const hrefs: Record<string, string> = {
  "totem-interactivo": "/productos/totem-interactivo",
  "totem-digital": "/productos/totem-digital",
  "poster-led": "/productos/poster-led",
  "tv-soporte": "/productos/samsung-business-tv",
  "terminales-interactivas": "/productos/terminales-interactivas-pantallas-grandes",
  "pantallas-touch": "/productos/pantallas-touch",
  "pantallas-led": "/productos/pantallas-led",
  "atril-digital": "/productos/atril-digital",
};

export default function AlquileresPage() {
  return (
    <div className="bg-white pb-20 pt-24 md:pb-28 md:pt-28">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Alquileres
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-outfit)] text-4xl font-medium tracking-tight text-navy md:text-5xl">
          Equipamiento para eventos
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {rentalsIntro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contacto">Solicitar alquiler</Button>
          <Button href={site.whatsapp[0].href} external variant="secondary">
            WhatsApp
          </Button>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {rentalItems.map((item) => (
            <Link
              key={item.slug}
              href={hrefs[item.slug] ?? "/contacto"}
              className="bg-white p-8 transition-colors hover:bg-surface"
            >
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-medium text-navy">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
