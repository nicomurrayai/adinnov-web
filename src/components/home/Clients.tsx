import Image from "next/image";
import Link from "next/link";
import { clients, clientsIntro } from "@content/clients";
import { Reveal } from "../ui/Reveal";
import { Section, SectionHeading } from "../ui/Section";

export function Clients() {
  return (
    <Section tone="surface" id="clientes">
      <div className="grid gap-12 lg:grid-cols-12">
        <SectionHeading
          eyebrow="Experiencia compartida"
          title="Organizaciones que ya eligieron Adinnov"
          description={clientsIntro}
          className="lg:col-span-6"
        />
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
            {clients.map((client, index) => (
              <Reveal key={client.name} delay={(index % 3) * 0.035}>
                <div className="flex min-h-24 items-center justify-center bg-ivory px-4 text-center">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={180}
                    height={80}
                    sizes="144px"
                    className="h-10 w-full max-w-36 object-contain grayscale opacity-70 transition-[filter,opacity] duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/clientes"
            className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.09em] text-navy"
          >
            Conocer los sectores
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
