import type { WorkBrand, WorkCase } from "./types";

export const worksIntro =
  "Soluciones que ya están funcionando en el mundo real. Conocé algunos de los proyectos que desarrollamos e implementamos para marcas, empresas e instituciones.";

/** Demo brands until real per-case client data is available */
const brand = {
  techint: { name: "Techint", logo: "/clients/techint.png" },
  ypf: { name: "YPF", logo: "/clients/ypf.png" },
  google: { name: "Google", logo: "/clients/google.png" },
  buenosAires: { name: "Buenos Aires Ciudad", logo: "/clients/buenos-aires-ciudad.png" },
  osde: { name: "OSDE", logo: "/clients/osde.png" },
  mercadoLibre: { name: "Mercado Libre", logo: "/clients/mercado-libre.png" },
  netflix: { name: "Netflix", logo: "/clients/netflix.png" },
  cocaCola: { name: "Coca-Cola", logo: "/clients/coca-cola.png" },
} as const satisfies Record<string, WorkBrand>;

const videowallImages = [
  "/site/works/videowalls/01.jpg",
  "/site/works/videowalls/02.jpg",
  "/site/works/videowalls/03.jpg",
  "/site/works/videowalls/04.jpg",
  "/site/works/videowalls/05.jpg",
];

const tvImages = [
  "/site/works/tvs/01.jpg",
  "/site/works/tvs/02.jpg",
  "/site/works/tvs/03.jpg",
  "/site/works/tvs/04.jpg",
  "/site/works/tvs/05.jpg",
  "/site/works/tvs/06.jpg",
];

const totemImages = [
  "/site/works/totems/01.jpg",
  "/site/works/totems/02.jpg",
  "/site/works/totems/03.jpg",
  "/site/works/totems/04.png",
  "/site/works/totems/05.png",
  "/site/works/totems/06.jpg",
  "/site/works/totems/07.jpg",
];

const ledImages = [
  "/site/works/led/01.jpg",
  "/site/works/led/02.jpg",
  "/site/works/led/03.jpg",
  "/site/works/led/04.jpg",
  "/site/works/led/05.jpg",
];

const alquilerImages = [
  "/site/works/alquileres/01.jpg",
  "/site/works/alquileres/02.jpg",
  "/site/works/alquileres/03.jpg",
  "/site/works/alquileres/04.jpg",
  "/site/works/alquileres/05.jpg",
];

/** Ordered for the /trabajos bento grid */
export const bentoCases: WorkCase[] = [
  {
    id: "videowalls",
    kind: "collection",
    category: "Videowalls",
    title: "Multipantalla que organiza el espacio",
    description:
      "Configuraciones para centros de monitoreo, comunicación corporativa y espacios de atención.",
    brands: [brand.techint],
    images: videowallImages,
    span: "standard",
  },
  {
    id: "toyota",
    kind: "client",
    category: "Videowalls",
    title: "Videowall de 12–18 pantallas",
    description: "Implementación multipantalla a escala corporativa.",
    brands: [brand.ypf],
    images: [videowallImages[0], videowallImages[1], videowallImages[2]],
    span: "standard",
  },
  {
    id: "entel",
    kind: "client",
    category: "Monitoreo",
    title: "Centro de monitoreo",
    description: "Operación visual continua para centros de control.",
    brands: [brand.google],
    images: [videowallImages[3], tvImages[0], videowallImages[4]],
    span: "standard",
  },
  {
    id: "gendarmeria",
    kind: "client",
    category: "Seguridad",
    title: "Sistema de seguridad",
    description: "Monitoreo e integración visual para entornos críticos.",
    brands: [brand.buenosAires],
    images: [ledImages[0], videowallImages[2], ledImages[1]],
    span: "standard",
  },
  {
    id: "tvs",
    kind: "collection",
    category: "TVs",
    title: "Señalización e institucionales",
    description:
      "Pantallas profesionales para contenidos, presentaciones y comunicación continua.",
    brands: [brand.osde],
    images: tvImages,
    span: "standard",
  },
  {
    id: "totems",
    kind: "collection",
    category: "Tótems",
    title: "Interacción en el punto de contacto",
    description: "Equipos digitales para ferias, retail e información de marca.",
    brands: [brand.mercadoLibre],
    images: totemImages,
    span: "standard",
  },
  {
    id: "led",
    kind: "collection",
    category: "LED",
    title: "Gran formato indoor y outdoor",
    description: "Soluciones LED en distintas escalas y configuraciones visuales.",
    brands: [brand.netflix],
    images: ledImages,
    span: "standard",
  },
  {
    id: "alquileres",
    kind: "collection",
    category: "Alquileres",
    title: "Equipamiento para eventos",
    description:
      "Soluciones temporales para ferias, congresos y activaciones corporativas.",
    brands: [brand.cocaCola],
    images: alquilerImages,
    span: "standard",
  },
];

/** Collection-only cases (deep-link targets and legacy consumers) */
export const works: WorkCase[] = bentoCases.filter((item) => item.kind === "collection");
