"use client";

import { getImageProps } from "next/image";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@content/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const posterCommon = {
  alt: "Persona utilizando una solución digital interactiva",
  fill: true,
  sizes: "100vw",
  quality: 84,
} as const;

const { props: desktopPosterProps } = getImageProps({
  ...posterCommon,
  src: "/videos/hero-adinnov-poster.webp",
  fetchPriority: "high",
});

const {
  props: { srcSet: mobilePosterSrcSet },
} = getImageProps({
  ...posterCommon,
  src: "/videos/hero-adinnov-poster-mobile.webp",
});

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    let timer: number | undefined;
    const update = () => {
      if (timer) window.clearTimeout(timer);
      if (media.matches || connection?.saveData) {
        setVideoEnabled(false);
        return;
      }
      timer = window.setTimeout(() => setVideoEnabled(true), 1_200);
    };
    update();
    media.addEventListener("change", update);
    return () => {
      if (timer) window.clearTimeout(timer);
      media.removeEventListener("change", update);
    };
  }, []);

  const enter = { opacity: 0, y: 26 };

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="noise-overlay editorial-grid relative min-h-[50rem] overflow-hidden bg-navy text-white md:min-h-[52rem] lg:min-h-[100svh]">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 767px)" srcSet={mobilePosterSrcSet} />
            <img
              {...desktopPosterProps}
              alt="Persona utilizando una solución digital interactiva"
              className="object-cover object-[62%_center] md:object-center"
            />
          </picture>
          {videoEnabled ? (
            <video
              className={`absolute inset-0 h-full w-full object-cover object-[62%_center] transition-opacity duration-700 md:object-center ${videoReady ? "opacity-100" : "opacity-0"}`}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/videos/hero-adinnov-poster.webp"
              aria-hidden="true"
              tabIndex={-1}
              onCanPlay={() => setVideoReady(true)}
            >
              <source
                media="(max-width: 767px)"
                src="/videos/hero-adinnov-mobile.mp4"
                type="video/mp4"
              />
              <source src="/videos/hero-adinnov-desktop.mp4" type="video/mp4" />
            </video>
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,43,.96)_0%,rgba(7,23,43,.82)_46%,rgba(7,23,43,.18)_82%),linear-gradient(0deg,rgba(7,23,43,.9)_0%,transparent_52%)]" />
          <div className="absolute inset-y-0 left-[8.33%] hidden w-px bg-white/10 lg:block" />
          <div className="absolute inset-y-0 right-[8.33%] hidden w-px bg-white/10 lg:block" />
        </div>

        <Container className="relative flex min-h-[50rem] flex-col justify-end pb-20 pt-32 md:min-h-[52rem] md:pb-12 lg:min-h-[100svh] lg:pb-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9 xl:col-span-8">
              <m.p
                className="motion-hero eyebrow text-white/58"
                initial={enter}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {site.home.eyebrow}
              </m.p>
              <m.h1
                className="motion-hero font-display mt-6 max-w-5xl text-balance text-[clamp(3.45rem,7.3vw,7.7rem)] font-medium leading-[0.84] tracking-[-0.058em] text-white"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.78, delay: reducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                Tecnología que transforma espacios y conecta experiencias
              </m.h1>
            </div>

            <m.aside
              className="motion-hero hidden border-l border-white/18 pl-6 lg:col-span-3 lg:block xl:col-span-4 xl:col-start-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.35 }}
            >
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-white/60">
                Sistema Adinnov
              </p>
              <p className="font-display mt-4 max-w-xs text-2xl font-medium leading-tight tracking-[-0.03em]">
                Hardware + software + implementación
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#36d27e]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/52">
                  Soluciones activas
                </span>
              </div>
            </m.aside>
          </div>

          <m.div
            className="motion-hero mt-12 grid gap-7 border-t border-white/20 pt-7 md:grid-cols-12 md:items-center lg:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.28 }}
          >
            <p className="max-w-2xl text-base leading-7 text-white/70 md:col-span-7 md:text-lg md:leading-8">
              {site.home.supporting}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <Button href={site.home.ctaPrimary.href}>{site.home.ctaPrimary.label}</Button>
              <Button
                href={site.home.ctaSecondary.href}
                variant="secondary"
                className="border-white/32 text-white hover:border-white hover:bg-white hover:text-navy"
              >
                {site.home.ctaSecondary.label}
              </Button>
            </div>
          </m.div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pr-16 pt-4 sm:pr-0">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/60">
              Venta · Alquiler · Integración
            </p>
            <a
              href="#credenciales"
              className="font-mono inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.12em] text-white/60 hover:text-white"
            >
              Descubrir
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Container>
      </section>
    </LazyMotion>
  );
}
