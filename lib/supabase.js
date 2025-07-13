// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY // usá la secret key solo en backend

export const supabase = createClient(supabaseUrl, supabaseKey)
