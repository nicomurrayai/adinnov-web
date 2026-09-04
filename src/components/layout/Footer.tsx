import Image from "next/image";
import Link from "next/link";
import { site } from "@content/site";
import { Container } from "../ui/Container";

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path
        d="M8.6 3.5 10.2 7a1.5 1.5 0 0 1-.35 1.72L8.5 10a13.4 13.4 0 0 0 5.5 5.5l1.28-1.35A1.5 1.5 0 0 1 17 13.8l3.5 1.6a1.5 1.5 0 0 1 .85 1.6l-.3 2.1a2 2 0 0 1-2 1.72C10.3 20.3 3.7 13.7 3.18 5a2 2 0 0 1 1.72-2l2.1-.3a1.5 1.5 0 0 1 1.6.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ name }: { name: "Facebook" | "LinkedIn" | "Instagram" | "YouTube" }) {
  if (name === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.87.25-1.46 1.55-1.46H17V4a23 23 0 0 0-2.4-.12c-2.38 0-4 1.44-4 4.1V10H8v3h2.6v8h3.1Z" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.6 8.2H3.4V21h3.2V8.2ZM5 3A2 2 0 1 0 5 7a2 2 0 0 0 0-4Zm8 5.2H9.8V21H13v-6.7c0-1.76.33-3.47 2.52-3.47 2.16 0 2.18 2.02 2.18 3.58V21H21v-7.42c0-3.65-.78-6.46-5.05-6.46A4.4 4.4 0 0 0 12.1 9.2H12l.02-1H13Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.4" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M21.55 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.85 12 4.85 12 4.85s-6 0-7.65.45a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .45 4.8 2.7 2.7 0 0 0 1.9 1.9c1.65.45 7.65.45 7.65.45s6 0 7.65-.45a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.45-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
    </svg>
  );
}

const socialLinks = [
  { name: "Facebook", href: site.social.facebook },
  { name: "LinkedIn", href: site.social.linkedin },
  { name: "Instagram", href: site.social.instagram },
  { name: "YouTube", href: site.social.youtube },
] as const;

const affiliationLogos = [
  {
    src: "/brand/affiliations/avixa-member.png",
    alt: "Miembro de AVIXA",
    width: 227,
    height: 148,
    className: "w-28",
  },
  {
    src: "/brand/affiliations/iot-innov.png",
    alt: "IoT Innov, Internet de las Cosas",
    width: 2200,
    height: 429,
    className: "w-44",
  },
  {
    src: "/brand/affiliations/tech-innov.png",
    alt: "Tech Innov, Real Estate Tech Solutions",
    width: 2775,
    height: 428,
    className: "w-48",
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-navy/10 bg-[linear-gradient(180deg,#ffffff_0%,#8abdff_100%)] text-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.28)_50%,transparent_100%)]"
      />

      <Container className="relative py-14 md:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          <nav aria-label="Navegación del pie" className="order-2 lg:order-1 lg:col-span-4">
            <p className="eyebrow text-navy/55">Navegación</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-3 text-sm font-medium text-navy transition-colors hover:text-signal"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-navy transition-transform duration-300 group-hover:scale-150 group-hover:bg-signal"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 text-sm font-medium text-navy transition-colors hover:text-signal"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-navy transition-transform duration-300 group-hover:scale-150 group-hover:bg-signal"
                  />
                  Contacto
                </Link>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Adinnov en ${social.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-navy transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-white"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </nav>

          <section className="order-1 flex flex-col lg:order-2 lg:col-span-5">
            <p className="eyebrow text-navy/55">Contacto</p>
            <address className="mt-5 space-y-4 text-sm not-italic leading-6 text-navy">
              <p className="flex items-start gap-3 font-medium">
                <LocationIcon />
                <span>{site.address}</span>
              </p>
              {site.phones.map((phone) => (
                <p key={phone.href}>
                  <a
                    href={phone.href}
                    className="group flex w-fit items-center gap-3 transition-colors hover:text-signal"
                  >
                    <PhoneIcon />
                    <span>+54 {phone.display}</span>
                  </a>
                </p>
              ))}
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex w-fit items-center gap-3 transition-colors hover:text-signal"
                >
                  <MailIcon />
                  <span>{site.email}</span>
                </a>
              </p>
            </address>

            <Link
              href="/"
              aria-label="Adinnov, ir al inicio"
              className="-order-1 mb-10 inline-flex w-fit lg:order-none lg:mb-0 lg:mt-14"
            >
              <Image
                src="/brand/logo.svg"
                alt="Adinnov"
                width={774}
                height={282}
                className="h-auto w-52 md:w-60"
              />
            </Link>
          </section>

          <section className="order-3 lg:col-span-3">
            <p className="eyebrow text-navy/55 lg:text-center">Membresías y marcas</p>
            <div className="mt-6 flex flex-col items-start gap-7 lg:items-center">
              {affiliationLogos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  sizes="(max-width: 1024px) 12rem, 11rem"
                  className={`h-auto max-w-full object-contain ${logo.className}`}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-navy/15 pt-6 text-xs text-navy/60 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p>© {new Date().getFullYear()} Adinnov. Todos los derechos reservados.</p>
          <p>Cartelería digital · Buenos Aires, Argentina</p>
        </div>
      </Container>
    </footer>
  );
}
