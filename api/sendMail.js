import nodemailer from "nodemailer";

export default async function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'https://owenprlce.github.io'); 
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');                
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}`,
      text: `${message}\n\nFrom: ${name} (${email})`,
      html: `<p>${message}</p><br/><p>From: ${name} (${email})</p>`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email" });
  }
}
