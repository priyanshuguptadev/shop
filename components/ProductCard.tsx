import { Product } from "@/types";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { AddToBag } from "./AddToBag";
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      key={product._id}
      className="flex h-full cursor-pointer flex-col overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-md"
    >
      <Link href={`/products/${product._id}`}>
        <div className="flex w-full items-center justify-center">
          <Image
            src={product.productImages[0]}
            alt={product.name}
            width={1000}
            height={1365}
          />
        </div>
      </Link>
      <CardContent className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-sm text-gray-500">{product.category}</div>
        <h3 className="mb-1 font-medium">{product.name}</h3>
        <p className="mb-3 flex-1 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-medium">₹{product.price.toFixed(2)}</span>
          <AddToBag product={product} />
        </div>
      </CardContent>
    </Card>
  );
};
