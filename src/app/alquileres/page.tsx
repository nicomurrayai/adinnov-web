import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { rentalItems, rentalsIntro, rentalServices } from "@content/rentals";
import { site } from "@content/site";
import { Button } from "../../components/ui/Button";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { Section, SectionHeading } from "../../components/ui/Section";

export const metadata: Metadata = {
  title: "Alquiler de pantallas, tótems y LED",
  description: rentalsIntro,
  alternates: { canonical: "/alquileres" },
};

const rentalProducts: Record<string, { href: string; productSlug: string }> = {
  "totem-interactivo": {
    href: "/productos/totem-interactivo",
    productSlug: "totem-interactivo",
  },
  "totem-digital": {
    href: "/productos/totem-digital",
    productSlug: "totem-digital",
  },
  "poster-led": { href: "/productos/poster-led", productSlug: "poster-led" },
  "tv-soporte": {
    href: "/productos/samsung-business-tv",
    productSlug: "samsung-business-tv",
  },
  "terminales-interactivas": {
    href: "/productos/terminales-interactivas-pantallas-grandes",
    productSlug: "terminales-interactivas-pantallas-grandes",
  },
  "pantallas-touch": {
    href: "/productos/pantallas-touch",
    productSlug: "pantallas-touch",
  },
  "pantallas-led": {
    href: "/productos/pantallas-led",
    productSlug: "pantallas-led",
  },
  "atril-digital": {
    href: "/productos/atril-digital",
    productSlug: "atril-digital",
  },
};

const rentalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Alquiler de equipamiento de cartelería digital",
  description: rentalsIntro,
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: { "@type": "Country", name: "Argentina" },
};

export default function AlquileresPage() {
  return (
    <>
      <PageHero
        eyebrow="Alquileres"
        title="Equipos listos para entrar en escena"
        description={rentalsIntro}
        index="02"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contacto?intent=alquiler">Solicitar alquiler</Button>
          <Button href={site.whatsapp[0].href} external variant="secondary">
            WhatsApp
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow="Ocho equipos"
            title="Elegí el formato. Nosotros coordinamos el resto."
            description="La disponibilidad, cantidad y configuración se confirman según fechas, ubicación y necesidades del evento."
            className="lg:col-span-9"
          />
          <p className="font-mono border-l border-border pl-5 text-xs leading-6 text-muted lg:col-span-3">
            Venta + alquiler<br />según cada equipo
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {rentalItems.map((item, index) => {
            const product = rentalProducts[item.slug];
            return (
              <Reveal key={item.slug} delay={(index % 4) * 0.04} className="h-full">
                <article className="group flex h-full min-h-[31rem] flex-col bg-paper p-3 transition-colors hover:bg-ivory">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="image-zoom object-cover"
                      />
                    ) : null}
                    <span className="font-mono absolute left-3 top-3 bg-paper px-2 py-1 text-[0.62rem] text-signal">
                      A—{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                    <h2 className="font-display text-2xl font-medium tracking-[-0.035em] text-navy">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5 text-xs font-semibold uppercase tracking-[0.07em]">
                      <Link href={product?.href ?? "/productos"} className="text-navy hover:text-signal">
                        Ver equipo
                      </Link>
                      <Link
                        href={`/contacto?intent=alquiler&product=${product?.productSlug ?? item.slug}`}
                        className="text-signal hover:text-signal-dark"
                      >
                        Cotizar
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="navy" className="editorial-grid">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeading
            eyebrow="Implementación"
            title="Un servicio que acompaña al equipo"
            description="El alcance final se define en cada cotización, de acuerdo con el lugar y la dinámica del evento."
            light
            className="lg:col-span-6"
          />
          <ol className="grid gap-px bg-white/16 sm:grid-cols-2 lg:col-span-6">
            {rentalServices.map((service, index) => (
              <li key={service} className="flex min-h-36 flex-col justify-between bg-navy p-5">
                <span className="font-mono text-[0.62rem] text-white/60">0{index + 1}</span>
                <p className="font-display text-xl font-medium leading-tight tracking-[-0.025em] text-white">
                  {service}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalSchema) }}
      />
    </>
  );
}
