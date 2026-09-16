import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { CASES_TAG } from "@/lib/case-studies/map";
import { CATALOG_TAG } from "@/lib/catalog/map";

function isAuthorized(request: Request): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  const header = request.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice("Bearer ".length) : "";
  if (!secret || !token) return false;

  const expected = Buffer.from(secret);
  const received = Buffer.from(token);
  return expected.length === received.length && timingSafeEqual(expected, received);
}

/** Webhook que usa el panel para publicar al instante cambios del catálogo y de los casos de éxito. */
export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  const tags = [CATALOG_TAG, CASES_TAG];
  for (const tag of tags) revalidateTag(tag, { expire: 0 });
  return NextResponse.json(
    { ok: true, revalidated: tags, now: Date.now() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
