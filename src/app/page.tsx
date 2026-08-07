import type { Metadata } from "next";
import { Hero } from "../components/home/Hero";
import { SolutionsStrip } from "../components/home/SolutionsStrip";

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
    </>
  );
}
