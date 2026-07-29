import type { ClientLogo } from "./types";

export const clients: ClientLogo[] = [
  { name: "Google", image: "/clients/google.png" },
  { name: "Netflix", image: "/clients/netflix.png" },
  { name: "Mercado Libre", image: "/clients/mercado-libre.png" },
  { name: "Coca-Cola", image: "/clients/coca-cola.png" },
  { name: "Unilever", image: "/clients/unilever.png" },
  { name: "YPF", image: "/clients/ypf.png" },
  { name: "OSDE", image: "/clients/osde.png" },
  { name: "Techint", image: "/clients/techint.png" },
  { name: "Roche", image: "/clients/roche.png" },
  { name: "Hospital Italiano", image: "/clients/hospital-italiano.png" },
  { name: "Banco Provincia", image: "/clients/banco-provincia.jpeg" },
  { name: "Buenos Aires Ciudad", image: "/clients/buenos-aires-ciudad.png" },
];

export const clientSegments = [
  {
    title: "Empresas y PyMEs",
    description:
      "Equipamiento para comunicación, atención, retail y experiencias en punto de venta.",
  },
  {
    title: "Organizaciones corporativas",
    description:
      "Pantallas, videowalls, señalización y colaboración para oficinas y sedes operativas.",
  },
  {
    title: "Instituciones",
    description:
      "Soluciones de información, turnos, autogestión e interacción para espacios de atención.",
  },
  {
    title: "Organismos públicos",
    description:
      "Proyectos para ministerios y municipios orientados a información y atención ciudadana.",
  },
] as const;

export const clientsIntro =
  "Trabajamos con organizaciones de distintas escalas y sectores, desde empresas y PyMEs hasta instituciones y organismos públicos.";
