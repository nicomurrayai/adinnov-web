import type { Metadata } from "next";
import { clientsIntro } from "@content/clients";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";

export const metadata: Metadata = {
  title: "Nuestros clientes",
  description: clientsIntro,
};

const segments = [
  {
    title: "Emprendedores y PyMEs",
    description: "Soluciones accesibles de cartelería digital para crecer en punto de venta y comunicación.",
  },
  {
    title: "Medianas empresas",
    description: "Integraciones de tótems, pantallas y software para operación diaria.",
  },
  {
    title: "Multinacionales",
    description: "Despliegues escalables, fabricación a medida y soporte técnico.",
  },
  {
    title: "Sector público",
    description: "Proveedores de ministerios y municipios: turnos, información y atención ciudadana.",
  },
];

export default function ClientesPage() {
  return (
    <div className="bg-white pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Clientes
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-medium tracking-tight text-navy md:text-5xl">
          Nuestros clientes
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {clientsIntro}
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {segments.map((s) => (
            <div key={s.title} className="border border-border p-8">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-medium text-navy">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/contacto">Sumate como cliente</Button>
        </div>
      </Container>
    </div>
  );
}
