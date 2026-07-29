import type {
  Category,
  ProductCategoryId,
  ProductFamilyId,
} from "./types";

export const categories: Category[] = [
  {
    id: "totems-terminales",
    name: "Tótems y terminales",
    shortName: "Tótems",
    description:
      "Equipos verticales, atriles y terminales configurables para información, atención y experiencias de marca.",
    href: "/productos?familia=totems-terminales",
    sourceCategories: ["totems", "terminales"],
  },
  {
    id: "pantallas-profesionales",
    name: "Pantallas profesionales",
    shortName: "Pantallas",
    description:
      "Displays comerciales, videowalls y formatos especiales pensados para operación corporativa y retail.",
    href: "/productos?familia=pantallas-profesionales",
    sourceCategories: ["pantallas"],
  },
  {
    id: "led",
    name: "LED",
    shortName: "LED",
    description:
      "Pantallas y formatos LED de alto impacto para interiores, vidrieras, eventos y espacios exteriores.",
    href: "/productos?familia=led",
    sourceCategories: ["led"],
  },
  {
    id: "pizarras-interaccion",
    name: "Pizarras e interacción",
    shortName: "Interacción",
    description:
      "Superficies táctiles y pantallas colaborativas para aulas, salas de reunión y presentaciones de gran formato.",
    href: "/productos?familia=pizarras-interaccion",
    sourceCategories: ["pizarras"],
  },
  {
    id: "kioscos-autogestion",
    name: "Kioscos y autogestión",
    shortName: "Autogestión",
    description:
      "Terminales de autoservicio para pedidos, pagos, turnos y atención en retail, gastronomía e instituciones.",
    href: "/productos?familia=kioscos-autogestion",
    sourceCategories: ["kioscos"],
  },
  {
    id: "software-servicios",
    name: "Software y servicios",
    shortName: "Software",
    description:
      "Plataformas para administrar contenidos, turnos, filas, experiencias interactivas y sistemas audiovisuales.",
    href: "/productos?familia=software-servicios",
    sourceCategories: ["software", "otros"],
  },
];

export const productFamilyByCategory: Record<
  ProductCategoryId,
  ProductFamilyId
> = {
  totems: "totems-terminales",
  terminales: "totems-terminales",
  pantallas: "pantallas-profesionales",
  led: "led",
  pizarras: "pizarras-interaccion",
  kioscos: "kioscos-autogestion",
  software: "software-servicios",
  otros: "software-servicios",
};

export const solutionHighlights = categories.map(
  ({ id, name: title, description, href }) => ({
    id,
    title,
    description,
    href,
  }),
);
