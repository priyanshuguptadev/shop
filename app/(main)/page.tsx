import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/ui/Header";
import { getAllProducts } from "@/actions";
import { Product } from "@/types";

export default async function MinimalistEcommerceCatalog() {
  const products: Product[] = await getAllProducts();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
