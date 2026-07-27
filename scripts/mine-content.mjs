import * as cheerio from "cheerio";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BASE = "https://www.adinnov.com.ar";

const PRODUCT_SLUGS = [
  "totem-digital",
  "totem-interactivo",
  "pantallas-y-pizarras-interactivas",
  "pizarra-interactiva-i3touch-e-one",
  "pizarra-interactiva-i3touch-ultra-105",
  "terminales-interactivas-pantallas-pequenas",
  "terminales-interactivas-pantallas-grandes",
  "pantalla-dual-solum-49-55",
  "bar-display-pantallas-stretch-solum",
  "kiosco-autogestion-3nstar",
  "kiosco-autogestion-gastronomia",
  "mini-totem-digital",
  "video-walls",
  "atril-digital",
  "terminal-interactiva-sillas-ruedas",
  "mesa-interactiva",
  "samsung-business-tv",
  "monitores-stand-alone",
  "pantalla-dual-3000-1000-nits",
  "kiosco-autogestion-samsung",
  "vidrieras-digitales",
  "videowalls-samsung",
  "flip",
  "pizarra-android-eboard-wad",
  "pantallas-touch",
  "pantalla-98-4k",
  "pantalla-105-5k",
  "pantallas-led",
  "poster-led",
  "banner-led",
  "totem-led-outdoor",
  "rotulos-letreros-led",
  "carteles-redondos-led",
  "carteles-salientes-led",
  "cubos-led",
  "shelf-led",
  "totem-led-outdoor-pedestal",
  "software-carteleria-digital",
  "apps-juegos-interactivos",
  "gestion-turnos",
  "gestion-filas",
  "c-control-videowalls",
  "videoconferencias",
  "totem-guardia-remoto",
  "totem-velocidad-lpr",
  "totem-cargador-celulares",
  "lustrador-calzado",
];

const CATEGORY_MAP = {
  "totem-digital": "totems",
  "totem-interactivo": "totems",
  "mini-totem-digital": "totems",
  "atril-digital": "totems",
  "mesa-interactiva": "totems",
  "totem-guardia-remoto": "totems",
  "totem-velocidad-lpr": "totems",
  "totem-cargador-celulares": "totems",
  "lustrador-calzado": "totems",
  "pantallas-y-pizarras-interactivas": "pizarras",
  "pizarra-interactiva-i3touch-e-one": "pizarras",
  "pizarra-interactiva-i3touch-ultra-105": "pizarras",
  "flip": "pizarras",
  "pizarra-android-eboard-wad": "pizarras",
  "pantallas-touch": "pizarras",
  "pantalla-98-4k": "pizarras",
  "pantalla-105-5k": "pizarras",
  "terminales-interactivas-pantallas-pequenas": "terminales",
  "terminales-interactivas-pantallas-grandes": "terminales",
  "terminal-interactiva-sillas-ruedas": "terminales",
  "kiosco-autogestion-3nstar": "kioscos",
  "kiosco-autogestion-gastronomia": "kioscos",
  "kiosco-autogestion-samsung": "kioscos",
  "pantallas-led": "led",
  "poster-led": "led",
  "banner-led": "led",
  "totem-led-outdoor": "led",
  "rotulos-letreros-led": "led",
  "carteles-redondos-led": "led",
  "carteles-salientes-led": "led",
  "cubos-led": "led",
  "shelf-led": "led",
  "totem-led-outdoor-pedestal": "led",
  "video-walls": "pantallas",
  "videowalls-samsung": "pantallas",
  "samsung-business-tv": "pantallas",
  "monitores-stand-alone": "pantallas",
  "pantalla-dual-solum-49-55": "pantallas",
  "bar-display-pantallas-stretch-solum": "pantallas",
  "pantalla-dual-3000-1000-nits": "pantallas",
  "vidrieras-digitales": "pantallas",
  "software-carteleria-digital": "software",
  "apps-juegos-interactivos": "software",
  "gestion-turnos": "software",
  "gestion-filas": "software",
  "c-control-videowalls": "software",
  "videoconferencias": "software",
};

async function fetchHtml(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  return res.text();
}

async function downloadImage(imgUrl, destPath) {
  try {
    const absolute = imgUrl.startsWith("http") ? imgUrl : `${BASE}${imgUrl}`;
    const res = await fetch(absolute);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.writeFile(destPath, buf);
    return destPath;
  } catch {
    return null;
  }
}

function cleanText(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}

function extractProduct(html, slug) {
  const $ = cheerio.load(html);
  const title =
    cleanText($("main h1").first().text()) ||
    cleanText($("h1").first().text()) ||
    slug;

  // Description: first paragraph-like text under main after h1
  let description = "";
  $("main p, main h1 + *").each((_, el) => {
    if (description) return;
    const text = cleanText($(el).text());
    if (text.length > 40 && !text.includes("ENVIAR")) description = text;
  });

  if (!description) {
    $("main")
      .find("*")
      .each((_, el) => {
        if (description) return;
        const tag = el.tagName?.toLowerCase();
        if (tag === "p" || tag === "div") {
          const text = cleanText($(el).clone().children().remove().end().text());
          if (text.length > 60) description = text;
        }
      });
  }

  const sections = [];
  $("main h2, main h3").each((_, el) => {
    const heading = cleanText($(el).text());
    if (!heading || heading.length < 2) return;
    if (/contacto|interesado|newsletter|enviar/i.test(heading)) return;

    const items = [];
    let $next = $(el).next();
    let guard = 0;
    while ($next.length && guard < 30) {
      const tag = $next.prop("tagName")?.toLowerCase();
      if (tag === "h2" || tag === "h3") break;
      if (tag === "ul" || tag === "ol") {
        $next.find("li").each((__, li) => {
          const t = cleanText($(li).text());
          if (t) items.push(t);
        });
      } else if (tag === "p" || tag === "div") {
        const t = cleanText($next.text());
        if (t && t.length > 15 && t.length < 500) items.push(t);
      } else if (tag === "table") {
        const rows = [];
        $next.find("tr").each((__, tr) => {
          const cells = [];
          $(tr)
            .find("th, td")
            .each((___, cell) => cells.push(cleanText($(cell).text())));
          if (cells.some(Boolean)) rows.push(cells);
        });
        if (rows.length) {
          sections.push({ heading, type: "table", rows });
          $next = $next.next();
          guard++;
          continue;
        }
      }
      $next = $next.next();
      guard++;
    }
    if (items.length) sections.push({ heading, type: "list", items });
  });

  // Specs from checkmark-like lists
  const features = [];
  $("main li").each((_, li) => {
    const t = cleanText($(li).text()).replace(/^[✓✔]\s*/, "");
    if (t && t.length > 5 && t.length < 300) features.push(t);
  });

  const imageUrls = [];
  $("main img, img[src*='/img/productos']").each((_, img) => {
    const src = $(img).attr("src");
    if (!src) return;
    if (src.includes("logo") || src.includes("redes") || src.includes("footer"))
      return;
    if (!imageUrls.includes(src)) imageUrls.push(src);
  });

  return {
    slug,
    title,
    description,
    category: CATEGORY_MAP[slug] || "otros",
    sections,
    features: [...new Set(features)].slice(0, 40),
    imageUrls,
  };
}

async function mineInstitutional() {
  const pages = {};
  for (const route of ["nosotros", "contacto", "nuestros-trabajos", "nuestros-clientes"]) {
    try {
      const html = await fetchHtml(`${BASE}/${route}`);
      const $ = cheerio.load(html);
      const title = cleanText($("main h1").first().text());
      const paragraphs = [];
      $("main p").each((_, p) => {
        const t = cleanText($(p).text());
        if (t.length > 30) paragraphs.push(t);
      });
      const images = [];
      $("main img").each((_, img) => {
        const src = $(img).attr("src");
        if (src && !src.includes("logo") && !src.includes("redes")) images.push(src);
      });
      pages[route] = { title, paragraphs, images };
    } catch (e) {
      console.warn(`Skip ${route}:`, e.message);
    }
  }
  return pages;
}

function toTsString(s) {
  return JSON.stringify(s ?? "");
}

function generateProductsTs(products) {
  const entries = products
    .map((p) => {
      const images = (p.localImages || []).map((i) => toTsString(i)).join(", ");
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
          const items = s.items
            .map((i) => `          ${toTsString(i)},`)
            .join("\n");
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

async function main() {
  console.log("Mining products...");
  const products = [];

  for (const slug of PRODUCT_SLUGS) {
    process.stdout.write(`  ${slug}... `);
    try {
      const html = await fetchHtml(`${BASE}/producto/${slug}`);
      const product = extractProduct(html, slug);
      const localImages = [];
      for (let i = 0; i < product.imageUrls.length; i++) {
        const url = product.imageUrls[i];
        const ext = path.extname(new URL(url, BASE).pathname) || ".jpg";
        const filename = `${String(i + 1).padStart(2, "0")}${ext.split("?")[0]}`;
        const dest = path.join(ROOT, "public", "products", slug, filename);
        const ok = await downloadImage(url, dest);
        if (ok) localImages.push(`/products/${slug}/${filename}`);
      }
      product.localImages = localImages;
      products.push(product);
      console.log(`OK (${localImages.length} imgs, ${product.features.length} features)`);
    } catch (e) {
      console.log(`FAIL: ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 200));
  }

  // Brand assets
  const brandAssets = [
    ["/img/logo.png", "public/brand/logo.png"],
    ["/img/footer/avixa-member-logo.png", "public/brand/avixa.png"],
    ["/img/footer/iot-innov.png", "public/brand/iot-innov.png"],
    ["/img/footer/tech-innov.png", "public/brand/tech-innov.png"],
  ];
  for (const [src, dest] of brandAssets) {
    await downloadImage(src, path.join(ROOT, dest));
  }

  // Try home images for hero / partners / clients
  try {
    const homeHtml = await fetchHtml(BASE);
    const $ = cheerio.load(homeHtml);
    const homeImgs = [];
    $("img").each((_, img) => {
      const src = $(img).attr("src");
      if (src && src.startsWith("/img/") && !src.includes("logo") && !src.includes("redes")) {
        homeImgs.push(src);
      }
    });
    let i = 0;
    for (const src of [...new Set(homeImgs)].slice(0, 40)) {
      const ext = path.extname(src) || ".jpg";
      await downloadImage(src, path.join(ROOT, "public", "site", `home-${String(++i).padStart(2, "0")}${ext}`));
    }
  } catch (e) {
    console.warn("Home images:", e.message);
  }

  const institutional = await mineInstitutional();
  await fs.mkdir(path.join(ROOT, "content"), { recursive: true });
  await fs.writeFile(
    path.join(ROOT, "content", "_raw-institutional.json"),
    JSON.stringify(institutional, null, 2),
  );
  await fs.writeFile(
    path.join(ROOT, "content", "_raw-products.json"),
    JSON.stringify(products, null, 2),
  );
  await fs.writeFile(
    path.join(ROOT, "content", "products.generated.ts"),
    generateProductsTs(products),
  );

  console.log(`\nDone. ${products.length} products mined.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
