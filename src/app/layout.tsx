import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { WhatsAppFloat } from "../components/layout/WhatsAppFloat";
import { site } from "@content/site";
import "./globals.css";

const displayFont = localFont({
  src: "./fonts/familjen-grotesk-latin.woff2",
  variable: "--font-familjen",
  weight: "400 700",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/instrument-sans-latin.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
});

const monoFont = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-400-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-500-latin.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Cartelería digital, interacción y LED | Adinnov",
    template: "%s | Adinnov",
  },
  description: site.description,
  keywords: [
    "cartelería digital",
    "tótems digitales",
    "pantallas LED",
    "kioscos de autogestión",
    "alquiler de pantallas",
    "Adinnov",
  ],
  applicationName: "Adinnov",
  authors: [{ name: "Adinnov", url: site.url }],
  creator: "Adinnov",
  publisher: "Adinnov",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tecnología que transforma espacios | Adinnov",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/videos/hero-adinnov-poster.webp",
        width: 1600,
        height: 900,
        alt: "Soluciones de cartelería digital Adinnov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnología que transforma espacios | Adinnov",
    description: site.description,
    images: ["/videos/hero-adinnov-poster.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon_64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicons/favicon_128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicons/favicon_256x256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f2efe6",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo.svg`,
  image: `${site.url}/videos/hero-adinnov-poster.webp`,
  email: site.email,
  telephone: "+54 11 5478-9803",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Membrillar 74",
    addressLocality: "Ciudad de Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: [
    site.social.instagram,
    site.social.linkedin,
    site.social.facebook,
    site.social.youtube,
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>
        <a className="skip-link" href="#contenido-principal">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido-principal" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
