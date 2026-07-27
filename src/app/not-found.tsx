import Link from "next/link";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-white py-28">
      <Container className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">404</p>
        <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-medium text-navy">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          La página que buscás no existe o fue movida.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Ir al inicio</Button>
          <Button href="/productos" variant="secondary">
            Ver productos
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Si venías de un enlace antiguo, probá{" "}
          <Link href="/productos" className="text-navy underline">
            el catálogo
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
