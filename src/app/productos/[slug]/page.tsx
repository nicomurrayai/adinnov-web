import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "../../../components/ui/Container";
import { ProductHero } from "../../../components/products/ProductHero";
import { ProductDetails } from "../../../components/products/ProductDetails";
import { ProductCard } from "../../../components/products/ProductCard";
import {
  getProduct,
  getProductSlugs,
  getRelatedProducts,
} from "../../../lib/content";
import { Button } from "../../../components/ui/Button";
import { site } from "@content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto" };
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);

  return (
    <div className="bg-white pb-20 pt-10 md:pb-28 md:pt-14">
      <Container>
        <nav className="mb-8 text-sm text-muted">
          <Link href="/productos" className="hover:text-navy">
            Productos
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">{product.title}</span>
        </nav>

        <ProductHero product={product} />
        <ProductDetails product={product} />

        <div className="mt-10 border-t border-border pt-12">
          <div className="flex flex-col gap-6 rounded-none bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-medium text-navy">
                ¿Interesado en {product.title}?
              </h2>
              <p className="mt-2 text-sm text-muted">
                Contáctanos para obtener más información y cotización personalizada.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contacto">Cotizar</Button>
              <Button href={site.whatsapp[0].href} external variant="secondary">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mt-16">
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-medium text-navy">
              Productos relacionados
            </h2>
            <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
