import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
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

/** Webhook que usa el panel para publicar cambios del catálogo al instante. */
export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  revalidateTag(CATALOG_TAG, { expire: 0 });
  return NextResponse.json(
    { ok: true, revalidated: [CATALOG_TAG], now: Date.now() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
