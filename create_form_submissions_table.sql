-- Create form_submissions table with Row Level Security
CREATE TABLE IF NOT EXISTS form_submissions (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  position TEXT,
  message TEXT NOT NULL,
  language TEXT NOT NULL,
  form_type TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows insertion from the client
CREATE POLICY "Allow anonymous insert" ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create a policy that only allows the authenticated users to select
CREATE POLICY "Allow authenticated select" ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- This comment explains how to use this SQL file:
-- 1. Go to your Supabase dashboard (https://app.supabase.com)
-- 2. Navigate to your project
-- 3. Go to the SQL Editor
-- 4. Paste this SQL and execute it
-- 5. Verify the table was created in the Table Editor 