export type MegaMenuItem = {
  label: string;
  href: string;
  image: string;
};

export type MegaMenuColumn = {
  title: string;
  href?: string;
  items: MegaMenuItem[];
};

export type MegaMenuColumnId = "productos" | "samsung" | "led" | "software" | "otras";

/** Estructura fija del mega menú. Los productos de cada columna se administran desde el panel. */
export const megaMenuColumnDefinitions: { id: MegaMenuColumnId; title: string; href: string }[] = [
  { id: "productos", title: "Productos", href: "/productos" },
  { id: "samsung", title: "Samsung", href: "/productos?categoria=pantallas" },
  { id: "led", title: "Soluciones LED", href: "/productos?categoria=led" },
  { id: "software", title: "Software", href: "/productos?categoria=software" },
  { id: "otras", title: "Otras soluciones", href: "/productos" },
];

export type MegaMenuEntry = {
  column: string;
  label: string;
  sort: number;
  slug: string;
  image: string;
};

export function buildMegaMenuColumns(entries: MegaMenuEntry[]): MegaMenuColumn[] {
  return megaMenuColumnDefinitions.map((column) => ({
    title: column.title,
    href: column.href,
    items: entries
      .filter((entry) => entry.column === column.id)
      .sort((a, b) => a.sort - b.sort || a.label.localeCompare(b.label, "es"))
      .map((entry) => ({
        label: entry.label,
        href: `/productos/${entry.slug}`,
        image: entry.image,
      })),
  }));
}
