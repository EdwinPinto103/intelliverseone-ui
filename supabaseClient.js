import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zbwiccmsadmghwvsbdkv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpid2ljY21zYWRtZ2h3dnNiZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NzEzOTgsImV4cCI6MjA2NDA0NzM5OH0.S15bKIqsU2y64au9iYrI4cODPk4PEa7nWfy4glkWuhc';

export const supabase = createClient(supabaseUrl, supabaseKey);
