import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_JS_SUPABASE_URL!,
  process.env.NEXT_JS_SUPABASE_PUBLIC_KEY!
);
