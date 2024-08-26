import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bpzsrkqpimmnhquzcyhc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwenNya3FwaW1tbmhxdXpjeWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2NDkzMDksImV4cCI6MjAzOTIyNTMwOX0.4FvvG3wtDlU6UgI-6cUBRThQzk5P9FG3Wci7BsLzF_0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
