import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabaseUrl(): string {
  const url = process.env.SUPABASE_URL;
  if (!url) throw new Error("Falta la variable de entorno SUPABASE_URL.");
  return url.replace(/\/$/, "");
}

/**
 * Cliente de sólo lectura para el catálogo público. Usa la publishable key
 * únicamente en el servidor; las políticas RLS limitan la lectura a productos visibles.
 */
export function getSupabase(): SupabaseClient {
  if (client) return client;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!key) throw new Error("Falta la variable de entorno SUPABASE_PUBLISHABLE_KEY.");
  client = createClient(getSupabaseUrl(), key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  return client;
}
