"use client";

import { useCartStore } from "@/store/cart";
import { Menu as MenuIcon, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "../Menu";
import { Cart } from "../Cart";
import { SearchResults } from "../SearchResults";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCartStore();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-6">
            <Link href={"/"}>
              <h1 className="text-2xl font-light  tracking-tight letter-spacing-[-0.05em]">
                minimal
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative p-2"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative p-2"
              aria-label="Menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      {isCartOpen && <Cart cart={cart} setIsCartOpen={setIsCartOpen} />}
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isSearchOpen && (
        <div className="max-w-md mx-auto fixed inset-0 z-50 flex flex-col bg-white/80 backdrop-blur-sm p-4">
          <div className="flex items-center justify-between border-b pb-4">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products..."
              className="border-0 outline-none w-full text-lg"
              autoFocus
            />
            <button onClick={() => setIsSearchOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <SearchResults searchTerm={searchTerm} />
        </div>
      )}
    </>
  );
};
