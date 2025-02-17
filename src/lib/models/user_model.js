// src/lib/models/User.js
import mongoose from 'mongoose';



const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dob: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  panNumber: { type: String, required: true },
  occupationType: { type: String, required: true },
  password: { type: String, required: true }
});

export const User_db = mongoose.model('User', UserSchema);
