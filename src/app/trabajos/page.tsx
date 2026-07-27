import type { Metadata } from "next";
import Image from "next/image";
import { works, worksIntro } from "@content/works";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";

export const metadata: Metadata = {
  title: "Nuestros trabajos",
  description: worksIntro,
};

export default function TrabajosPage() {
  return (
    <div className="bg-white pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Portfolio
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-medium tracking-tight text-navy md:text-5xl">
          Nuestros trabajos
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {worksIntro}
        </p>

        <div className="mt-14 grid gap-12 md:gap-16">
          {works.map((work, i) => (
            <article
              key={work.title}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                {work.image ? (
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : null}
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-medium text-navy md:text-3xl">
                  {work.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {work.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <Button href="/contacto">Cotizar un proyecto a medida</Button>
        </div>
      </Container>
    </div>
  );
}
