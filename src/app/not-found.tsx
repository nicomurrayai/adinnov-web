import Link from "next/link";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export default function NotFound() {
  return (
    <section className="paper-grid relative flex min-h-[78vh] items-center overflow-hidden bg-ivory pb-20 pt-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-signal">Error 404</p>
            <h1 className="font-display mt-6 text-balance text-[clamp(4.5rem,12vw,12rem)] font-medium leading-[0.78] tracking-[-0.07em] text-navy">
              Señal fuera de alcance.
            </h1>
          </div>
          <div className="border-t border-border pt-6 lg:col-span-4">
            <p className="text-lg leading-8 text-muted">
              La página que buscás no existe o cambió de ubicación. Volvamos a una ruta activa.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/">Ir al inicio</Button>
              <Button href="/productos" variant="secondary">
                Ver productos
              </Button>
            </div>
            <p className="mt-7 text-sm text-muted">
              También podés recorrer nuestras{" "}
              <Link href="/soluciones" className="font-semibold text-navy underline decoration-signal decoration-2">
                soluciones
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
