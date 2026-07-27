import type { Metadata } from "next";
import { site } from "@content/site";
import { Container } from "../../components/ui/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nosotros",
  description: site.about.paragraphs[0],
};

export default function NosotrosPage() {
  return (
    <div className="bg-white pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Empresa
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-medium tracking-tight text-navy md:text-5xl">
              {site.about.title}
            </h1>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden bg-surface">
              <Image
                src="/site/nosotros.jpg"
                alt="Equipo y productos Adinnov"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pt-12">
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {site.about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <p className="mt-10 text-sm text-navy">
              Membrillar 74, Ciudad de Buenos Aires · {site.email}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
