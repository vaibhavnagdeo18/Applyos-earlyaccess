import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), '.env') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key_replace_me');

// Simple JSON file to act as our Database
const DB_FILE = path.join(__dirname, 'waitlist.json');

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

app.post('/api/waitlist', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Read current database state
  const rawData = fs.readFileSync(DB_FILE, 'utf-8');
  const waitlist = JSON.parse(rawData);

  // Check for duplicates
  if (waitlist.some(user => user.email === email)) {
    return res.status(400).json({ error: 'This email is already registered.' });
  }

  // AUTO-CUTOFF LOGIC (Limit access to exactly the first 100)
  const MAX_EARLY_ACCESS = 100;
  const isGranted = waitlist.length < MAX_EARLY_ACCESS;
  const status = isGranted ? 'granted' : 'queued';

  // Save the new user
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    status,
    timestamp: new Date().toISOString()
  };

  waitlist.push(newUser);
  fs.writeFileSync(DB_FILE, JSON.stringify(waitlist, null, 2));

  console.log(`✅ [Waitlist] New user added. Count: ${waitlist.length} | Status: ${status}`);

  // Send admin notification via Resend asynchronously
  resend.emails.send({
    from: 'Waitlist Bot <onboarding@resend.dev>', // Resend's testing handle
    to: process.env.ADMIN_EMAIL || 'your-personal-email@example.com',
    subject: `🎉 New ApplyOS Waitlist: ${name}`,
    html: `
      <h2>New Early Access Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Status:</strong> ${status.toUpperCase()}</p>
      <hr />
      <p><em>Total Waitlist Size: ${waitlist.length}</em></p>
    `
  }).then(() => {
    console.log('✉️ Admin notification email dispatched via Resend!');
  }).catch((err) => {
    console.error('Failed to send Resend email. Did you add your RESEND_API_KEY?', err.message);
  });

  res.json({ success: true, status });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`
🚀 ApplyOS Waitlist Backend Running!
📡 API Endpoint: http://localhost:${PORT}/api/waitlist
🔒 Auto-Cutoff Set to 100 members.
  `);
});
