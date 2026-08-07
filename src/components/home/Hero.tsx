"use client";

import { getImageProps } from "next/image";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@content/site";
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,.45)_0%,rgba(7,23,43,.55)_40%,rgba(7,23,43,.92)_100%)]" />
          <div className="absolute inset-y-0 left-[8.33%] hidden w-px bg-white/10 lg:block" />
          <div className="absolute inset-y-0 right-[8.33%] hidden w-px bg-white/10 lg:block" />
        </div>

        <Container className="relative flex min-h-[50rem] flex-col items-center justify-end pb-20 pt-32 text-center md:min-h-[52rem] md:pb-12 lg:min-h-[100svh] lg:pb-10">
          <div className="mx-auto w-full max-w-5xl">
            <m.p
              className="motion-hero eyebrow text-white/58"
              initial={enter}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.home.eyebrow}
            </m.p>
            <m.h1
              className="motion-hero font-display mt-6 text-balance text-[clamp(2.4rem,5.2vw,4.75rem)] font-medium leading-[0.9] tracking-[-0.045em] text-white"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: reducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Tecnología que convierte espacios en experiencias.
            </m.h1>
          </div>

          <m.div
            className="motion-hero mt-12 w-full max-w-4xl border-t border-white/20 pt-7 lg:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.28 }}
          >
            <p className="text-base leading-7 text-white/70 md:text-lg md:leading-8">
              Fabricamos, alquilamos y vendemos{" "}
              <strong className="font-bold text-white">
                tótems, pantallas LED, kioscos, sistemas interactivos y software
              </strong>{" "}
              para proyectos corporativos en toda la Argentina.
            </p>
          </m.div>
        </Container>
      </section>
    </LazyMotion>
  );
}
