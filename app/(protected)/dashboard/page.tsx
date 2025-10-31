import { Button } from "@/components/ui/button";
import { InfoIcon, Lock, LogOut } from "lucide-react";
import { Product } from "@/types";
import { getAllProducts } from "@/actions";
import Link from "next/link";
import Image from "next/image";
import { DeleteProductBtn } from "@/components/DeleteProductBtn";
import { SignOutButton } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Admin Panel",
  description: "Manage your products and inventory",
};

export default async function Dashboard() {
  const products: Product[] = await getAllProducts();

  return (
    <>
      <div className="min-h-screen bg-white">
        <main className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-8 flex justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-medium">Dashboard</h2>
            </div>
            <div className="flex gap-8 justify-center items-center">
              <Button
                className="flex items-center gap-2 bg-black hover:bg-gray-800"
                asChild
              >
                <Link href="/admin">
                  <Lock className="h-4 w-4" />
                  Admin
                </Link>
              </Button>
              <SignOutButton children={<LogOut className="h-4 w-4" />} />
            </div>
          </div>
          <div className="flex md:hidden items-center bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <InfoIcon className="inline-block h-5 w-5 text-gray-400 mr-2" />
            <p className="text-sm text-gray-500">
              We recommend using desktop mode for the best experience
            </p>
          </div>

          {products.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <h3 className="mb-2 text-lg font-medium">No products yet</h3>
              <p className="mb-4 text-gray-600">
                Get started by adding your first product
              </p>
              <Button className="bg-black hover:bg-gray-800" asChild>
                <Link href="/dashboard/products/add">Add Product</Link>
              </Button>
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {products.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <Image
                            width={1000}
                            height={1500}
                            src={product.productImages[0]}
                            alt={product.name}
                            className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3 object-cover"
                          />
                          <div>
                            <div className="md:font-medium text-gray-900 text-ellipsis overflow-hidden max-w-[150px] md:max-w-none">
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {product.category}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        ₹{product.price.toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <DeleteProductBtn id={product._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-8 rounded-lg bg-gray-50 p-6">
            <h3 className="font-medium mb-2">Quick Stats</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="text-2xl font-medium">{products.length}</div>
                <div className="text-sm text-gray-600">Total Products</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="text-2xl font-medium">
                  ₹{products.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">
                  Total Inventory Value
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
