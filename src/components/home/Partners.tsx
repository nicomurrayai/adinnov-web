import Image from "next/image";
import { site } from "@content/site";
import { Section } from "../ui/Section";

export function Partners() {
  return (
    <Section tone="surface" className="!py-14">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-md">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Partners
          </p>
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-medium tracking-tight text-navy md:text-3xl">
            Red de alianzas tecnológicas
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-10">
          {site.partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={100}
                height={40}
                className="h-8 w-auto object-contain md:h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
