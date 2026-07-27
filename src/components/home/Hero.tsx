import Image from "next/image";
import { site } from "@content/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="/products/totem-interactivo/01.jpg"
          alt="Tótem interactivo Adinnov"
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
        <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.22em] text-white/55">
          {site.home.eyebrow}
        </p>
        <h1 className="animate-fade-up delay-1 mt-5 max-w-3xl font-[family-name:var(--font-outfit)] text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
          <span className="block text-white/95">Adinnov</span>
          <span className="mt-2 block text-[0.72em] text-white/80 md:mt-3">
            {site.home.headline}
          </span>
        </h1>
        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          {site.home.supporting}
        </p>
        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-3">
          <Button href={site.home.ctaPrimary.href} className="bg-white text-navy hover:bg-surface">
            {site.home.ctaPrimary.label}
          </Button>
          <Button
            href={site.home.ctaSecondary.href}
            variant="secondary"
            className="border-white/25 bg-transparent text-white hover:border-white/50 hover:bg-white/10"
          >
            {site.home.ctaSecondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
