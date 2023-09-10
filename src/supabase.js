import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hjhnoshvinjjzofcwyuw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqaG5vc2h2aW5qanpvZmN3eXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzMjUyMDMsImV4cCI6MjAwNjkwMTIwM30.psHafdy8QKLJkanfeOzBcYiUPMsq6N-knWIsqZHryDc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
