import { createBrowserClient } from '@supabase/ssr';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// This utility creates a Supabase client for use in browser components (Client Components)
// If NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are not set,
// the client will be non-functional but won't crash the app.
export function createClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('[VerveMind] Supabase credentials not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  }
  return createBrowserClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
}
