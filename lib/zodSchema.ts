import { z } from "zod";

export const productSchema = z.object({
  productImages: z
    .array(z.url("Must be a valid URL"))
    .min(1, "At least one image is required"),
  name: z.string().min(1, "Product name is required"),
  price: z.coerce.number().min(0, "Price must be positive"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  inventoryCount: z.coerce.number().min(0, "Inventory count must be positive"),
});

export type ProductFormData = z.infer<typeof productSchema>;
