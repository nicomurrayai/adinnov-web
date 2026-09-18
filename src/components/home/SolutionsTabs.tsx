"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Container } from "../ui/Container";

const solutions = [
  {
    id: "totems",
    tab: "Tótems digitales e interactivos",
    title: "Tótems digitales e interactivos",
    description:
      "Tótem interactivo con pantallas táctiles IR de 32\" a 75\" (Full HD/4K), estructura ultradelgada (10-12 cm) y múltiples opciones de integración para aplicaciones interactivas y cartelería digital.",
    href: "/productos/totem-interactivo",
    image: "/products/totem-interactivo/01.jpg",
    alt: "Persona usando la pantalla táctil de un tótem interactivo",
  },
  {
    id: "pizarras",
    tab: "Pizarras interactivas",
    title: "Pizarras interactivas",
    description:
      "Solución completa de pantallas táctiles y pizarras digitales interactivas con tecnología infrarroja o capacitiva para educación, negocios y entornos colaborativos.",
    href: "/productos/pantallas-y-pizarras-interactivas",
    image: "/products/pantallas-y-pizarras-interactivas/03.jpg",
    alt: "Dos profesionales trabajando sobre un plano en una pizarra interactiva",
  },
  {
    id: "pantallas-led",
    tab: "Pantallas de LED",
    title: "Pantallas de LED",
    description:
      "Pantallas que usan diodos emisores de luz como píxeles para formar la imagen. Son muy brillantes, tienen gran contraste y se ven con claridad incluso en exteriores, bajo luz solar directa.",
    href: "/productos/pantallas-led",
    image: "/products/pantallas-led/02.avif",
    alt: "Pantalla LED de gran formato en un auditorio",
  },
  {
    id: "productos-led",
    tab: "Productos LED",
    title: "Productos LED",
    description:
      "Nuevos Poster LED que revolucionan el uso de los espacios. Descubrí una nueva forma de aprovecharlos para emitir contenido audiovisual con la tecnología Poster LED.",
    href: "/productos/poster-led",
    image: "/products/poster-led/04.jpg",
    alt: "Posters LED verticales mostrando contenido de moda",
  },
  {
    id: "kioscos",
    tab: "Kioscos de autogestión",
    title: "Kioscos de autogestión",
    description:
      "Kioscos para locales gastronómicos que permiten a los clientes hacer sus pedidos y pagar sin pasar por el mostrador ni interactuar con un mozo o cajero.",
    href: "/productos/kiosco-autogestion-gastronomia",
    image: "/products/kiosco-autogestion-gastronomia/01.jpg",
    alt: "Clientes haciendo pedidos en kioscos de autogestión de un local gastronómico",
  },
] as const;

export function SolutionsTabs() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const next = (index + solutions.length) % solutions.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: solutions.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    focusTab(keys[event.key]);
  };

  return (
    <section
      id="nuestras-soluciones"
      aria-labelledby={`${baseId}-heading`}
      className="bg-paper py-16 text-navy md:py-24"
    >
      <Container>
        <header className="text-center">
          <p className="inline-flex rounded-full bg-signal px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.02em] text-white">
            Nuestras soluciones
          </p>
          <h2
            id={`${baseId}-heading`}
            className="font-display mx-auto mt-6 max-w-3xl text-balance text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-tight tracking-[-0.02em]"
          >
            Integramos tecnología para estar a la vanguardia digital
          </h2>
        </header>

        <div
          role="tablist"
          aria-label="Soluciones"
          onKeyDown={onKeyDown}
          className="mt-10 flex gap-1 overflow-x-auto rounded-[var(--radius-md)] bg-signal-pale p-1 [scrollbar-width:none] md:mt-12 [&::-webkit-scrollbar]:hidden"
        >
          {solutions.map((solution, index) => {
            const selected = index === active;
            return (
              <button
                key={solution.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${solution.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${solution.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={`min-h-9 shrink-0 whitespace-nowrap rounded-[var(--radius-sm)] px-4 text-[0.8rem] font-medium transition-[background-color,color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal md:flex-1 ${
                  selected
                    ? "bg-white text-navy shadow-[0_1px_4px_rgba(7,23,43,0.12)]"
                    : "text-navy/80 hover:bg-white/60 hover:text-navy"
                }`}
              >
                {solution.tab}
              </button>
            );
          })}
        </div>

        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            role="tabpanel"
            id={`${baseId}-panel-${solution.id}`}
            aria-labelledby={`${baseId}-tab-${solution.id}`}
            hidden={index !== active}
            className="mt-2 overflow-hidden rounded-[var(--radius-lg)] bg-signal-pale"
          >
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center px-6 py-10 md:px-8 md:py-16 lg:px-10">
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold leading-[1.1] tracking-[-0.035em]">
                  {solution.title}
                </h3>
                <p className="mt-6 max-w-[28rem] text-base font-medium leading-7 text-muted md:mt-10 md:text-lg md:leading-8">
                  {solution.description}
                </p>
                <Link
                  href={solution.href}
                  prefetch={false}
                  className="mt-8 inline-flex min-h-10 w-fit items-center rounded-full bg-navy px-6 text-[0.8rem] font-semibold uppercase tracking-[0.02em] text-white transition-colors duration-200 hover:bg-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal md:mt-12"
                >
                  Ver solución
                </Link>
              </div>
              <div className="flex items-center justify-center bg-[linear-gradient(180deg,var(--signal-pale)_0%,#b9c9f5_55%,#8fa9ee_100%)] px-6 py-10 md:px-10 md:py-16">
                <div className="relative aspect-[3/2] w-full max-w-[28rem] overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-[var(--shadow-card)]">
                  <Image
                    src={solution.image}
                    alt={solution.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 28rem"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
