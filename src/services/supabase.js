/* eslint-disable no-undef */

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nzzogkevyohigjmfflff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56em9na2V2eW9oaWdqbWZmbGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzODY4NjIsImV4cCI6MjAxNzk2Mjg2Mn0.SXq-IS_wQfeSTfJp8ioAFZBxLqZed5U7q54sxDoLoMU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
