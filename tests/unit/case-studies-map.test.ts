import { describe, expect, it } from "vitest";
import { mapCaseStudy, resolveCaseSeo, type CaseStudyRow } from "../../src/lib/case-studies/map";

const SUPABASE_URL = "https://demo.supabase.co";
const SITE_URL = "https://adinnov.com.ar";

function row(overrides: Partial<CaseStudyRow> = {}): CaseStudyRow {
  return {
    id: "11111111-1111-4111-8111-111111111111",
    slug: "videowall-centro-de-monitoreo",
    title: "Videowall para centro de monitoreo",
    summary: "Doce pantallas sincronizadas para operar 24/7.",
    category: "Videowalls",
    project_date: "2026-03-01",
    client_name: "Cliente SA",
    client_industry: "Energía",
    client_location: "Neuquén",
    client_logo_path: "case-studies/1/logo-a.png",
    cover_path: "case-studies/1/cover-a.jpg",
    cover_alt: "Sala de monitoreo con videowall",
    cover_width: 1600,
    cover_height: 900,
    challenge: "Necesitaban visibilidad.",
    solution: "Videowall 3x4.",
    process: "",
    results: "Menos tiempo de respuesta.",
    metrics: [{ value: "12", label: "pantallas" }, { value: 3 }, null],
    cta_title: null,
    cta_text: null,
    seo_title: null,
    seo_description: null,
    focus_keyword: "videowall",
    canonical_url: null,
    is_indexable: true,
    published_at: "2026-04-01T12:00:00Z",
    updated_at: "2026-04-02T12:00:00Z",
    sort_order: 1,
    case_study_images: [
      { storage_path: "case-studies/1/gallery-b.jpg", alt: "", caption: "Detalle", width: 800, height: 600, position: 2 },
      { storage_path: "case-studies/1/gallery-a.jpg", alt: "Vista general", caption: "", width: 1200, height: 800, position: 1 },
    ],
    case_study_products: [
      { position: 2, products: { slug: "c-control-videowalls", title: "C-Control" } },
      { position: 1, products: { slug: "video-walls", title: "Video walls" } },
      { position: 3, products: null },
    ],
    ...overrides,
  };
}

describe("mapCaseStudy", () => {
  it("arma URLs públicas, ordena galería y productos y descarta métricas inválidas", () => {
    const caseStudy = mapCaseStudy(row(), SUPABASE_URL);

    expect(caseStudy.cover).toEqual({
      src: `${SUPABASE_URL}/storage/v1/object/public/case-study-media/case-studies/1/cover-a.jpg`,
      alt: "Sala de monitoreo con videowall",
      caption: "",
      width: 1600,
      height: 900,
    });
    expect(caseStudy.client.logo).toContain("/case-study-media/case-studies/1/logo-a.png");
    expect(caseStudy.gallery.map((image) => image.caption)).toEqual(["", "Detalle"]);
    expect(caseStudy.gallery[1].alt).toBe("Videowall para centro de monitoreo");
    expect(caseStudy.products.map((product) => product.slug)).toEqual(["video-walls", "c-control-videowalls"]);
    expect(caseStudy.metrics).toEqual([{ value: "12", label: "pantallas" }]);
  });

  it("no expone portada sin dimensiones", () => {
    expect(mapCaseStudy(row({ cover_width: null }), SUPABASE_URL).cover).toBeNull();
    expect(mapCaseStudy(row({ cover_path: null }), SUPABASE_URL).cover).toBeNull();
  });

  it("tolera filas de la vista previa sin relaciones", () => {
    const caseStudy = mapCaseStudy(
      row({ case_study_images: undefined as never, case_study_products: undefined as never }),
      SUPABASE_URL,
    );
    expect(caseStudy.gallery).toEqual([]);
    expect(caseStudy.products).toEqual([]);
  });
});

describe("resolveCaseSeo", () => {
  it("usa título, resumen y URL propia cuando no hay SEO cargado", () => {
    const seo = resolveCaseSeo(mapCaseStudy(row(), SUPABASE_URL), SITE_URL);
    expect(seo).toEqual({
      title: "Videowall para centro de monitoreo",
      description: "Doce pantallas sincronizadas para operar 24/7.",
      path: "/casos-de-exito/videowall-centro-de-monitoreo",
      canonical: `${SITE_URL}/casos-de-exito/videowall-centro-de-monitoreo`,
      indexable: true,
    });
  });

  it("prioriza los valores SEO configurados en el panel", () => {
    const seo = resolveCaseSeo(
      mapCaseStudy(
        row({
          seo_title: "Videowall 24/7 en Neuquén",
          seo_description: "Caso real de videowall.",
          canonical_url: "https://adinnov.com.ar/otra-url",
          is_indexable: false,
        }),
        SUPABASE_URL,
      ),
      SITE_URL,
    );
    expect(seo.title).toBe("Videowall 24/7 en Neuquén");
    expect(seo.description).toBe("Caso real de videowall.");
    expect(seo.canonical).toBe("https://adinnov.com.ar/otra-url");
    expect(seo.indexable).toBe(false);
  });
});
