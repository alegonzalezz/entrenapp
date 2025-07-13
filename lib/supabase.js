// lib/supabase.js
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY // usá la secret key solo en backend

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
