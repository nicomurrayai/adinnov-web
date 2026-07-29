import { existsSync } from "node:fs";
import path from "node:path";
import { categories } from "../content/categories.ts";
import {
  RENTAL_PRODUCT_SLUGS,
} from "../content/productMeta.ts";
import { isPendingEditorialClaim } from "../content/product-review.ts";
import { getAllProducts } from "../src/lib/content.ts";

const publicDirectory = path.resolve(process.cwd(), "public");
const products = getAllProducts();
const errors = [];
const warnings = [];

function error(message) {
  errors.push(message);
}

function warning(message) {
  warnings.push(message);
}

function validateText(value, label) {
  if (typeof value !== "string" || value.trim().length === 0) {
    error(`${label}: el texto es obligatorio.`);
  }
}

function validateAsset(source, label) {
  if (!source.startsWith("/")) {
    error(`${label}: la ruta debe comenzar con / (${source}).`);
    return;
  }

  const pathname = decodeURIComponent(source.split(/[?#]/, 1)[0]);
  const absolutePath = path.resolve(publicDirectory, `.${pathname}`);
  const relativePath = path.relative(publicDirectory, absolutePath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    error(`${label}: la ruta sale del directorio public (${source}).`);
    return;
  }
  if (!existsSync(absolutePath)) {
    error(`${label}: no existe ${source}.`);
  }
}

if (products.length !== 47) {
  error(`Catálogo: se esperaban 47 productos y se encontraron ${products.length}.`);
}

if (categories.length !== 6) {
  error(`Familias: se esperaban 6 y se encontraron ${categories.length}.`);
}

const categoryIds = new Set();
for (const category of categories) {
  if (categoryIds.has(category.id)) {
    error(`Familias: id duplicado ${category.id}.`);
  }
  categoryIds.add(category.id);
  validateText(category.name, `Familia ${category.id} / nombre`);
  validateText(category.description, `Familia ${category.id} / descripción`);
}

const productSlugs = new Set();
for (const product of products) {
  const prefix = `Producto ${product.slug || "sin-slug"}`;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.slug)) {
    error(`${prefix}: slug inválido.`);
  }
  if (productSlugs.has(product.slug)) {
    error(`${prefix}: slug duplicado.`);
  }
  productSlugs.add(product.slug);

  validateText(product.title, `${prefix} / título`);
  validateText(product.description, `${prefix} / descripción`);

  if (!categoryIds.has(product.family)) {
    error(`${prefix}: familia desconocida ${product.family}.`);
  }
  if (
    !Array.isArray(product.environments) ||
    product.environments.length === 0 ||
    product.environments.some(
      (environment) => !["indoor", "outdoor"].includes(environment),
    )
  ) {
    error(`${prefix}: entornos inválidos.`);
  }
  if (!["touch", "non-touch", "mixed"].includes(product.interaction)) {
    error(`${prefix}: interacción inválida.`);
  }
  if (
    typeof product.availability?.sale !== "boolean" ||
    typeof product.availability?.rental !== "boolean"
  ) {
    error(`${prefix}: disponibilidad incompleta.`);
  }
  if (product.availability?.sale !== true) {
    error(`${prefix}: todos los productos deben estar disponibles para venta.`);
  }

  if (!Array.isArray(product.media) || product.media.length === 0) {
    error(`${prefix}: debe tener al menos un medio.`);
  } else {
    if (product.media.length > 8) {
      error(`${prefix}: tiene más de 8 medios publicados.`);
    }
    if (product.media.length < 5) {
      warning(
        `${prefix}: tiene ${product.media.length} medios; queda pendiente completar la curaduría de 5–8 activos.`,
      );
    }

    const mediaSources = new Set();
    for (const [index, media] of product.media.entries()) {
      const mediaPrefix = `${prefix} / medio ${index + 1}`;
      if (!["image", "video"].includes(media.type)) {
        error(`${mediaPrefix}: tipo inválido.`);
      }
      validateText(media.src, `${mediaPrefix} / src`);
      validateText(media.alt, `${mediaPrefix} / alt`);
      if (media.src) validateAsset(media.src, mediaPrefix);
      if (media.poster) validateAsset(media.poster, `${mediaPrefix} / poster`);
      if (media.type === "video" && !media.poster) {
        error(`${mediaPrefix}: un video debe declarar poster.`);
      }
      if (
        !Number.isFinite(media.width) ||
        media.width <= 0 ||
        !Number.isFinite(media.height) ||
        media.height <= 0
      ) {
        error(`${mediaPrefix}: debe declarar dimensiones positivas.`);
      }
      if (mediaSources.has(media.src)) {
        error(`${mediaPrefix}: medio duplicado ${media.src}.`);
      }
      mediaSources.add(media.src);
    }
  }

  if (!Array.isArray(product.highlights) || product.highlights.length === 0) {
    error(`${prefix}: debe tener al menos un destacado.`);
  }

  if (!Array.isArray(product.variants) || product.variants.length === 0) {
    error(`${prefix}: debe declarar al menos una configuración o variante.`);
  }
  for (const [variantIndex, variant] of (product.variants ?? []).entries()) {
    validateText(variant.name, `${prefix} / variante ${variantIndex + 1} / nombre`);
    if (variant.description !== undefined) {
      validateText(
        variant.description,
        `${prefix} / variante ${variantIndex + 1} / descripción`,
      );
    }
    for (const [specIndex, spec] of (variant.specs ?? []).entries()) {
      validateText(
        spec.label,
        `${prefix} / variante ${variantIndex + 1} / dato ${specIndex + 1} / etiqueta`,
      );
      validateText(
        spec.value,
        `${prefix} / variante ${variantIndex + 1} / dato ${specIndex + 1} / valor`,
      );
    }
  }
  if (product.highlights?.length > 4) {
    error(`${prefix}: no puede tener más de 4 destacados.`);
  }
  for (const [index, highlight] of (product.highlights ?? []).entries()) {
    validateText(highlight.title, `${prefix} / destacado ${index + 1} / título`);
    validateText(
      highlight.description,
      `${prefix} / destacado ${index + 1} / descripción`,
    );
    if (isPendingEditorialClaim(highlight.description)) {
      error(`${prefix}: un destacado contiene un claim pendiente de revisión.`);
    }
  }

  if (
    !Array.isArray(product.specGroups) ||
    product.specGroups.length < 3 ||
    product.specGroups.length > 6
  ) {
    error(`${prefix}: debe tener entre 3 y 6 grupos técnicos.`);
  }
  for (const [groupIndex, group] of (product.specGroups ?? []).entries()) {
    validateText(group.title, `${prefix} / grupo ${groupIndex + 1} / título`);
    if (!Array.isArray(group.specs) || group.specs.length === 0) {
      error(`${prefix} / grupo ${groupIndex + 1}: no tiene especificaciones.`);
    }
    for (const [specIndex, spec] of (group.specs ?? []).entries()) {
      validateText(
        spec.label,
        `${prefix} / grupo ${groupIndex + 1} / especificación ${specIndex + 1} / etiqueta`,
      );
      validateText(
        spec.value,
        `${prefix} / grupo ${groupIndex + 1} / especificación ${specIndex + 1} / valor`,
      );
      if (isPendingEditorialClaim(spec.value)) {
        error(`${prefix}: una especificación contiene un claim pendiente.`);
      }
    }
  }

  if (!Array.isArray(product.useCases) || product.useCases.length === 0) {
    error(`${prefix}: debe declarar casos de uso.`);
  }
  if (
    !Array.isArray(product.includedServices) ||
    product.includedServices.length === 0
  ) {
    error(`${prefix}: debe declarar servicios incluidos o cotizables.`);
  }
  if (!Array.isArray(product.faqs) || product.faqs.length === 0) {
    error(`${prefix}: debe declarar preguntas frecuentes.`);
  }
  validateText(product.seo?.title, `${prefix} / SEO / título`);
  validateText(product.seo?.description, `${prefix} / SEO / descripción`);

  const publishableText = [
    product.title,
    product.description,
    ...(product.highlights ?? []).flatMap((highlight) => [
      highlight.title,
      highlight.description,
    ]),
    ...(product.variants ?? []).flatMap((variant) => [
      variant.name,
      variant.description ?? "",
      ...(variant.specs ?? []).flatMap((spec) => [spec.label, spec.value]),
    ]),
    ...(product.specGroups ?? []).flatMap((group) => [
      group.title,
      ...group.specs.flatMap((spec) => [spec.label, spec.value]),
    ]),
    ...(product.useCases ?? []),
    ...(product.includedServices ?? []),
    ...(product.faqs ?? []).flatMap((faq) => [faq.question, faq.answer]),
    product.seo?.title ?? "",
    product.seo?.description ?? "",
  ];
  if (publishableText.some((value) => isPendingEditorialClaim(value))) {
    error(`${prefix}: el modelo publicable contiene un claim editorial pendiente.`);
  }

  const relatedSlugs = new Set();
  for (const relatedSlug of product.relatedSlugs ?? []) {
    if (relatedSlug === product.slug) {
      error(`${prefix}: no puede relacionarse consigo mismo.`);
    }
    if (relatedSlugs.has(relatedSlug)) {
      error(`${prefix}: relación duplicada ${relatedSlug}.`);
    }
    relatedSlugs.add(relatedSlug);
  }
}

for (const product of products) {
  for (const relatedSlug of product.relatedSlugs ?? []) {
    if (!productSlugs.has(relatedSlug)) {
      error(`Producto ${product.slug}: relación inexistente ${relatedSlug}.`);
    }
  }
}

const actualRentalSlugs = products
  .filter((product) => product.availability.rental)
  .map((product) => product.slug)
  .sort();
const expectedRentalSlugs = [...RENTAL_PRODUCT_SLUGS].sort();
if (JSON.stringify(actualRentalSlugs) !== JSON.stringify(expectedRentalSlugs)) {
  error(
    `Alquileres: se esperaba ${expectedRentalSlugs.join(", ")} y se obtuvo ${actualRentalSlugs.join(", ")}.`,
  );
}

for (const message of warnings) console.warn(`ADVERTENCIA · ${message}`);

if (errors.length > 0) {
  for (const message of errors) console.error(`ERROR · ${message}`);
  console.error(
    `\nValidación fallida: ${errors.length} error(es), ${warnings.length} advertencia(s).`,
  );
  process.exit(1);
}

console.log(
  `Contenido válido: ${products.length} productos, ${categories.length} familias, ${actualRentalSlugs.length} equipos en alquiler y ${warnings.length} advertencia(s) editoriales.`,
);
