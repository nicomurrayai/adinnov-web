"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

export function WorkImageCarousel({
  images,
  label,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw",
  className = "",
}: {
  images: string[];
  label: string;
  sizes?: string;
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startScroll: number;
    moved: boolean;
  } | null>(null);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (!viewportRef.current || images.length === 0) return;
      const index = Math.max(0, Math.min(nextIndex, images.length - 1));
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      viewportRef.current.scrollTo({
        left: viewportRef.current.clientWidth * index,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [images.length],
  );

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
      setActiveIndex(Math.max(0, Math.min(index, images.length - 1)));
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
      goTo(images.length - 1);
    }
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const viewport = viewportRef.current;
    if (!viewport || images.length < 2) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: viewport.scrollLeft,
      moved: false,
    };
    viewport.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const viewport = viewportRef.current;
    if (!drag || !viewport || drag.pointerId !== event.pointerId) return;
    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 4) drag.moved = true;
    viewport.scrollLeft = drag.startScroll - delta;
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const viewport = viewportRef.current;
    if (!drag || !viewport || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    if (!drag.moved) return;
    const index = Math.round(viewport.scrollLeft / viewport.clientWidth);
    goTo(index);
  }

  if (images.length === 0) {
    return (
      <div
        className={`relative flex h-full min-h-[8rem] items-end bg-surface ${className}`}
        role="img"
        aria-label={`Imágenes de ${label} no disponibles`}
      >
        <p className="p-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
          Material visual en preparación
        </p>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Imágenes de ${label}`}
      className={`group/carousel relative h-full min-h-0 overflow-hidden bg-surface ${className}`}
    >
      <div
        ref={viewportRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="flex h-full cursor-grab snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth active:cursor-grabbing [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-inset motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, index) => (
          <div
            key={src}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${images.length}`}
            className="relative h-full min-w-full snap-center"
          >
            <Image
              src={src}
              alt={`${label}: implementación ${index + 1}`}
              fill
              sizes={sizes}
              className="object-cover transition-transform duration-700 ease-out group-hover/carousel:scale-[1.03] motion-reduce:transform-none"
            />
          </div>
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="absolute left-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-white/25 bg-navy/70 text-white opacity-0 backdrop-blur-sm transition duration-[var(--duration-fast)] group-hover/carousel:opacity-100 hover:bg-navy disabled:pointer-events-none disabled:opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:opacity-100"
            aria-label="Imagen anterior"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === images.length - 1}
            className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-white/25 bg-navy/70 text-white opacity-0 backdrop-blur-sm transition duration-[var(--duration-fast)] group-hover/carousel:opacity-100 hover:bg-navy disabled:pointer-events-none disabled:opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:opacity-100"
            aria-label="Imagen siguiente"
          >
            <ArrowIcon direction="right" />
          </button>

          <div
            className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-navy/70 via-navy/25 to-transparent px-3 pb-2.5 pt-10"
            role="group"
            aria-label="Posición del carrusel"
          >
            <div className="flex items-center gap-1.5">
              {images.map((src, index) => (
                <button
                  key={`dot-${src}`}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir a imagen ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-1.5 transition-[width,background-color] duration-[var(--duration-fast)] ${
                    activeIndex === index
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/45 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[0.58rem] tracking-[0.12em] text-white/80" aria-hidden="true">
              {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>
        </>
      ) : null}

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Diapositiva {activeIndex + 1} de {images.length}
      </p>
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d={direction === "left" ? "m12.5 4.5-5.5 5.5 5.5 5.5" : "m7.5 4.5 5.5 5.5-5.5 5.5"}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
