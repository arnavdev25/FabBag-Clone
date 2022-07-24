import mongoose, { Schema } from "mongoose";

export type SchemaType = {
  first_name: string;
  last_name: string;
  email: string;
  hash: string;
  googleID: string;
  name: string;
  company?: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: number;
  phone: string;
};

const UserSchema = new mongoose.Schema<SchemaType>({
  first_name: String,
  last_name: String,
  email: String,
  hash: String,
  googleID: String,
  name: String,
  company: String,
  address: String,
  apartment: String,
  city: String,
  state: String,
  pincode: Number,
  phone: String,
});

export const User = mongoose.model("fabbag_user", UserSchema);
