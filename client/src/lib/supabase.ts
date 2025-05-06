import { createClient } from '@supabase/supabase-js'

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Log environment variables (only first few characters of the key for security)
console.log("Supabase Environment Variables:");
console.log("VITE_SUPABASE_URL:", supabaseUrl || "Not found");
console.log("VITE_SUPABASE_ANON_KEY:", supabaseAnonKey ? "Exists (value hidden)" : "Not found");

// Check if environment variables are present
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing! Make sure .env file exists and has the correct values.');
  console.error('Check if you need to restart the dev server after creating/updating .env file.');
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

// Export a wrapper function to safely use Supabase (prevents crashes if not initialized)
export const useSupabase = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase client is not initialized. Check your environment variables.');
  }
  return supabase;
}; 