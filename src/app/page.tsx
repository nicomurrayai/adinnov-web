import type { Metadata } from "next";
import { Clients } from "../components/home/Clients";
import { CustomWork } from "../components/home/CustomWork";
import { Hero } from "../components/home/Hero";
import { HomeCta } from "../components/home/HomeCta";
import { Partners } from "../components/home/Partners";
import { Process } from "../components/home/Process";
import { RentalsSection } from "../components/home/RentalsSection";
import { SolutionsStrip } from "../components/home/SolutionsStrip";
import { Verticals } from "../components/home/Verticals";

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
      <SolutionsStrip />
      <RentalsSection />
      <CustomWork />
      <Verticals />
      <Process />
      <Clients />
      <Partners />
      <HomeCta />
    </>
  );
}
