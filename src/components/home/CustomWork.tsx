import Image from "next/image";
import Link from "next/link";
import { works } from "@content/works";
import { site } from "@content/site";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Section, SectionHeading } from "../ui/Section";

export function CustomWork() {
  const selectedWorks = [works[2], works[0], works[4]].filter(Boolean);

  return (
    <Section id="trabajos">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          eyebrow="Implementaciones"
          title={site.customWork.title}
          description={site.customWork.description}
          className="lg:col-span-9"
        />
        <div className="lg:col-span-3 lg:flex lg:justify-end">
          <Button href="/trabajos" variant="secondary">
            Ver trabajos
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12">
        {selectedWorks.map((work, index) => (
          <Reveal
            key={work.title}
            delay={index * 0.06}
            className={index === 0 ? "lg:col-span-7" : "lg:col-span-5"}
          >
            <Link href="/trabajos" className="group block">
              <article>
                <div
                  className={`relative overflow-hidden bg-surface ${index === 0 ? "aspect-[16/10]" : "aspect-[16/8]"}`}
                >
                  {work.image ? (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 42vw"}
                      className="image-zoom object-cover"
                    />
                  ) : null}
                  <span className="font-mono absolute left-4 top-4 bg-paper px-2 py-1 text-[0.62rem] text-signal">
                    T—0{index + 1}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-5 border-t border-navy pt-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-navy">
                      {work.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{work.description}</p>
                  </div>
                  <span aria-hidden="true" className="text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
