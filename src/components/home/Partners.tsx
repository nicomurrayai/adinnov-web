import Image from "next/image";
import { site } from "@content/site";
import { Container } from "../ui/Container";

export function Partners() {
  return (
    <section className="border-y border-border bg-paper py-8" aria-labelledby="partners-title">
      <Container className="flex flex-col items-center gap-7 text-center">
        <div>
          <p id="partners-title" className="eyebrow text-muted">
            Ecosistema tecnológico
          </p>
          <p className="font-display mt-2 text-xl font-medium tracking-[-0.025em] text-navy">
            Partners y alianzas
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
          {site.partners.map((partner) => (
            <div
              key={partner.name}
              className="opacity-65 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={140}
                height={54}
                sizes="140px"
                className="h-9 w-auto object-contain md:h-10"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
