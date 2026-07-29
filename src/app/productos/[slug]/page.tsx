import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@content/site";
import type { ProductFamilyId } from "@content/types";
import { Container } from "@/components/ui/Container";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductDetails } from "@/components/products/ProductDetails";
import { ProductCard } from "@/components/products/ProductCard";
import { StickyProductActions } from "@/components/products/StickyProductActions";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  getCategoryLabel,
  getProduct,
  getProductSlugs,
  getRelatedProducts,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

const relatedProjects: Record<
  ProductFamilyId,
  { title: string; description: string; image: string; href: string }
> = {
  "totems-terminales": {
    title: "Tótems en espacios reales",
    description: "Una selección de equipos digitales e interactivos implementados para atención, información y experiencias de marca.",
    image: "/site/works/totems/01.jpg",
    href: "/trabajos#totems",
  },
  "pantallas-profesionales": {
    title: "Videowalls e integración multipantalla",
    description: "Configuraciones audiovisuales aplicadas a comunicación corporativa, monitoreo y espacios de atención.",
    image: "/site/works/videowalls/01.jpg",
    href: "/trabajos#videowalls",
  },
  led: {
    title: "LED en diferentes escalas",
    description: "Implementaciones reales de tecnología LED para escenarios, espacios comerciales y comunicación de gran formato.",
    image: "/site/works/led/01.jpg",
    href: "/trabajos#led",
  },
  "pizarras-interaccion": {
    title: "Pantallas en entornos corporativos",
    description: "Proyectos con superficies profesionales para presentar, colaborar y comunicar dentro de espacios de trabajo.",
    image: "/site/works/tvs/01.jpg",
    href: "/trabajos#tvs",
  },
  "kioscos-autogestion": {
    title: "Terminales en contexto",
    description: "Equipos aplicados a experiencias de autogestión, orientación e interacción en puntos de atención.",
    image: "/site/works/totems/02.jpg",
    href: "/trabajos#totems",
  },
  "software-servicios": {
    title: "Sistemas visuales integrados",
    description: "Implementaciones donde hardware, contenidos y operación remota trabajan como una única solución.",
    image: "/site/works/videowalls/02.jpg",
    href: "/trabajos#videowalls",
  },
};

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto no encontrado" };

  const shareMedia =
    product.media.find((item) => item.type === "image") ??
    product.media.find((item) => item.type === "video" && item.poster);
  const image = shareMedia?.type === "video" ? shareMedia.poster : shareMedia?.src;
  const title = product.seo.title || product.title;
  const description = product.seo.description || product.description;
  const canonical = `/productos/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: image ? [{ url: image, alt: shareMedia?.alt ?? product.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);
  const relatedProject = relatedProjects[product.family];
  const canonicalUrl = `${site.url}/productos/${product.slug}`;
  const images = product.media
    .map((item) => (item.type === "image" ? item.src : item.poster))
    .filter((src): src is string => Boolean(src))
    .map((src) => new URL(src, site.url).toString());

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    url: canonicalUrl,
    image: images,
    category: getCategoryLabel(product.category),
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Productos",
        item: `${site.url}/productos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd =
    product.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="bg-white pb-36 pt-24 md:pt-28 lg:pb-28">
      <StructuredData
        data={faqJsonLd ? [productJsonLd, breadcrumbJsonLd, faqJsonLd] : [productJsonLd, breadcrumbJsonLd]}
      />

      <Container>
        <nav aria-label="Migas de pan" className="mb-8 overflow-x-auto pb-1">
          <ol className="flex min-w-max items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">/</li>
            <li>
              <Link href="/productos" className="transition-colors hover:text-accent">
                Productos
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">/</li>
            <li aria-current="page" className="max-w-[55vw] truncate text-navy">
              {product.title}
            </li>
          </ol>
        </nav>

        <ProductHero product={product} />

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
          <ProductDetails product={product} />
          <aside aria-label="Opciones para cotizar">
            <StickyProductActions product={product} />
          </aside>
        </div>

        <section
          className="mt-16 border-t border-border pt-14 md:mt-24 md:pt-20"
          aria-labelledby="related-project"
        >
          <div className="grid overflow-hidden bg-navy text-white lg:grid-cols-12">
            <div className="relative min-h-72 lg:col-span-7 lg:min-h-[30rem]">
              <Image
                src={relatedProject.image}
                alt={`${relatedProject.title}: implementación real de Adinnov`}
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-between p-7 md:p-10 lg:col-span-5 lg:p-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                  Proyecto relacionado
                </p>
                <h2
                  id="related-project"
                  className="mt-4 font-display text-4xl font-medium leading-[0.95] tracking-[-0.04em]"
                >
                  {relatedProject.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/68">
                  {relatedProject.description}
                </p>
              </div>
              <Link
                href={relatedProject.href}
                className="mt-10 inline-flex min-h-11 items-center justify-between border-t border-white/22 pt-5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:text-signal"
              >
                Ver implementaciones reales
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="mt-16 border-t border-border pt-14 md:mt-24 md:pt-20" aria-labelledby="related-products">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  Continuar explorando
                </p>
                <h2 id="related-products" className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-medium tracking-tight text-navy md:text-4xl">
                  Productos relacionados
                </h2>
              </div>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline-offset-4 hover:text-accent hover:underline"
              >
                Ver catálogo completo <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} product={relatedProduct} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </div>
  );
}
