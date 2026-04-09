import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Vercel automatically injects these environment variables when deployed
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

let supabase;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');

export default async function handler(req, res) {
  // CORS Headers for Vercel
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  if (!supabase) {
    return res.status(500).json({ error: 'Supabase credentials not configured in Vercel.' });
  }

  try {
    // 1. Get the current accurate waitlist count
    const { count, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (countError) throw countError;

    // 2. Implement the Auto-Cutoff Logic
    const MAX_EARLY_ACCESS = 100;
    const isGranted = count < MAX_EARLY_ACCESS;
    const status = isGranted ? 'granted' : 'queued';

    // 3. Insert the new user
    const { error: insertError } = await supabase
      .from('waitlist')
      .insert([{ name, email, status }]);

    if (insertError) {
      // Supabase unique constraint violation error code
      if (insertError.code === '23505') {
        return res.status(400).json({ error: 'This email is already registered.' });
      }
      throw insertError;
    }

    // 4. Fire Async Resend Email Notification
    resend.emails.send({
      from: 'Waitlist Bot <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL || 'your-email@example.com',
      subject: `🎉 New ApplyOS Waitlist: ${name}`,
      html: `
        <h2>New Early Access Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Status:</strong> ${status.toUpperCase()}</p>
        <hr />
        <p><em>Total Waitlist Size: ${count + 1}</em></p>
      `
    }).catch(console.error);

    return res.status(200).json({ success: true, status });

  } catch (error) {
    console.error('Waitlist API Error:', error);
    return res.status(500).json({ error: 'Failed to process waitlist request' });
  }
}
