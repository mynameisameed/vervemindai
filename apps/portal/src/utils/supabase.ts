import { createBrowserClient } from '@supabase/ssr';

// This utility creates a Supabase client for use in browser components (Client Components)
export function createClient() {
  // We use the exclamation mark to tell TS that these environment variables will be defined.
  // Make sure to add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
