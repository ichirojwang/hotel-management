import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kdyotzkfqhqmrtqptjwr.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkeW90emtmcWhxbXJ0cXB0andyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTkxNTQsImV4cCI6MjA1MzgzNTE1NH0.MiIyVo9B81eQ1Quwokae1nok-QmlO8Y6QxVXTrF1Ojc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
