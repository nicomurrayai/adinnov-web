"use client";

import { getImageProps } from "next/image";
import { useEffect, useState } from "react";

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

  return (
    <section className="noise-overlay editorial-grid relative flex min-h-[43rem] items-end overflow-hidden bg-navy text-white md:min-h-[48rem] lg:min-h-[100svh]">
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
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,43,.82)_0%,rgba(7,23,43,.46)_65%,rgba(7,23,43,.22)_100%)] md:bg-[linear-gradient(90deg,rgba(7,23,43,.78)_0%,rgba(7,23,43,.42)_58%,rgba(7,23,43,.18)_100%)]" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-6 pb-16 pt-40 sm:px-10 md:pb-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-16 lg:pb-28">
        <div className="max-w-[58rem]">
          <p className="mb-5 text-sm font-medium tracking-[0.02em] text-white/90 md:text-base">Adinnov · Especialistas en cartelería digital</p>
          <h1 className="font-display max-w-[14ch] text-balance text-[clamp(3.3rem,7.7vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.055em]">Tecnología al servicio de tu empresa</h1>
          <p className="mt-7 text-base font-medium text-white/90 md:text-lg">+10 años y 200 casos de éxito</p>
        </div>
      </div>
    </section>
  );
}
