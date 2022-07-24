import mongoose from "mongoose";

export type SchemaType = {
  category: string;
  discount: boolean;
  fullDisc: string;
  image: string;
  mrp: number;
  price: string;
  quantity: number;
  shortDisc: string;
  title: string;
  userid: mongoose.Schema.Types.ObjectId;
  product_id: mongoose.Schema.Types.ObjectId;
};

const CartSchema = new mongoose.Schema<SchemaType>({
  category: String,
  discount: Boolean,
  fullDisc: String,
  image: String,
  mrp: Number,
  price: String,
  quantity: Number,
  shortDisc: String,
  title: String,
  userid: mongoose.Schema.Types.ObjectId,
  product_id: mongoose.Schema.Types.ObjectId,
});

export const Cart = mongoose.model("fabbag_cartItem", CartSchema);
