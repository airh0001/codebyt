import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xthtqvkffydjiqgplhrn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0aHRxdmtmZnlkamlxZ3BsaHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MzA5ODAsImV4cCI6MjA4NzQwNjk4MH0.3wuVi3yHhOhsg15VeS2dD5qbIatSPK2F35D5F-jEUmo'

export const supabase = createClient(supabaseUrl, supabaseKey)