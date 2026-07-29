/**
 * Claims intentionally kept outside the renderable product model until the
 * commercial team confirms them. This file is an editorial queue, not UI data.
 */
export type ProductReviewItem = {
  slug: string;
  claim: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
};

export const productReviewQueue: ProductReviewItem[] = [
  {
    slug: "pizarra-interactiva-i3touch-ultra-105",
    claim: "Garantía extendida de ocho años para entornos educativos",
    reason:
      "Confirmar vigencia, condiciones de registro y cobertura local antes de publicarla como beneficio.",
    status: "pending",
  },
  {
    slug: "terminal-interactiva-sillas-ruedas",
    claim: "Cumplimiento de normativas ADA e ISO",
    reason:
      "Identificar las normas y certificaciones exactas aplicables al modelo comercializado en Argentina.",
    status: "pending",
  },
  {
    slug: "totem-digital",
    claim: "Diseño Industrial N.º 93139 — modelo INPI",
    reason:
      "Validar titularidad y estado registral antes de convertirlo en credencial comercial destacada.",
    status: "pending",
  },
];

const blockedFragments = [
  "garantía de 5 años",
  "extiende a 8",
  "cumple con normativas de accesibilidad ada",
  "diseño industrial n° 93139",
  "diseño industrial n.º 93139",
] as const;

export function isPendingEditorialClaim(value: string): boolean {
  const normalized = value.toLocaleLowerCase("es-AR");
  return blockedFragments.some((fragment) => normalized.includes(fragment));
}
