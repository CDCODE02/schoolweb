import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // If SMTP credentials are not provided, log the email and return success (Simulation Mode)
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('--- EMAIL SIMULATION ---');
      console.log(`To: ${process.env.CONTACT_EMAIL || 'admin@example.com'}`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log('------------------------');
      return res.json({ success: true, message: 'Message received (Simulation Mode)' });
    }

    try {
      const port = parseInt(process.env.SMTP_PORT || '587');
      const secure = process.env.SMTP_SECURE === 'true' || port === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: port,
        secure: secure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          // Do not fail on invalid certs
          rejectUnauthorized: false,
        },
      });

      // Verify connection configuration
      await transporter.verify();

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`, // Often needs to be the authenticated user
        replyTo: email,
        to: process.env.CONTACT_EMAIL,
        subject: `Contact Form: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`,
      });

      res.json({ success: true, message: 'Message sent successfully' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to send message';
      if (error.code === 'ECONNRESET') {
        errorMessage = 'Connection to email server was reset. Please check your network or SMTP settings.';
      } else if (error.code === 'EAUTH') {
        errorMessage = 'Email authentication failed. Please check your credentials.';
      }

      res.status(500).json({ error: errorMessage, details: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
