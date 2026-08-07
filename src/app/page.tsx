import type { Metadata } from "next";
import { Clients } from "../components/home/Clients";
import { Hero } from "../components/home/Hero";
import { Partners } from "../components/home/Partners";
import { Process } from "../components/home/Process";
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
      <Verticals />
      <Process />
      <Clients />
      <Partners />
    </>
  );
}
