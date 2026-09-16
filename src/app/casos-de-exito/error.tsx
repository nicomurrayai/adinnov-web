"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function CaseStudiesError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="paper-grid relative flex min-h-[70vh] items-center overflow-hidden bg-ivory pb-20 pt-36">
      <Container>
        <div className="max-w-2xl" role="alert">
          <p className="eyebrow text-signal">Error temporal</p>
          <h1 className="font-display mt-6 text-balance text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-navy">
            No pudimos cargar los casos de éxito.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Puede ser un problema momentáneo de conexión. Probá de nuevo en unos segundos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-sm)] border border-signal bg-signal px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.09em] text-white transition-colors hover:border-signal-dark hover:bg-signal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Reintentar
            </button>
            <Button href="/contacto" variant="secondary">
              Ir a contacto
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
