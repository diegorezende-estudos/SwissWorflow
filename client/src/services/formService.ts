import { useSupabase } from '@/lib/supabase'

export interface FormSubmissionData {
  language: string;
  form_type: string; // To distinguish between different forms, e.g., 'contact', 'newsletter'
  name: string;
  email: string;
  company?: string; // Optional field
  position?: string; // Optional field
  message: string;
}

export async function submitForm(submissionData: FormSubmissionData) {
  try {
    const supabase = useSupabase();
    
    // Log the submission attempt for debugging
    console.log('Attempting to submit form with data:', {
      ...submissionData,
      email: '****@****.com', // Hide actual email for privacy in logs
    });

    const { data, error } = await supabase
      .from('form_submissions') // Ensure this matches your table name
      .insert([submissionData]);

    if (error) {
      console.error('Error submitting form to Supabase:', error);
      console.error('Error details:', error.message, error.code, error.details);
      throw error; // Rethrow the error to be caught by the calling function
    }

    return data; // Returns the array of inserted rows (usually one)
  } catch (err) {
    console.error('Form submission failed:', err);
    throw err;
  }
} 