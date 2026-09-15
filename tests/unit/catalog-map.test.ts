import { describe, expect, it } from "vitest";
import { buildMegaMenuColumns } from "../../content/megaMenu";
import {
  mapCatalogRows,
  mapMegaMenuEntries,
  publicStorageUrl,
  type CatalogProductRow,
} from "../../src/lib/catalog/map";

const SUPABASE_URL = "https://demo.supabase.co";

function row(overrides: Partial<CatalogProductRow> & Pick<CatalogProductRow, "id" | "slug">): CatalogProductRow {
  return {
    title: overrides.slug,
    description: "Descripción",
    category_id: "totems",
    short_label: null,
    sort_order: 1,
    available_for_sale: true,
    available_for_rental: false,
    environments: ["indoor"],
    interaction: "non-touch",
    highlights: [{ title: "Conectividad", description: "Wifi" }],
    variants: [{ name: "Configuración por proyecto", description: "Según alcance" }],
    spec_groups: [{ title: "Pantallas", specs: [{ label: "Resolución", value: "4K" }] }],
    use_cases: ["Recepciones"],
    included_services: ["Asesoramiento"],
    faqs: [{ question: "¿Instalación?", answer: "A cotizar" }],
    seo_title: null,
    seo_description: null,
    menu_column: null,
    menu_label: null,
    menu_sort: 0,
    menu_image_path: null,
    product_categories: { family_id: "totems-terminales" },
    product_media: [],
    product_files: [],
    product_related: [],
    ...overrides,
  };
}

const rows: CatalogProductRow[] = [
  row({
    id: "b",
    slug: "totem-interactivo",
    sort_order: 2,
    available_for_rental: true,
    seo_title: "Tótem Interactivo | Adinnov",
    menu_column: "productos",
    menu_sort: 2,
    product_media: [
      { storage_path: "products/totem-interactivo/02.jpg", type: "image", alt: "vista 2", width: 800, height: 600, poster_path: null, position: 2, is_visible: true },
      { storage_path: "products/totem-interactivo/09.jpg", type: "image", alt: "oculta", width: 800, height: 600, poster_path: null, position: 9, is_visible: false },
      { storage_path: "products/totem-interactivo/01.jpg", type: "image", alt: "vista principal", width: 1200, height: 900, poster_path: null, position: 1, is_visible: true },
    ],
    product_files: [{ storage_path: "products/b/ficha.pdf", label: "Ficha técnica", size_bytes: 2048, position: 1 }],
    product_related: [
      { related_id: "missing", position: 1 },
      { related_id: "a", position: 2 },
    ],
  }),
  row({
    id: "a",
    slug: "totem-digital",
    sort_order: 1,
    category_id: "led",
    product_categories: null,
    menu_column: "productos",
    menu_label: "Totem Digital",
    menu_sort: 1,
    menu_image_path: "navigation/totem-digital.webp",
  }),
];

describe("mapeo del catálogo desde Supabase", () => {
  const products = mapCatalogRows(rows, SUPABASE_URL);

  it("respeta el orden del sitio", () => {
    expect(products.map((product) => product.slug)).toEqual(["totem-digital", "totem-interactivo"]);
  });

  it("publica sólo medios visibles, ordenados y con URL pública", () => {
    const media = products[1].media;
    expect(media.map((item) => item.alt)).toEqual(["vista principal", "vista 2"]);
    expect(media[0]).toEqual({
      type: "image",
      src: `${SUPABASE_URL}/storage/v1/object/public/product-media/products/totem-interactivo/01.jpg`,
      alt: "vista principal",
      width: 1200,
      height: 900,
    });
  });

  it("conserva la ficha técnica, disponibilidad, SEO y familia", () => {
    const [digital, interactivo] = products;
    expect(interactivo.availability).toEqual({ sale: true, rental: true });
    expect(interactivo.specGroups).toEqual([{ title: "Pantallas", specs: [{ label: "Resolución", value: "4K" }] }]);
    expect(interactivo.seo).toEqual({ title: "Tótem Interactivo | Adinnov", description: undefined });
    expect(interactivo.family).toBe("totems-terminales");
    expect(digital.family).toBe("led");
  });

  it("resuelve relacionados visibles en orden e ignora los inexistentes", () => {
    expect(products[1].relatedSlugs).toEqual(["totem-digital"]);
  });

  it("expone los PDFs descargables", () => {
    expect(products[1].files).toEqual([
      {
        label: "Ficha técnica",
        sizeBytes: 2048,
        url: `${SUPABASE_URL}/storage/v1/object/public/product-files/products/b/ficha.pdf`,
      },
    ]);
    expect(products[0].files).toEqual([]);
  });

  it("arma el mega menú con preview propia o portada y columnas fijas", () => {
    const columns = buildMegaMenuColumns(mapMegaMenuEntries(rows, SUPABASE_URL));
    expect(columns.map((column) => column.title)).toEqual([
      "Productos",
      "Samsung",
      "Soluciones LED",
      "Software",
      "Otras soluciones",
    ]);
    expect(columns[0].items).toEqual([
      {
        label: "Totem Digital",
        href: "/productos/totem-digital",
        image: publicStorageUrl(SUPABASE_URL, "product-media", "navigation/totem-digital.webp"),
      },
      {
        label: "totem-interactivo",
        href: "/productos/totem-interactivo",
        image: publicStorageUrl(SUPABASE_URL, "product-media", "products/totem-interactivo/01.jpg"),
      },
    ]);
    expect(columns[1].items).toEqual([]);
  });
});
