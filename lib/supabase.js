// lib/supabase.js
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY // usá la secret key solo en backend

console.log("KEYS")
console.log(process.env)
console.log(supabaseUrl)
console.log(supabaseKey)
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
