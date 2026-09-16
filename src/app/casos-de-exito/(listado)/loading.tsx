import { Container } from "@/components/ui/Container";

/** Esqueleto del listado. Vive en el grupo (listado) para no envolver en Suspense la página
 * de cada caso: ahí un Suspense convertiría los redirects 308 de slugs viejos en redirects por JS. */
export default function Loading() {
  return (
    <section className="bg-paper py-[var(--space-section)]" role="status" aria-label="Cargando casos de éxito">
      <Container>
        <div className="mx-auto flex max-w-3xl animate-pulse flex-col items-center motion-reduce:animate-none">
          <div className="h-12 w-2/3 bg-surface-2" />
          <div className="mt-6 h-4 w-full bg-surface-2" />
          <div className="mt-3 h-4 w-4/5 bg-surface-2" />
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="animate-pulse border border-border bg-paper motion-reduce:animate-none">
              <div className="aspect-[16/10] bg-surface" />
              <div className="space-y-3 p-6">
                <div className="h-3 w-1/3 bg-surface-2" />
                <div className="h-6 w-4/5 bg-surface-2" />
                <div className="h-4 w-full bg-surface-2" />
                <div className="h-4 w-2/3 bg-surface-2" />
              </div>
            </div>
          ))}
        </div>
        <span className="sr-only">Cargando casos de éxito…</span>
      </Container>
    </section>
  );
}
