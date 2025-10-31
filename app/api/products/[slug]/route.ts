import {
  deleteProductById,
  getProductById,
  updateProductById,
} from "@/actions";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const product = await getProductById(slug);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found." },
        { status: 404 }
      );
    }
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch product." },
      { status: 500 }
    );
  }
}
export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const updatedProduct = await updateProductById(slug, body);
    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found." },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update product." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  try {
    const { slug } = await params;
    const deletedProduct = await deleteProductById(slug);
    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found." },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Product deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete product." },
      { status: 500 }
    );
  }
}
