"use client";
import { getAllProducts } from "@/actions";
import { Product } from "@/types";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const SearchResults = ({ searchTerm }: { searchTerm: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-col gap-4 mt-10">
      {products
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((product) => (
          <Link
            key={product._id}
            href={`/products/${product._id}`}
            className="max-w-md mx-auto flex items-center w-full text-gray-500 hover:text-gray-600 cursor-pointer"
          >
            <SearchIcon className="inline-block mr-2 mb-1" />
            <h2 className="text-md w-full text-start">{product.name}</h2>
          </Link>
        ))}
    </div>
  );
};
