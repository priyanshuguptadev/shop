import { ProductCard } from "@/components/ProductCard";
import { getAllProducts } from "@/actions";
import { Product } from "@/types";

export default async function MinimalistEcommerceCatalog() {
  const products: Product[] = await getAllProducts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}
