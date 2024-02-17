import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cgjklujtxswlqfddjmri.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnamtsdWp0eHN3bHFmZGRqbXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxODg4NzEsImV4cCI6MjAxMDc2NDg3MX0.tqjPFOher0AQ5FMpWSG3Su3t8IZ618Dj7VFxLpdKZvk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
