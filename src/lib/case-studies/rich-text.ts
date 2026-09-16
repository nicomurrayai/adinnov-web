/**
 * Formato de texto de los casos de éxito: párrafos (línea en blanco), listas ("- "),
 * subtítulos ("### ") y negritas (**texto**). Se parsea a nodos y se renderiza como React,
 * nunca como HTML, así que el contenido del panel no puede inyectar marcado.
 */

export type RichInline = { type: "text" | "strong"; value: string };

export type RichBlock =
  | { type: "paragraph"; children: RichInline[] }
  | { type: "heading"; children: RichInline[] }
  | { type: "list"; items: RichInline[][] };

const LIST_ITEM = /^\s*[-*•]\s+(.*)$/;
const HEADING = /^\s*#{2,4}\s+(.*)$/;

export function parseInline(text: string): RichInline[] {
  const nodes: RichInline[] = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push({ type: "text", value: text.slice(lastIndex, index) });
    nodes.push({ type: "strong", value: match[1] });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push({ type: "text", value: text.slice(lastIndex) });
  return nodes;
}

export function parseRichText(source: string): RichBlock[] {
  const blocks: RichBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", children: parseInline(paragraph.join(" ")) });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length > 0) {
      blocks.push({ type: "list", items: list.map(parseInline) });
      list = [];
    }
  };

  for (const rawLine of source.replace(/\r\n?/g, "\n").split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = HEADING.exec(line);
    if (heading?.[1].trim()) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", children: parseInline(heading[1].trim()) });
      continue;
    }

    const item = LIST_ITEM.exec(line);
    if (item?.[1].trim()) {
      flushParagraph();
      list.push(item[1].trim());
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

/** Texto plano sin marcas de formato (para descripciones y datos estructurados). */
export function richTextToPlain(source: string): string {
  return parseRichText(source)
    .flatMap((block) =>
      block.type === "list"
        ? block.items.map((item) => item.map((node) => node.value).join(""))
        : [block.children.map((node) => node.value).join("")],
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
