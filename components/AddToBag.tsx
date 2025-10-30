"use client";
import { addToCart } from "@/store/cart";
import { Button } from "./ui/button";
import { Product } from "@/types";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const AddToBag = ({ product }: { product: Product }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Button
      size="sm"
      className="bg-black px-3 py-1 text-xs hover:bg-gray-800"
      onClick={() => {
        addToCart(product);
        setIsClicked(true);
      }}
    >
      {isClicked ? "Added!" : "Add to Bag"}{" "}
      <ShoppingBag className="ml-2 h-4 w-4" />
    </Button>
  );
};
export { AddToBag };
