import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghiplnxytrghgtzujdmd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoaXBsbnh5dHJnaGd0enVqZG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxMDY1NjQsImV4cCI6MjAwMDY4MjU2NH0.9Mg5FJCoXGkurhock-5aTgVqbPyY3WFNSgT5Fb0mHMA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
