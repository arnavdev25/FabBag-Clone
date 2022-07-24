import mongoose from "mongoose";

export type SchemaType = {
  _id: mongoose.Schema.Types.ObjectId;
  category: string;
  title: string;
  mrp: number;
  discount: boolean;
  price: number;
  shortDisc: string;
  outofstock: boolean;
  image: string;
  fullDisc: string;
}


const ProductSchema = new mongoose.Schema<SchemaType>({
  _id: mongoose.Schema.Types.ObjectId,
  category: String,
  title: String,
  mrp: Number,
  discount: Boolean,
  price: Number,
  shortDisc: String,
  outofstock: Boolean,
  image: String,
  fullDisc: String
})

export const Product = mongoose.model("fabbag_product", ProductSchema);
