import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/products/"],
      disallow: ["/api/", "/admin/", "/dashboard/"],
    },
    sitemap: "https://shop.priyanshugupta.space/sitemap.xml",
  };
}
