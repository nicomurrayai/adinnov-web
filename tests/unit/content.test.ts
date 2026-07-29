import { describe, expect, it } from "vitest";
import { categories } from "../../content/categories";
import { RENTAL_PRODUCT_SLUGS } from "../../content/productMeta";
import {
  filterProducts,
  getAllProducts,
  getCatalogProducts,
  getProduct,
  getProductSlugs,
  getRelatedProducts,
} from "../../src/lib/content";

const expectedRentalSlugs = [
  "atril-digital",
  "pantallas-led",
  "pantallas-touch",
  "poster-led",
  "samsung-business-tv",
  "terminales-interactivas-pantallas-grandes",
  "totem-digital",
  "totem-interactivo",
].sort();

describe("catálogo público", () => {
  it("conserva las 47 fichas con slugs únicos", () => {
    const products = getAllProducts();
    const slugs = getProductSlugs();

    expect(products).toHaveLength(47);
    expect(slugs).toHaveLength(47);
    expect(new Set(slugs).size).toBe(47);
    expect(products.every((product) => product.slug.length > 0)).toBe(true);
  });

  it("expone disponibilidad explícita y exactamente ocho alquileres", () => {
    const products = getAllProducts();
    const rentalSlugs = products
      .filter((product) => product.availability.rental)
      .map((product) => product.slug)
      .sort();

    expect(products.every((product) => product.availability.sale)).toBe(true);
    expect(rentalSlugs).toEqual(expectedRentalSlugs);
    expect([...RENTAL_PRODUCT_SLUGS].sort()).toEqual(expectedRentalSlugs);
  });

  it("enriquece cada producto con medios, contenido técnico y relaciones válidas", () => {
    const products = getAllProducts();
    const slugs = new Set(products.map((product) => product.slug));

    for (const product of products) {
      expect(product.media.length, product.slug).toBeGreaterThan(0);
      expect(product.media.length, product.slug).toBeLessThanOrEqual(8);
      expect(product.highlights.length, product.slug).toBeGreaterThan(0);
      expect(product.highlights.length, product.slug).toBeLessThanOrEqual(4);
      expect(product.specGroups.length, product.slug).toBeGreaterThan(0);
      expect(product.specGroups.length, product.slug).toBeLessThanOrEqual(6);
      expect(product.environments.length, product.slug).toBeGreaterThan(0);
      expect(product.faqs.length, product.slug).toBeGreaterThan(0);
      expect(product.relatedSlugs, product.slug).toHaveLength(3);
      expect(product.relatedSlugs, product.slug).not.toContain(product.slug);
      expect(
        product.relatedSlugs.every((relatedSlug) => slugs.has(relatedSlug)),
        product.slug,
      ).toBe(true);

      for (const media of product.media) {
        expect(media.src, product.slug).toMatch(/^\//);
        expect(media.alt.trim().length, product.slug).toBeGreaterThan(0);
      }
    }
  });

  it("genera resúmenes buscables normalizados", () => {
    const summaries = getCatalogProducts();

    expect(summaries).toHaveLength(47);
    for (const summary of summaries) {
      expect(summary.searchText).toBe(summary.searchText.toLocaleLowerCase("es-AR"));
      expect(summary.searchText.normalize("NFD")).not.toMatch(/[\u0300-\u036f]/);
      expect(summary.media.length).toBeLessThanOrEqual(1);
    }
  });

  it("filtra por familia, entorno, interacción y modalidad", () => {
    for (const category of categories) {
      const matches = filterProducts({ family: category.id });
      expect(matches.length, category.id).toBeGreaterThan(0);
      expect(matches.every((product) => product.family === category.id)).toBe(true);
    }

    const exterior = filterProducts({ environment: "outdoor" });
    expect(exterior.length).toBeGreaterThan(0);
    expect(
      exterior.every((product) => product.environments.includes("outdoor")),
    ).toBe(true);

    const tactile = filterProducts({ interaction: "touch" });
    expect(tactile.length).toBeGreaterThan(0);
    expect(tactile.every((product) => product.interaction === "touch")).toBe(true);

    expect(filterProducts({ modality: "rental" })).toHaveLength(8);
    expect(filterProducts({ modality: "sale" })).toHaveLength(47);
  });

  it("busca sin distinguir mayúsculas ni acentos y combina filtros", () => {
    const result = filterProducts({ q: "TOTEM DIGITAL" });
    expect(result.map((product) => product.slug)).toContain("totem-digital");

    const combined = filterProducts({
      family: "led",
      environment: "outdoor",
      modality: "rental",
    });
    expect(combined.map((product) => product.slug)).toEqual(["pantallas-led"]);
  });

  it("resuelve fichas y complementarios sin referencias rotas", () => {
    const product = getProduct("totem-digital");
    expect(product?.slug).toBe("totem-digital");
    expect(getProduct("slug-inexistente")).toBeUndefined();

    const related = getRelatedProducts("totem-digital", 2);
    expect(related).toHaveLength(2);
    expect(related.every((item) => item.slug !== "totem-digital")).toBe(true);
    expect(getRelatedProducts("slug-inexistente")).toEqual([]);
  });
});
