"use client";
import { useCartStore } from "@/store/cart";
import { Button } from "./ui/button";
import { Product } from "@/types";

const AddToBag = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addItemToCart);
  return (
    <Button
      size="sm"
      className="bg-black px-3 py-1 text-xs hover:bg-gray-800"
      onClick={() => {
        addToCart({ ...product, quantity: product.inventoryCount > 0 ? 1 : 0 });
      }}
    >
      Add to Bag
    </Button>
  );
};
export { AddToBag };
