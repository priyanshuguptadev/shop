"use server";
import { Product } from "@/db";
import connectDB from "@/db/connectDB";

export const getProductById = async (id: string) => {
  try {
    await connectDB();
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    await connectDB();
    const products = await Product.find({});

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};
export const updateProductById = async (id: string, data: any) => {
  try {
    await connectDB();
    const product = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!product) {
      throw new Error("Product not found");
    }
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.error("Error updating product by ID:", error);
    throw error;
  }
};

export const deleteProductById = async (id: string) => {
  try {
    await connectDB();
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return { message: "Product deleted." };
  } catch (error) {
    console.error("Error deleting product by ID:", error);
    throw error;
  }
};
