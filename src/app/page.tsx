import type { Metadata } from "next";
import { Hero } from "../components/home/Hero";
import { Partners } from "../components/home/Partners";
import { HomeRentals } from "../components/home/HomeRentals";
import { Verticals } from "../components/home/Verticals";
import { HomeClients } from "../components/home/HomeClients";
import { SolutionsTabs } from "../components/home/SolutionsTabs";

export const metadata: Metadata = {
  title: "Cartelería digital, interacción y LED",
  description:
    "Diseñamos e integramos tótems, pantallas LED, kioscos, sistemas interactivos y software para empresas e instituciones en Argentina.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsTabs />
      <Partners />
      <HomeRentals />
      <Verticals />
      <HomeClients />
    </>
  );
}
