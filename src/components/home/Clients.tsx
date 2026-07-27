import { clientsIntro } from "@content/clients";
import { Section, SectionHeading } from "../ui/Section";

const highlights = [
  "Emprendedores y PyMEs",
  "Medianas empresas",
  "Multinacionales",
  "Ministerios y municipios",
];

export function Clients() {
  return (
    <Section tone="surface" id="clientes">
      <SectionHeading
        eyebrow="Nuestros clientes"
        title="Confianza de empresas e instituciones"
        description={clientsIntro}
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((label) => (
          <li
            key={label}
            className="border border-border bg-white px-5 py-6 text-sm font-medium text-navy"
          >
            {label}
          </li>
        ))}
      </ul>
    </Section>
  );
}
