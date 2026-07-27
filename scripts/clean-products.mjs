import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const NOISE = new Set([
  "nuestras soluciones",
  "alquileres",
  "verticales",
  "soluciones a medida",
  "nuestros clientes",
  "partners",
  "enviar",
  "contacto",
]);

function cleanItem(s) {
  return s
    .replace(/^[✓✔•\-\s]+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isNoise(s) {
  const t = cleanItem(s).toLowerCase();
  return NOISE.has(t) || t.length < 4;
}

function isGarbageSection(section) {
  if (section.type === "table") return false;
  if (!section.items?.length) return true;
  // Concatenated mega-blocks without spaces between words patterns
  const joined = section.items.join(" ");
  if (section.items.length === 1 && joined.length > 400 && !joined.includes(". ")) {
    return true;
  }
  return false;
}

function toTsString(s) {
  return JSON.stringify(s ?? "");
}

function generate(products) {
  const entries = products
    .map((p) => {
      const images = p.images.map((i) => toTsString(i)).join(", ");
      const features = p.features.map((f) => `      ${toTsString(f)},`).join("\n");
      const sections = p.sections
        .map((s) => {
          if (s.type === "table") {
            const rows = s.rows
              .map((r) => `          [${r.map((c) => toTsString(c)).join(", ")}],`)
              .join("\n");
            return `      {
        heading: ${toTsString(s.heading)},
        type: "table" as const,
        rows: [
${rows}
        ],
      },`;
          }
          const items = s.items.map((i) => `          ${toTsString(i)},`).join("\n");
          return `      {
        heading: ${toTsString(s.heading)},
        type: "list" as const,
        items: [
${items}
        ],
      },`;
        })
        .join("\n");

      return `  {
    slug: ${toTsString(p.slug)},
    title: ${toTsString(p.title)},
    description: ${toTsString(p.description)},
    category: ${toTsString(p.category)},
    images: [${images}],
    features: [
${features}
    ],
    sections: [
${sections}
    ],
  },`;
    })
    .join("\n");

  return `import type { Product } from "./types";

export const products: Product[] = [
${entries}
];
`;
}

// Hardcoded dimension tables for flagship totems (from live site)
const TOTEM_MEASURES = {
  heading: "Medidas por Modelo",
  type: "table",
  rows: [
    ["Tamaño", "Alto", "Ancho", "Profundidad"],
    ["32''", "1.90 m", "0.51 m", "0.10 m"],
    ["43''", "1.90 m", "0.63 m", "0.10 m"],
    ["50''", "1.90 m", "0.70 m", "0.10 m"],
    ["55''", "1.95 m", "0.75 m", "0.10 m"],
    ["65''", "1.95 m", "0.80 m", "0.12 m"],
    ["75''", "1.95 m", "0.85 m", "0.12 m"],
  ],
};

async function main() {
  const raw = JSON.parse(
    await fs.readFile(path.join(ROOT, "content", "_raw-products.json"), "utf8"),
  );

  const products = raw.map((p) => {
    let features = [...new Set(p.features.map(cleanItem).filter((f) => !isNoise(f)))].slice(
      0,
      24,
    );

    let sections = p.sections
      .map((s) => {
        if (s.type === "table") return s;
        return {
          ...s,
          items: s.items.map(cleanItem).filter((i) => !isNoise(i) && i.length < 350),
        };
      })
      .filter((s) => !isGarbageSection(s) && (s.type === "table" || s.items.length > 0));

    // Replace broken measure sections for totems
    if (p.slug === "totem-digital" || p.slug === "totem-interactivo") {
      sections = sections.filter((s) => !/medidas/i.test(s.heading));
      sections.splice(
        Math.min(3, sections.length),
        0,
        TOTEM_MEASURES,
      );
    }

    // Prefer localImages from mining
    const images = p.localImages?.length ? p.localImages : p.images || [];

    // Trim description noise
    let description = cleanItem(p.description);
    if (description.length > 400) description = description.slice(0, 397) + "…";

    return {
      slug: p.slug,
      title: cleanItem(p.title).replace(/&#x27;/g, "'").replace(/&amp;/g, "&"),
      description,
      category: p.category,
      images,
      features,
      sections,
    };
  });

  await fs.writeFile(path.join(ROOT, "content", "products.ts"), generate(products));
  console.log(`Cleaned ${products.length} products → content/products.ts`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
