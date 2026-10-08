import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { WhatsAppFloat } from "../components/layout/WhatsAppFloat";
import { getMegaMenuColumns } from "../lib/content";
import { site } from "@content/site";
import "./globals.css";

const siteFont = localFont({
  src: "./fonts/clash-grotesk-variable.ttf",
  variable: "--font-clash",
  weight: "100 900",
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
  telephone: "+54 11 4190-6432",
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

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const megaMenuColumns = await getMegaMenuColumns();

  return (
    <html
      lang="es-AR"
      data-scroll-behavior="smooth"
      className={siteFont.variable}
    >
      <body>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KPTZ2ZL2');`}
        </Script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPTZ2ZL2" height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" /></noscript>
        <a className="skip-link" href="#contenido-principal">
          Saltar al contenido
        </a>
        <Header megaMenuColumns={megaMenuColumns} />
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
