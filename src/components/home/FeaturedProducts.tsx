import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Section, SectionHeading } from "../ui/Section";

const featured = [
  {
    index: "P—01",
    title: "Tótem digital",
    description: "Comunicación vertical para videos, imágenes y campañas en espacios de circulación.",
    href: "/productos/totem-digital",
    image: "/products/totem-digital/01.jpg",
  },
  {
    index: "P—02",
    title: "Kiosco de autogestión",
    description: "Una interfaz física para ordenar, consultar, registrarse o gestionar un servicio.",
    href: "/productos/kiosco-autogestion-gastronomia",
    image: "/products/kiosco-autogestion-gastronomia/01.jpg",
  },
  {
    index: "P—03",
    title: "Pantalla touch",
    description: "Interacción de gran formato para mapas, catálogos, presentaciones y contenidos.",
    href: "/productos/pantallas-touch",
    image: "/products/pantallas-touch/04.jpeg",
  },
] as const;

export function FeaturedProducts() {
  return (
    <Section tone="surface">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          eyebrow="Selección editorial"
          title="Productos que activan el espacio"
          description="Tres puntos de partida para proyectos de comunicación, interacción y autogestión."
          className="lg:col-span-9"
        />
        <div className="lg:col-span-3 lg:flex lg:justify-end">
          <Button href="/productos" variant="secondary">
            Ver catálogo
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12">
        {featured.map((product, index) => (
          <Reveal
            key={product.href}
            delay={index * 0.06}
            className={index === 0 ? "lg:col-span-6" : "lg:col-span-3"}
          >
            <Link href={product.href} className="group block h-full">
              <article className="flex h-full flex-col">
                <div
                  className={`relative overflow-hidden bg-white ${index === 0 ? "aspect-[4/3]" : "aspect-[3/4]"}`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
                    className="image-zoom object-cover"
                  />
                </div>
                <div className="border-t border-navy pt-5">
                  <p className="font-mono text-[0.62rem] text-signal">{product.index}</p>
                  <h3 className="font-display mt-3 text-2xl font-medium leading-none tracking-[-0.035em] text-navy">
                    {product.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted">{product.description}</p>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
