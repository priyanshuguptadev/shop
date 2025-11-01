import { getAllProducts } from "@/actions";
import { MetadataRoute } from "next";
const baseUrl = "https://shop.priyanshugupta.space";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  const productUrls = products.map((product: any) => ({
    url: `${baseUrl}/products/${product._id}`,
    lastModified: product.updatedAt,
    priority: 0.8,
  }));
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    ...productUrls,
  ];
}
