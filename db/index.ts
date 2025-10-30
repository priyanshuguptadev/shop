import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productImages: { type: [String], required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  inventoryCount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
