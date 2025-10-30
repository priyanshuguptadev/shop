import { X, Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { CartItem } from "@/types";
import Image from "next/image";

export const Cart = ({
  cart,
  setIsCartOpen,
}: {
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-lg font-medium">Your Bag</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6">
          {cart.length === 0 ? (
            <p className="py-12 text-center text-gray-500">Your Bag is empty</p>
          ) : (
            <>
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={item._id} className="flex items-center gap-4">
                    <Image
                      src={item.productImages[0]}
                      alt={item.name}
                      width={1000}
                      height={1365}
                      className="aspect-square w-16 rounded-md bg-cover object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="rounded p-1 hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="rounded p-1 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t pt-6">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>
                    ₹
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <Button className="mt-6 w-full bg-black py-6 hover:bg-gray-800">
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
