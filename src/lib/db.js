// src/lib/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const MONGO_URL = process.env.MONGO_URL;  // replace with your actual MongoDB URI

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) return;

  await mongoose.connect(MONGO_URL);
  isConnected = true;
  console.log('Connected to MongoDB');
};
