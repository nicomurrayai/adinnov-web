import type { Metadata } from "next";
import { Hero } from "../components/home/Hero";
import { Partners } from "../components/home/Partners";
import { HomeRentals } from "../components/home/HomeRentals";
import { HomeClients } from "../components/home/HomeClients";
import { CustomSolutions } from "../components/home/CustomSolutions";
import { HomeFinancing } from "../components/home/HomeFinancing";
import { HomeCaseStudies } from "../components/home/HomeCaseStudies";
import { HomeShowroom } from "../components/home/HomeShowroom";
import { HomeContact } from "../components/home/HomeContact";
import { getCaseStudies } from "../lib/case-studies/queries";

export const metadata: Metadata = {
  title: "Cartelería digital, interacción y LED",
  description:
    "Diseñamos e integramos tótems, pantallas LED, kioscos, sistemas interactivos y software para empresas e instituciones en Argentina.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const caseStudies = await getCaseStudies();
  return (
    <>
      <Hero />
      <HomeClients />
      <HomeCaseStudies caseStudies={caseStudies.slice(0, 3)} />
      <HomeRentals />
      <Partners />
      <CustomSolutions />
      <HomeShowroom />
      <HomeFinancing />
      <HomeContact />
    </>
  );
}
