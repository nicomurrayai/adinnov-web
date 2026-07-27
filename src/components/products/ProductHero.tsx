import Image from "next/image";
import type { Product } from "@content/types";
import { getCategoryLabel } from "../../lib/content";
import { Button } from "../ui/Button";
import { site } from "@content/site";

export function ProductHero({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <div className="grid gap-10 border-b border-border pb-14 md:grid-cols-2 md:gap-16 md:pb-20">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface md:aspect-[4/3]">
        {image ? (
          <Image
            src={image}
            alt={product.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : null}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {getCategoryLabel(product.category)}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-medium tracking-tight text-navy md:text-5xl">
          {product.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {product.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contacto">Solicitar cotización</Button>
          <Button href={site.whatsapp[0].href} external variant="secondary">
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
