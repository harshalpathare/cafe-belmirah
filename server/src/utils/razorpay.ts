import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

// Create Razorpay instance
// These keys MUST be added to your .env file
export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'YOUR_RAZORPAY_KEY_ID',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'YOUR_RAZORPAY_KEY_SECRET',
});
