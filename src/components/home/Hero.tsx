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
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,43,.45)_0%,rgba(7,23,43,.55)_40%,rgba(7,23,43,.92)_100%)]" />
        <div className="absolute inset-y-0 left-[8.33%] hidden w-px bg-white/10 lg:block" />
        <div className="absolute inset-y-0 right-[8.33%] hidden w-px bg-white/10 lg:block" />
      </div>
    </section>
  );
}
