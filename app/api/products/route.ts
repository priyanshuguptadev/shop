import { Product } from "@/db";
import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/db/connectDB";
import { productSchema } from "@/lib/zodSchema";
import { getAllProducts } from "@/actions";

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch products." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsedData = productSchema.safeParse(data);
    if (!parsedData.success) {
      return NextResponse.json(
        { message: "Validation failed.", errors: parsedData.error },
        { status: 400 }
      );
    }
    await connectDB();
    const newProduct = await Product.create({
      productImages: data.productImages,
      name: data.name,
      price: data.price,
      description: data.description,
      inventoryCount: data.inventoryCount,
      category: data.category,
    });
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create product." },
      { status: 500 }
    );
  }
}
