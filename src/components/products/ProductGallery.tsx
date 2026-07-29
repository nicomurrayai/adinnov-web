"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { ProductMedia } from "@content/types";

export function ProductGallery({
  media,
  productName,
}: {
  media: ProductMedia[];
  productName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedMedia, setFailedMedia] = useState<Set<number>>(() => new Set());
  const viewportRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const frameRef = useRef<number | null>(null);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (!viewportRef.current || media.length === 0) return;
      const index = Math.max(0, Math.min(nextIndex, media.length - 1));
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      viewportRef.current.scrollTo({
        left: viewportRef.current.clientWidth * index,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [media.length],
  );

  const markMediaFailed = useCallback((index: number) => {
    setFailedMedia((current) => {
      if (current.has(index)) return current;
      const next = new Set(current);
      next.add(index);
      return next;
    });
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) video.pause();
    });
  }, [activeIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (lightboxIndex !== null && !dialog.open) dialog.showModal();
    if (lightboxIndex === null && dialog.open) dialog.close();
  }, [lightboxIndex]);

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  function handleScroll() {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      if (!viewport || viewport.clientWidth === 0) return;
      const index = Math.round(viewport.scrollLeft / viewport.clientWidth);
      setActiveIndex(Math.max(0, Math.min(index, media.length - 1)));
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(media.length - 1);
    }
  }

  if (media.length === 0) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-surface" role="img" aria-label={`Imagen de ${productName} no disponible`}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_48%,var(--border)_49%_51%,transparent_52%)] opacity-60" />
        <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          Material visual en preparación
        </p>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Galería de ${productName}`}
      className="min-w-0"
    >
      <div className="group relative overflow-hidden rounded-sm border border-border bg-surface">
        <div
          ref={viewportRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          className="flex aspect-[4/3] snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
        >
          {media.map((item, index) => (
            <div
              key={`${item.type}-${item.src}`}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${media.length}`}
              className="relative h-full min-w-full snap-center"
            >
              {failedMedia.has(index) ? (
                <MediaFallback label={`No pudimos cargar: ${item.alt}`} />
              ) : item.type === "video" ? (
                <>
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    src={item.src}
                    poster={item.poster}
                    aria-label={item.alt}
                    controls
                    playsInline
                    preload="none"
                    onError={() => markMediaFailed(index)}
                    tabIndex={activeIndex === index ? 0 : -1}
                    className="h-full w-full bg-navy object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    tabIndex={activeIndex === index ? 0 : -1}
                    className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-navy/75 text-white backdrop-blur-sm transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label={`Ampliar video: ${item.alt}`}
                  >
                    <ExpandIcon />
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  tabIndex={activeIndex === index ? 0 : -1}
                  className="relative block h-full w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent"
                  aria-label={`Ampliar imagen: ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    fetchPriority={index === 0 ? "high" : "auto"}
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={() => markMediaFailed(index)}
                    sizes="(max-width: 1024px) 100vw, 62vw"
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transform-none md:p-6"
                  />
                  <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-navy/75 text-white opacity-100 backdrop-blur-sm transition md:opacity-0 md:group-hover:opacity-100">
                    <ExpandIcon />
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>

        {media.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-navy/80 text-white shadow-lg backdrop-blur-sm transition hover:bg-navy disabled:pointer-events-none disabled:opacity-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Imagen anterior"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === media.length - 1}
              className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-navy/80 text-white shadow-lg backdrop-blur-sm transition hover:bg-navy disabled:pointer-events-none disabled:opacity-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Imagen siguiente"
            >
              <ArrowIcon direction="right" />
            </button>
          </>
        ) : null}

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Diapositiva {activeIndex + 1} de {media.length}: {media[activeIndex]?.alt}
        </p>
      </div>

      {media.length > 1 ? (
        <div className="mt-3 flex items-center gap-3">
          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]" role="group" aria-label="Elegir medio">
            {media.map((item, index) => (
              <button
                key={`thumb-${item.type}-${item.src}`}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ver ${item.type === "video" ? "video" : "imagen"} ${index + 1}: ${item.alt}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-sm border bg-surface transition ${
                  activeIndex === index
                    ? "border-accent ring-1 ring-accent"
                    : "border-border opacity-65 hover:opacity-100"
                }`}
              >
                {failedMedia.has(index) ? (
                  <span className="absolute inset-0 grid place-items-center bg-surface text-[10px] font-medium uppercase tracking-[0.08em] text-muted">
                    Sin vista
                  </span>
                ) : item.type === "image" || item.poster ? (
                  <Image
                    src={item.type === "image" ? item.src : item.poster!}
                    alt=""
                    fill
                    sizes="80px"
                    onError={() => markMediaFailed(index)}
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 bg-navy" />
                )}
                {item.type === "video" ? (
                  <span className="absolute inset-0 grid place-items-center bg-navy/35 text-white">
                    <PlayIcon />
                  </span>
                ) : null}
              </button>
            ))}
          </div>
          <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-muted" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
          </span>
        </div>
      ) : null}

      <dialog
        ref={dialogRef}
        onClose={() => setLightboxIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setLightboxIndex(null);
        }}
        aria-label={`Vista ampliada de ${productName}`}
        className="m-auto h-[min(90vh,900px)] w-[min(94vw,1440px)] max-w-none overflow-hidden rounded-sm border border-white/15 bg-navy p-0 text-white shadow-2xl backdrop:bg-navy/90 backdrop:backdrop-blur-sm"
      >
        {lightboxIndex !== null ? (
          <div className="relative h-full w-full">
            {failedMedia.has(lightboxIndex) ? (
              <MediaFallback label={`No pudimos cargar: ${media[lightboxIndex].alt}`} dark />
            ) : media[lightboxIndex].type === "image" ? (
              <Image
                src={media[lightboxIndex].src}
                alt={media[lightboxIndex].alt}
                fill
                sizes="94vw"
                onError={() => markMediaFailed(lightboxIndex)}
                className="object-contain p-4 md:p-10"
              />
            ) : (
              <video
                src={media[lightboxIndex].src}
                poster={media[lightboxIndex].poster}
                aria-label={media[lightboxIndex].alt}
                controls
                autoPlay
                playsInline
                onError={() => markMediaFailed(lightboxIndex)}
                className="h-full w-full object-contain"
              />
            )}
            <p className="absolute bottom-4 left-4 max-w-[calc(100%-6rem)] rounded-sm bg-navy/80 px-3 py-2 text-xs leading-relaxed backdrop-blur-sm md:bottom-6 md:left-6">
              {media[lightboxIndex].alt}
            </p>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-navy/80 text-white backdrop-blur-sm transition hover:bg-white hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-6 md:top-6"
              aria-label="Cerrar vista ampliada"
              autoFocus
            >
              <CloseIcon />
            </button>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}

function MediaFallback({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`absolute inset-0 grid place-items-center p-8 text-center ${
        dark ? "bg-navy text-white" : "bg-surface text-muted"
      }`}
    >
      <div>
        <span aria-hidden="true" className="mx-auto block h-10 w-10 border border-current opacity-45" />
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em]">
          Vista no disponible
        </p>
      </div>
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d={direction === "left" ? "m12.5 4.5-5.5 5.5 5.5 5.5" : "m7.5 4.5 5.5 5.5-5.5 5.5"}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M7.5 3.5h-4v4m9-4h4v4m-13 5v4h4m9-4v4h-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="m7.5 5 7 5-7 5V5Z" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
