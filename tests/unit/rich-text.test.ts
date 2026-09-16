import { describe, expect, it } from "vitest";
import { parseInline, parseRichText, richTextToPlain } from "../../src/lib/case-studies/rich-text";

describe("parseRichText", () => {
  it("separa párrafos, listas y subtítulos", () => {
    const blocks = parseRichText(
      "Primer párrafo\ncontinúa acá.\n\n### Etapa 1\n- Relevamiento\n- Instalación\nCierre sin línea en blanco",
    );

    expect(blocks).toEqual([
      { type: "paragraph", children: [{ type: "text", value: "Primer párrafo continúa acá." }] },
      { type: "heading", children: [{ type: "text", value: "Etapa 1" }] },
      {
        type: "list",
        items: [[{ type: "text", value: "Relevamiento" }], [{ type: "text", value: "Instalación" }]],
      },
      { type: "paragraph", children: [{ type: "text", value: "Cierre sin línea en blanco" }] },
    ]);
  });

  it("normaliza saltos de línea de Windows y descarta bloques vacíos", () => {
    expect(parseRichText("\r\n\r\nHola\r\n\r\n- \r\n")).toEqual([
      { type: "paragraph", children: [{ type: "text", value: "Hola" }] },
      { type: "paragraph", children: [{ type: "text", value: "-" }] },
    ]);
    expect(parseRichText("   ")).toEqual([]);
  });

  it("no interpreta HTML: queda como texto", () => {
    expect(parseRichText("<script>alert(1)</script>")).toEqual([
      { type: "paragraph", children: [{ type: "text", value: "<script>alert(1)</script>" }] },
    ]);
  });
});

describe("parseInline", () => {
  it("reconoce negritas", () => {
    expect(parseInline("Equipo de **IT** y **operaciones**.")).toEqual([
      { type: "text", value: "Equipo de " },
      { type: "strong", value: "IT" },
      { type: "text", value: " y " },
      { type: "strong", value: "operaciones" },
      { type: "text", value: "." },
    ]);
  });

  it("deja asteriscos sueltos como texto", () => {
    expect(parseInline("5 * 3 **sin cerrar")).toEqual([{ type: "text", value: "5 * 3 **sin cerrar" }]);
  });
});

describe("richTextToPlain", () => {
  it("quita las marcas de formato", () => {
    expect(richTextToPlain("### Título\n\n**Negrita** y texto.\n\n- uno\n- dos")).toBe(
      "Título Negrita y texto. uno dos",
    );
  });
});
