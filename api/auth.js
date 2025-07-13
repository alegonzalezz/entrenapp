import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import supabase from '../lib/supabase.js';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { email, password, application } = req.body;

  if (!email || !password || !application) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const { data, error } = await supabase
  .from('user_auth')
  .select('id, password')
  .eq('email', email)
  .eq('application', application)
  .single();

  if (error || !data || data.password !== password) {
    return res.status(401).json({ message: 'Credenciales inválidas' , error:error});
  }

  const payload = {
    user_id: data.id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 // 1 hora
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return res.status(200).json({ token });
}
