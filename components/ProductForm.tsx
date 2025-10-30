"use client";

import { useState } from "react";
import { Resolver, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { productSchema, ProductFormData } from "@/lib/zodSchema";

export const ProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const resolver = zodResolver(productSchema) as Resolver<ProductFormData>;

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver,
    defaultValues: {
      productImages: [""],
    },
    mode: "onBlur",
  });

  const productForm = useWatch({
    control,
    defaultValue: {
      productImages: [""],
      name: "",
      price: 0,
      description: "",
      category: "",
      inventoryCount: 0,
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field as keyof ProductFormData, {
              message: message as string,
            });
          });
        } else {
          throw new Error(result.message || "Failed to create product");
        }
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("root", {
        message: "An error occurred while creating the product",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <Input
              {...register("productImages.0")}
              placeholder="https://example.com/image.jpg"
            />
            {errors.productImages?.[0] && (
              <p className="mt-1 text-sm text-red-600">
                {errors.productImages[0].message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <Input {...register("name")} placeholder="Minimalist Desk Lamp" />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Category
              </label>
              <Input {...register("category")} placeholder="Lighting" />
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Price (₹)
              </label>
              <Input
                {...register("price")}
                type="number"
                step="0.01"
                min="0"
                placeholder="89.99"
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Inventory Count
              </label>
              <Input
                {...register("inventoryCount")}
                type="number"
                step="1"
                min="0"
                placeholder="50"
              />
              {errors.inventoryCount && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.inventoryCount.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>
            <Textarea
              {...register("description")}
              placeholder="Detailed product description..."
              rows={4}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          {errors.root && (
            <p className="text-sm text-red-600">{errors.root.message}</p>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-black py-6 hover:bg-gray-800"
            >
              {isSubmitting ? "Adding..." : "Add Product"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 py-6"
              asChild
            >
              <Link href="/dashboard">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-4 text-lg font-medium">Product Preview</h3>

          <div className="rounded-lg border border-gray-100 p-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="bg-gray-100 aspect-square w-full max-w-[200px] rounded-lg flex items-center justify-center">
                {productForm.productImages?.[0] ? (
                  <img
                    src={productForm.productImages[0]}
                    alt="Product preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                )}
              </div>

              <div className="flex-1">
                <div className="text-sm text-gray-500">
                  {productForm.category || "Category"}
                </div>
                <h3 className="text-xl font-medium">
                  {productForm.name || "Product Name"}
                </h3>
                <p className="mt-1 text-lg font-medium">
                  ₹
                  {productForm.price
                    ? parseFloat(productForm.price.toString()).toFixed(2)
                    : "0.00"}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-3">Description</h4>
              <div className="text-gray-600 prose prose-sm max-w-none">
                {productForm.description ? (
                  productForm.description.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-3">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>Detailed product description will appear here...</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <h4 className="font-medium mb-2">Preview Notes</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • Product image will appear on the left. Use this image url
                https://ik.imagekit.io/tasveer/ecommerce/product-3.jpg for
                testing.
              </li>
              <li>• Product details update in real-time as you type</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
