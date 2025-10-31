import { ProductForm } from "@/components/ProductForm";
import { ArrowLeft, InfoIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Product - Admin Panel",
  description: "Add a new product to the inventory",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4" />
                Dashboard
              </button>
            </Link>
            <h1 className="text-xl font-medium tracking-tight hidden md:block">
              Add Product
            </h1>
          </div>
          <div className="text-sm text-gray-500 hidden md:block">
            Admin Panel
          </div>
        </div>
      </header>
      <div className="max-w-md mx-4 flex md:hidden items-center bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <InfoIcon className="inline-block h-5 w-5 text-gray-400 mr-2" />
        <p className="text-sm text-gray-500">
          We recommend using desktop mode for the best experience
        </p>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProductForm />
        </div>
      </main>
    </div>
  );
}
