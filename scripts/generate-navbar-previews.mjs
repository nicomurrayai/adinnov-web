import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { megaMenuColumns } from "../content/megaMenu.ts";
import { products } from "../content/products.ts";

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, "public");
const outputRoot = path.join(publicRoot, "navigation", "products");
const auditRoot = path.join(projectRoot, "output", "navbar-preview-audit");
const paper = "#ffffff";

// Prefer the first catalog image unless a later source is demonstrably clearer
// when isolated on the navbar's neutral canvas.
const sourceOverrides = new Map([
  ["totem-digital", "/products/totem-digital/02.jpg"],
  [
    "totem-interactivo",
    "/navigation/product-clean-sources/totem-interactivo.png",
  ],
  [
    "pantallas-y-pizarras-interactivas",
    "/products/pantallas-y-pizarras-interactivas/05.jpg",
  ],
  [
    "terminales-interactivas-pantallas-pequenas",
    "/products/terminales-interactivas-pantallas-pequenas/02.jpg",
  ],
  [
    "pantalla-dual-solum-49-55",
    "/navigation/product-clean-sources/pantalla-dual-solum-49-55.png",
  ],
  [
    "bar-display-pantallas-stretch-solum",
    "/products/bar-display-pantallas-stretch-solum/01.png",
  ],
  ["kiosco-autogestion-3nstar", "/products/kiosco-autogestion-3nstar/03.png"],
  ["kiosco-autogestion-gastronomia", "/products/kiosco-autogestion-gastronomia/04.jpg"],
  ["mini-totem-digital", "/products/mini-totem-digital/02.jpg"],
  ["kiosco-autogestion-samsung", "/products/kiosco-autogestion-samsung/06.webp"],
  ["vidrieras-digitales", "/products/vidrieras-digitales/07.jpg"],
  ["pizarra-android-eboard-wad", "/products/pizarra-android-eboard-wad/05.avif"],
  ["pantallas-touch", "/products/pantallas-touch/05.webp"],
  ["pantallas-led", "/products/pantallas-led/01.jpg"],
  ["poster-led", "/products/poster-led/01.png"],
  ["totem-led-outdoor", "/products/totem-led-outdoor/01.jpg"],
  ["carteles-redondos-led", "/products/carteles-redondos-led/01.png"],
  ["shelf-led", "/products/shelf-led/05.png"],
  ["totem-led-outdoor-pedestal", "/products/totem-led-outdoor-pedestal/04.png"],
  ["gestion-turnos", "/products/gestion-turnos/02.png"],
  [
    "lustrador-calzado",
    "/navigation/product-clean-sources/lustrador-calzado.png",
  ],
  [
    "terminal-interactiva-sillas-ruedas",
    "/navigation/product-clean-sources/terminal-interactiva-sillas-ruedas.png",
  ],
  [
    "totem-cargador-celulares",
    "/navigation/product-clean-sources/totem-cargador-celulares.png",
  ],
  [
    "videoconferencias",
    "/navigation/product-clean-sources/videoconferencias.png",
  ],
  [
    "videowalls-samsung",
    "/navigation/product-clean-sources/videowalls-samsung.png",
  ],
]);

async function normalizeWhiteCanvas(input) {
  const { data, info } = await sharp(input)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let offset = 0; offset < data.length; offset += info.channels) {
    const red = data[offset];
    const green = data[offset + 1];
    const blue = data[offset + 2];
    const brightest = Math.max(red, green, blue);
    const darkest = Math.min(red, green, blue);

    if (darkest >= 245 && brightest - darkest <= 14) {
      data[offset] = 255;
      data[offset + 1] = 255;
      data[offset + 2] = 255;
    }
  }

  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
    .png()
    .toBuffer();
}

function slugFromHref(href) {
  return href.split("/").at(-1);
}

function escapeXml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    };
    return entities[character];
  });
}

function truncate(value, limit) {
  return value.length > limit ? `${value.slice(0, limit - 1)}…` : value;
}

async function renderPreview(sourcePath, destinationPath) {
  let source = sharp(sourcePath).rotate();

  if (sourcePath.includes(`${path.sep}product-clean-sources${path.sep}`)) {
    source = source.trim({ background: paper, threshold: 8 });
  }

  const resizedProduct = await source
    .resize(544, 272, {
      fit: "contain",
      background: paper,
      withoutEnlargement: true,
    })
    .flatten({ background: paper })
    .toBuffer();
  const product = await normalizeWhiteCanvas(resizedProduct);

  await sharp({
    create: { width: 640, height: 320, channels: 3, background: paper },
  })
    .composite([{ input: product, gravity: "center" }])
    .webp({ quality: 84, smartSubsample: true })
    .toFile(destinationPath);
}

async function renderAuditSheet(column, columnIndex) {
  const cellWidth = 320;
  const cellHeight = 205;
  const columns = 3;
  const rows = Math.ceil(column.items.length / columns);
  const composites = [];

  for (const [itemIndex, item] of column.items.entries()) {
    const slug = slugFromHref(item.href);
    const previewPath = path.join(outputRoot, `${slug}.webp`);
    const preview = await sharp(previewPath)
      .resize(cellWidth, 160, { fit: "contain", background: paper })
      .png()
      .toBuffer();
    const label = Buffer.from(`
      <svg width="${cellWidth}" height="45" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${paper}" />
        <text x="10" y="18" font-family="Arial, sans-serif" font-size="12" fill="#07172b">
          ${escapeXml(`${String(itemIndex + 1).padStart(2, "0")} ${truncate(item.label, 40)}`)}
        </text>
        <text x="10" y="35" font-family="Arial, sans-serif" font-size="10" fill="#41566d">
          ${escapeXml(slug)}
        </text>
      </svg>
    `);
    const cell = await sharp({
      create: { width: cellWidth, height: cellHeight, channels: 3, background: paper },
    })
      .composite([
        { input: preview, top: 0, left: 0 },
        { input: label, top: 160, left: 0 },
      ])
      .png()
      .toBuffer();

    composites.push({
      input: cell,
      left: (itemIndex % columns) * cellWidth,
      top: Math.floor(itemIndex / columns) * cellHeight,
    });
  }

  const safeTitle = column.title.toLocaleLowerCase("es-AR").replaceAll(" ", "-");
  await sharp({
    create: {
      width: cellWidth * columns,
      height: cellHeight * rows,
      channels: 3,
      background: "#d8dde3",
    },
  })
    .composite(composites)
    .png()
    .toFile(
      path.join(auditRoot, `${String(columnIndex + 1).padStart(2, "0")}-${safeTitle}.png`),
    );
}

async function renderCandidateSheet(column, columnIndex, productsBySlug) {
  const labelWidth = 240;
  const thumbWidth = 170;
  const rowHeight = 125;
  const candidateCount = 8;
  const composites = [];

  for (const [itemIndex, item] of column.items.entries()) {
    const slug = slugFromHref(item.href);
    const product = productsBySlug.get(slug);
    const label = Buffer.from(`
      <svg width="${labelWidth}" height="${rowHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${paper}" />
        <text x="10" y="24" font-family="Arial, sans-serif" font-size="12" fill="#07172b">
          ${escapeXml(truncate(item.label, 31))}
        </text>
        <text x="10" y="43" font-family="Arial, sans-serif" font-size="10" fill="#41566d">
          ${escapeXml(slug)}
        </text>
      </svg>
    `);
    composites.push({ input: label, left: 0, top: itemIndex * rowHeight });

    for (const [candidateIndex, source] of product.images.slice(0, candidateCount).entries()) {
      const sourcePath = path.join(publicRoot, source.slice(1));
      const thumbnail = await sharp(sourcePath)
        .rotate()
        .resize(thumbWidth, 100, { fit: "contain", background: paper })
        .flatten({ background: paper })
        .png()
        .toBuffer();
      const candidateLabel = Buffer.from(`
        <svg width="${thumbWidth}" height="25" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="${paper}" />
          <text x="6" y="17" font-family="Arial, sans-serif" font-size="10" fill="#41566d">
            ${escapeXml(`${candidateIndex + 1} · ${path.basename(source)}`)}
          </text>
        </svg>
      `);
      composites.push({
        input: thumbnail,
        left: labelWidth + candidateIndex * thumbWidth,
        top: itemIndex * rowHeight,
      });
      composites.push({
        input: candidateLabel,
        left: labelWidth + candidateIndex * thumbWidth,
        top: itemIndex * rowHeight + 100,
      });
    }
  }

  await sharp({
    create: {
      width: labelWidth + candidateCount * thumbWidth,
      height: column.items.length * rowHeight,
      channels: 3,
      background: "#d8dde3",
    },
  })
    .composite(composites)
    .png()
    .toFile(
      path.join(
        auditRoot,
        `${String(columnIndex + 1).padStart(2, "0")}-candidates.png`,
      ),
    );
}

await mkdir(outputRoot, { recursive: true });
await mkdir(auditRoot, { recursive: true });

const productsBySlug = new Map(products.map((product) => [product.slug, product]));
let generated = 0;

for (const column of megaMenuColumns) {
  for (const item of column.items) {
    const slug = slugFromHref(item.href);
    const product = productsBySlug.get(slug);
    if (!product) throw new Error(`No existe el producto ${slug}`);

    const source = sourceOverrides.get(slug) ?? product.images[0];
    const sourcePath = path.join(publicRoot, source.slice(1));
    await readFile(sourcePath);
    await renderPreview(sourcePath, path.join(outputRoot, `${slug}.webp`));
    generated += 1;
  }
}

for (const [columnIndex, column] of megaMenuColumns.entries()) {
  await renderAuditSheet(column, columnIndex);
  await renderCandidateSheet(column, columnIndex, productsBySlug);
}

console.log(`Previews del navbar generadas: ${generated}`);
