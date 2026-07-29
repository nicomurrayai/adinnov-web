import { productFamilyByCategory } from "./categories";
import imageDimensions from "./imageDimensions.json";
import { isPendingEditorialClaim } from "./product-review";
import type {
  EnrichedProduct,
  Product,
  ProductCategoryId,
  ProductEnvironment,
  ProductFamilyId,
  ProductHighlight,
  ProductInteraction,
  ProductSection,
  ProductSpec,
  ProductSpecGroup,
  ProductVariant,
} from "./types";

export const RENTAL_PRODUCT_SLUGS = [
  "totem-interactivo",
  "totem-digital",
  "poster-led",
  "samsung-business-tv",
  "terminales-interactivas-pantallas-grandes",
  "pantallas-touch",
  "pantallas-led",
  "atril-digital",
] as const;

const rentalSlugs = new Set<string>(RENTAL_PRODUCT_SLUGS);
const dimensionsBySource = imageDimensions as Record<
  string,
  { width: number; height: number }
>;

const outdoorOnlySlugs = new Set([
  "totem-led-outdoor",
  "totem-led-outdoor-pedestal",
  "totem-velocidad-lpr",
]);

const mixedEnvironmentSlugs = new Set([
  "pantallas-led",
  "banner-led",
  "rotulos-letreros-led",
  "carteles-redondos-led",
  "carteles-salientes-led",
  "cubos-led",
]);

const mixedInteractionSlugs = new Set([
  "totem-guardia-remoto",
  "totem-cargador-celulares",
  "pantalla-98-4k",
  "pantalla-105-5k",
  "apps-juegos-interactivos",
  "gestion-turnos",
  "gestion-filas",
]);

const touchSlugs = new Set([
  "totem-interactivo",
  "pantallas-y-pizarras-interactivas",
  "pizarra-interactiva-i3touch-e-one",
  "pizarra-interactiva-i3touch-ultra-105",
  "terminales-interactivas-pantallas-pequenas",
  "terminales-interactivas-pantallas-grandes",
  "kiosco-autogestion-3nstar",
  "kiosco-autogestion-gastronomia",
  "terminal-interactiva-sillas-ruedas",
  "mesa-interactiva",
  "kiosco-autogestion-samsung",
  "flip",
  "pizarra-android-eboard-wad",
  "pantallas-touch",
]);

const familyUseCases: Record<ProductFamilyId, string[]> = {
  "totems-terminales": [
    "Recepciones y puntos de atención",
    "Locales, showrooms y espacios de marca",
    "Ferias, congresos y eventos corporativos",
  ],
  "pantallas-profesionales": [
    "Comunicación interna y salas corporativas",
    "Retail, vidrieras y puntos de venta",
    "Centros de control y espacios de alto tránsito",
  ],
  led: [
    "Escenarios, eventos y activaciones",
    "Fachadas, vía pública y grandes superficies",
    "Retail y comunicación promocional",
  ],
  "pizarras-interaccion": [
    "Aulas y espacios de formación",
    "Salas de reunión y colaboración",
    "Presentaciones y demostraciones interactivas",
  ],
  "kioscos-autogestion": [
    "Gastronomía y toma de pedidos",
    "Retail y puntos de autoservicio",
    "Turnos, pagos y atención institucional",
  ],
  "software-servicios": [
    "Administración remota de contenidos",
    "Orquestación de pantallas y videowalls",
    "Flujos de atención y experiencias interactivas",
  ],
};

const highlightTitles = [
  "Configuración",
  "Integración",
  "Operación",
  "Aplicación",
] as const;

const ctaPattern =
  /solicitar cotizaci[oó]n|cotiz[aá]|conocer m[aá]s|consult[aá](?:nos| ahora)|¿necesit[aá]s/i;

const technicalHeadingPattern =
  /caracter[ií]st|especific|pantalla|dimensi|medida|modelo|versi[oó]n|sistema|conectividad|componente|instalaci[oó]n|material|rendimiento|configuraci[oó]n|funcionalidad|software|hardware|beneficio|ventaja/i;

const variantHeadingPattern =
  /medidas?|modelos?|versiones?|opciones?|formatos?|tamaños?|disponibles/i;

function normalizeText(value: string): string {
  return value
    .replace(/[✓✔•]+/g, " · ")
    .replace(/\s+/g, " ")
    .replace(/\s*·\s*/g, " · ")
    .trim();
}

function isRenderableText(value: string): boolean {
  const normalized = normalizeText(value);
  return (
    normalized.length >= 3 &&
    normalized.length <= 320 &&
    !ctaPattern.test(normalized) &&
    !isPendingEditorialClaim(normalized)
  );
}

function truncate(value: string, length: number): string {
  if (value.length <= length) return value;
  const clipped = value.slice(0, length - 1).replace(/\s+\S*$/, "").trim();
  return `${clipped}…`;
}

function getFamily(category: string): ProductFamilyId {
  return (
    productFamilyByCategory[category as ProductCategoryId] ??
    "software-servicios"
  );
}

function getEnvironments(slug: string): ProductEnvironment[] {
  if (outdoorOnlySlugs.has(slug)) return ["outdoor"];
  if (mixedEnvironmentSlugs.has(slug)) return ["indoor", "outdoor"];
  return ["indoor"];
}

function getInteraction(slug: string): ProductInteraction {
  if (mixedInteractionSlugs.has(slug)) return "mixed";
  if (touchSlugs.has(slug)) return "touch";
  return "non-touch";
}

function getHighlightTitle(feature: string, index: number): string {
  const separator = feature.indexOf(":");
  if (separator > 2 && separator < 34) {
    return truncate(feature.slice(0, separator), 34);
  }

  if (/pantalla|resoluci[oó]n|brillo|imagen/i.test(feature)) {
    return "Calidad visual";
  }
  if (/wifi|ethernet|conect|remot|software/i.test(feature)) {
    return "Conectividad";
  }
  if (/t[aá]ctil|interactiv/i.test(feature)) return "Interacción";
  if (/estructura|material|diseño|formato/i.test(feature)) {
    return "Diseño y construcción";
  }
  return highlightTitles[index] ?? "Prestación";
}

function createHighlights(product: Product): ProductHighlight[] {
  const candidates = product.features
    .map(normalizeText)
    .filter(isRenderableText)
    .filter((value, index, values) => values.indexOf(value) === index);

  if (candidates.length === 0) {
    return [
      {
        title: "Solución configurable",
        description: product.description,
      },
    ];
  }

  const highlights: ProductHighlight[] = [];
  const usedTitles = new Set<string>();
  for (const feature of candidates) {
    const title = getHighlightTitle(feature, highlights.length);
    const titleKey = title.toLocaleLowerCase("es-AR");
    if (usedTitles.has(titleKey)) continue;

    const separator = feature.indexOf(":");
    const description =
      separator > 2 && separator < 34
        ? feature.slice(separator + 1).trim()
        : feature;
    if (!description) continue;

    usedTitles.add(titleKey);
    highlights.push({ title, description });
    if (highlights.length === 4) break;
  }

  return highlights;
}

function listSectionToSpecs(section: Extract<ProductSection, { type: "list" }>): ProductSpec[] {
  return section.items
    .map(normalizeText)
    .filter(isRenderableText)
    .slice(0, 8)
    .map((item, index) => {
      const separator = item.indexOf(":");
      if (separator > 1 && separator < 54) {
        return {
          label: item.slice(0, separator).trim(),
          value: item.slice(separator + 1).trim(),
        };
      }
      return { label: `Detalle ${index + 1}`, value: item };
    })
    .filter((spec) => spec.value.length > 0);
}

function tableSectionToSpecs(
  section: Extract<ProductSection, { type: "table" }>,
): ProductSpec[] {
  if (section.rows.length === 0) return [];
  const [headings, ...rows] = section.rows;

  return rows.slice(0, 8).flatMap((row, index) => {
    const cells = row.map(normalizeText).filter(Boolean);
    if (cells.length === 0) return [];
    const label = cells[0] || `Opción ${index + 1}`;
    const values = cells.slice(1).map((cell, cellIndex) => {
      const heading = headings?.[cellIndex + 1];
      return heading ? `${normalizeText(heading)}: ${cell}` : cell;
    });
    return [{ label, value: values.join(" · ") || label }];
  });
}

function sectionToSpecs(section: ProductSection): ProductSpec[] {
  return section.type === "table"
    ? tableSectionToSpecs(section)
    : listSectionToSpecs(section);
}

function createSpecGroups(product: Product): ProductSpecGroup[] {
  const usableSections = product.sections
    .filter((section) => !ctaPattern.test(section.heading))
    .map((section, index) => ({
      section,
      specs: sectionToSpecs(section),
      score: technicalHeadingPattern.test(section.heading) ? 0 : index + 1,
      index,
    }))
    .filter(({ specs }) => specs.length > 0)
    .sort((a, b) => a.score - b.score || a.index - b.index);

  const groups: ProductSpecGroup[] = [];
  const seen = new Set<string>();
  for (const { section, specs } of usableSections) {
    const title = normalizeText(section.heading);
    const key = title.toLocaleLowerCase("es-AR");
    if (seen.has(key)) continue;
    seen.add(key);
    groups.push({ title, specs });
    if (groups.length === 6) break;
  }

  if (groups.length < 3) {
    const fallbackSpecs = product.features
      .map(normalizeText)
      .filter(isRenderableText)
      .slice(0, 8)
      .map((value, index) => ({ label: `Detalle ${index + 1}`, value }));
    if (fallbackSpecs.length > 0) {
      groups.push({ title: "Configuración", specs: fallbackSpecs });
    }
  }

  return groups.slice(0, 6);
}

function createVariants(product: Product): ProductVariant[] {
  const variants: ProductVariant[] = [];

  for (const section of product.sections) {
    if (!variantHeadingPattern.test(section.heading)) continue;

    if (section.type === "table" && section.rows.length > 1) {
      const [headings, ...rows] = section.rows;
      for (const row of rows.slice(0, 6)) {
        const [name, ...values] = row.map(normalizeText);
        if (!name) continue;
        const specs = values.flatMap((value, index) => {
          const label = headings?.[index + 1];
          return value && label
            ? [{ label: normalizeText(label), value }]
            : [];
        });
        variants.push({ name, specs });
      }
    }

    if (variants.length > 0) break;
  }

  if (variants.length === 0) {
    return [
      {
        name: "Configuración por proyecto",
        description:
          "El formato, las prestaciones y la integración final se definen según el espacio y el alcance aprobado.",
      },
    ];
  }

  return variants.slice(0, 6);
}

function createUseCases(product: Product, family: ProductFamilyId): string[] {
  const candidates = product.sections
    .filter((section) => /d[oó]nde|aplicaciones?|casos? de uso|ideal para|sectores?/i.test(section.heading))
    .flatMap((section) => (section.type === "list" ? section.items : []))
    .map(normalizeText)
    .filter((value) => isRenderableText(value) && value.length <= 140)
    .slice(0, 3);

  return Array.from(new Set([...candidates, ...familyUseCases[family]])).slice(0, 6);
}

function createBaseProduct(product: Product): EnrichedProduct {
  const family = getFamily(product.category);
  const rental = rentalSlugs.has(product.slug);
  const media = product.images.slice(0, 8).map((src, index) => ({
    type: "image" as const,
    src,
    alt: src.includes("contexto-ia")
      ? `${product.title} — escena contextual ilustrativa generada con IA`
      : `${product.title} — ${index === 0 ? "vista principal" : `vista ${index + 1}`}`,
    ...dimensionsBySource[src],
  }));

  return {
    ...product,
    availability: { sale: true, rental },
    media,
    highlights: createHighlights(product),
    variants: createVariants(product),
    specGroups: createSpecGroups(product),
    useCases: createUseCases(product, family),
    includedServices: [
      "Asesoramiento para definir la configuración",
      "Personalización según el alcance acordado",
      "Instalación y puesta en marcha a cotizar",
    ],
    faqs: [
      {
        question: `¿Qué configuración de ${product.title} conviene para mi proyecto?`,
        answer:
          "Depende del espacio, el contenido, el tiempo de operación y las integraciones necesarias. Relevamos esos datos antes de preparar la propuesta.",
      },
      {
        question: rental
          ? "¿Está disponible para compra y alquiler?"
          : "¿Está disponible para compra?",
        answer: rental
          ? "Sí. Este equipo se cotiza para venta y también para alquiler, sujeto a disponibilidad y alcance del proyecto."
          : "Sí. Se cotiza para venta con la configuración definida para cada proyecto.",
      },
      {
        question: "¿La instalación está incluida?",
        answer:
          "La logística, instalación y puesta en marcha se detallan por separado en la propuesta según ubicación y complejidad.",
      },
    ],
    relatedSlugs: [],
    seo: {
      title: `${product.title} | Adinnov`,
      description: truncate(product.description, 155),
    },
    family,
    environments: getEnvironments(product.slug),
    interaction: getInteraction(product.slug),
  };
}

function relationScore(product: EnrichedProduct, candidate: EnrichedProduct): number {
  let score = 0;
  if (product.family === candidate.family) score += 10;
  if (product.interaction === candidate.interaction) score += 2;
  if (
    product.environments.some((environment) =>
      candidate.environments.includes(environment),
    )
  ) {
    score += 1;
  }
  return score;
}

export function enrichProducts(source: Product[]): EnrichedProduct[] {
  const enriched = source.map(createBaseProduct);

  return enriched.map((product) => ({
    ...product,
    relatedSlugs: enriched
      .filter((candidate) => candidate.slug !== product.slug)
      .map((candidate, index) => ({
        slug: candidate.slug,
        score: relationScore(product, candidate),
        index,
      }))
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .slice(0, 3)
      .map(({ slug }) => slug),
  }));
}
