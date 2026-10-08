import "server-only";
import { getSupabase } from "@/lib/supabase/server";
import type { ContactPayload } from "@/lib/contact-schema";

/**
 * Guarda la consulta en public.contact_inquiries para gestionarla desde panel-adinnov (sección Consultas).
 * La publishable key sólo tiene permiso de INSERT sobre esa tabla: no puede leer consultas ni cambiar su estado.
 */
export async function saveContactInquiry(
  payload: ContactPayload,
  product?: { slug: string; title: string },
): Promise<boolean> {
  try {
    const { error } = await getSupabase()
      .from("contact_inquiries")
      .insert({
        name: payload.name,
        email: payload.email,
        phone: payload.phone ?? null,
        company: payload.company ?? null,
        intent: payload.intent,
        product_slug: product?.slug ?? null,
        product_title: product?.title ?? null,
        quantity: payload.quantity ?? null,
        location: payload.location ?? null,
        start_date: payload.startDate ?? null,
        end_date: payload.endDate ?? null,
        event_type: payload.eventType ?? null,
        message: payload.message,
      });
    if (error) {
      console.error(`[contacto] No se pudo guardar la consulta en Supabase: ${error.message}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[contacto] No se pudo guardar la consulta en Supabase.", error);
    return false;
  }
}
