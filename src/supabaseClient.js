import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://malouubicqtdnuglcxyw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hbG91dWJpY3F0ZG51Z2xjeHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTg2NzUsImV4cCI6MjA3MzQ5NDY3NX0.Opt7OoMkyjCEPGxUVHhcD6b6DVtWodlwO9QCEMiRVyg"

export const supabase = createClient(supabaseUrl, supabaseKey); 