import Link from "next/link";
import { productFamilies, site } from "@content/site";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-12 lg:pb-20">
          <div className="lg:col-span-5">
            <h2 className="font-display max-w-lg text-balance text-[clamp(2.4rem,4vw,4.5rem)] font-medium leading-[0.94] tracking-[-0.045em]">
              Hablemos de tu próximo espacio digital.
            </h2>
            <Link
              href="/contacto"
              className="mt-8 inline-flex min-h-12 items-center gap-5 rounded-[var(--radius-sm)] bg-signal px-5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-white hover:text-navy"
            >
              Cotizar un proyecto
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="eyebrow text-white/60">Navegación</p>
              <ul className="mt-5 space-y-3">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/68 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contacto" className="text-sm text-white/68 transition-colors hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-white/60">Productos</p>
              <ul className="mt-5 space-y-3">
                {productFamilies.map((family) => (
                  <li key={family.id}>
                    <Link
                      href={family.href}
                      prefetch={false}
                      className="text-sm text-white/68 transition-colors hover:text-white"
                    >
                      {family.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-white/60">Contacto</p>
              <address className="mt-5 space-y-3 text-sm not-italic leading-6 text-white/68">
                <p>{site.address}</p>
                <p>
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </p>
                {site.phones.map((phone) => (
                  <p key={phone.href}>
                    <a href={phone.href} className="hover:text-white">
                      {phone.display}
                    </a>
                  </p>
                ))}
              </address>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.08em] text-white/55">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram
                </a>
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  LinkedIn
                </a>
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Adinnov. Todos los derechos reservados.</p>
          <p>Cartelería digital · Buenos Aires, Argentina</p>
        </div>
      </Container>
    </footer>
  );
}
