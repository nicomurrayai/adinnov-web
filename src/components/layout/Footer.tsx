import Image from "next/image";
import Link from "next/link";
import { site } from "@content/site";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Image
            src="/brand/logo.png"
            alt="Adinnov"
            width={140}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
          <p className="mt-4 text-sm text-white/55">Membrillar 74, Ciudad de Buenos Aires</p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            Navegación
          </p>
          <ul className="mt-4 space-y-2.5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            Contacto
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="hover:text-white">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.whatsapp[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {site.partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={80}
                  height={32}
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Adinnov. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
              Instagram
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
              LinkedIn
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
              Facebook
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
              YouTube
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
