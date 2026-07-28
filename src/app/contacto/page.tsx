import type { Metadata } from "next";
import { site } from "@content/site";
import { Container } from "../../components/ui/Container";
import { ContactForm } from "../../components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Adinnov para cotizar cartelería digital, alquileres o fabricación a medida.",
};

export default function ContactoPage() {
  return (
    <div className="bg-white pb-20 pt-24 md:pb-28 md:pt-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Contacto
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-medium tracking-tight text-navy md:text-5xl">
              {site.contact.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{site.contact.subtitle}</p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-navy hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Teléfonos</dt>
                <dd className="mt-1 space-y-1">
                  {site.phones.map((p) => (
                    <a key={p.href} href={p.href} className="block text-navy hover:underline">
                      {p.display}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href={site.whatsapp[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:underline"
                  >
                    Escribinos ahora
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Dirección</dt>
                <dd className="mt-1 text-navy">Membrillar 74, Ciudad de Buenos Aires</dd>
              </div>
            </dl>

            <div className="mt-12 border-t border-border pt-8">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-medium text-navy">
                {site.contact.distributor}
              </h2>
              <p className="mt-2 text-sm text-muted">
                Si querés comercializar nuestros productos, escribinos y te enviamos información comercial.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="border border-border bg-surface p-6 md:p-8">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-medium text-navy">
                Enviá tu consulta
              </h2>
              <p className="mt-2 mb-8 text-sm text-muted">
                También podés solicitar el catálogo completo.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
