import { create } from "zustand";
import { Product } from "@/types";
import { CartItem } from "@/types";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item._id === product._id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: (item.quantity ?? 0) + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const existing = state.cart.find((item) => item._id === productId);
      if (existing && existing.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item._id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
      return { cart: state.cart.filter((item) => item._id !== productId) };
    }),
  clearCart: () => set({ cart: [] }),
}));

export const addToCart = (product: Product) => {
  useCartStore.getState().addToCart(product);
};

export const removeFromCart = (productId: string) => {
  useCartStore.getState().removeFromCart(productId);
};
