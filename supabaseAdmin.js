import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Do not throw here to keep dev server running; log a warning for developer
  console.warn('Supabase environment variables are not set. See .env.local.example')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

export default supabase
