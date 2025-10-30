import { getProductById } from "@/actions";
import { AddToBag } from "@/components/AddToBag";
import { Header } from "@/components/ui/Header";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  return {
    title: `${product.name} | Shop`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160),
      images: [
        {
          url: product.productImages[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="bg-gray-100 aspect-square w-full max-w-md rounded-lg flex items-center justify-center">
              <Image
                src={product.productImages[0]}
                alt={product.name}
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500">{product.category}</div>
              <h1 className="text-3xl font-medium tracking-tight">
                {product.name}
              </h1>
              <p className="mt-2 text-2xl font-medium">
                ₹{product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="pt-4">
              <AddToBag product={product} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
