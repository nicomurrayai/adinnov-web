import { Hero } from "../components/home/Hero";
import { SolutionsStrip } from "../components/home/SolutionsStrip";
import { Partners } from "../components/home/Partners";
import { RentalsSection } from "../components/home/RentalsSection";
import { Verticals } from "../components/home/Verticals";
import { Clients } from "../components/home/Clients";
import { CustomWork } from "../components/home/CustomWork";
import { HomeCta } from "../components/home/HomeCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsStrip />
      <Partners />
      <RentalsSection />
      <Verticals />
      <Clients />
      <CustomWork />
      <HomeCta />
    </>
  );
}
