import type { RentalItem } from "./types";

export const rentalsIntro =
  "Equipamiento para ferias, exposiciones, conferencias, congresos y eventos corporativos. Coordinamos logística, instalación y puesta en marcha.";

export const rentalItems: RentalItem[] = [
  {
    slug: "totem-interactivo",
    title: "Tótem interactivo",
    description:
      "Pantallas táctiles en formato vertical para aplicaciones, catálogos, registros y experiencias de marca.",
    image: "/products/totem-interactivo/02.jpeg",
  },
  {
    slug: "totem-digital",
    title: "Tótem digital",
    description:
      "Cartelería vertical para reproducir videos, piezas gráficas e información durante el evento.",
    image: "/products/totem-digital/01.jpg",
  },
  {
    slug: "poster-led",
    title: "Poster LED",
    description:
      "Formato LED vertical de alto impacto para stands, accesos, escenarios y activaciones.",
    image: "/products/poster-led/02.jpg",
  },
  {
    slug: "tv-soporte",
    title: "TV con soporte",
    description:
      "Pantallas profesionales montadas para presentaciones, contenidos institucionales y señalización temporal.",
    image: "/products/samsung-business-tv/06.jpg",
  },
  {
    slug: "terminales-interactivas",
    title: "Terminales interactivas",
    description:
      "Equipos táctiles para encuestas, consultas, catálogos, registro y autogestión.",
    image: "/products/terminales-interactivas-pantallas-grandes/01.jpg",
  },
  {
    slug: "pantallas-touch",
    title: "Pantallas touch",
    description:
      "Superficies interactivas para demostraciones, presentaciones y contenido colaborativo.",
    image: "/products/pantallas-touch/04.jpeg",
  },
  {
    slug: "pantallas-led",
    title: "Pantallas LED",
    description:
      "Configuraciones de gran formato para escenarios, fondos visuales y comunicación de alto impacto.",
    image: "/products/pantallas-led/03.jpg",
  },
  {
    slug: "atril-digital",
    title: "Atril digital",
    description:
      "Atril con pantalla para conferencias, presentaciones, recepción e información de agenda.",
    image: "/products/atril-digital/02.jpg",
  },
];

export const rentalServices = [
  "Asesoramiento para elegir el formato",
  "Coordinación logística",
  "Instalación y puesta en marcha",
  "Retiro al finalizar el evento",
] as const;
