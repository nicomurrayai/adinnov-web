import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppFloat } from "../components/layout/WhatsAppFloat";
import { site } from "@content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Cartelería Digital | Adinnov",
    template: "%s | Adinnov",
  },
  description: site.description,
  keywords: [
    "cartelería digital",
    "tótems",
    "pantallas LED",
    "Adinnov",
    "alquiler pantallas",
    "kioscos",
    "pizarras interactivas",
  ],
  openGraph: {
    title: "Cartelería Digital | Adinnov",
    description: site.description,
    url: site.url,
    siteName: "Adinnov",
    locale: "es_AR",
    type: "website",
  },
  authors: [{ name: "Adinnov", url: site.url }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
