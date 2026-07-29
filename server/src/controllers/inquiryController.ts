import { Request, Response } from 'express';
import { Inquiry } from '../models/Inquiry';
import nodemailer from 'nodemailer';
import axios from 'axios';

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;
    const inquiry = await Inquiry.create({ name, email, subject, message });

    // Send Email notification asynchronously
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `New Inquiry from ${name}: ${subject || 'No Subject'}`,
        text: message,
      }).catch(err => console.error('Failed to send email:', err));
    }

    // Send Telegram notification asynchronously
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    
    if (telegramBotToken && telegramChatId) {
      const text = `🛎 *New Inquiry from ${name}*\n📧 ${email}\n📝 *Subject:* ${subject || 'N/A'}\n\n💬 ${message}`;
      const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
      axios.post(url, { chat_id: telegramChatId, text, parse_mode: 'Markdown' })
        .catch(err => console.error('Failed to send telegram message:', err));
    }

    res.json({ success: true, item: inquiry });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await Inquiry.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: inquiries });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateInquiryStatus = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string, 10);
    const { status } = req.body;
    const inquiry = await Inquiry.findByPk(id);
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });
    
    inquiry.status = status;
    await inquiry.save();
    res.json({ success: true, item: inquiry });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteInquiry = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string, 10);
    const inquiry = await Inquiry.findByPk(id);
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });
    
    await inquiry.destroy();
    res.json({ success: true, message: 'Inquiry deleted' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
