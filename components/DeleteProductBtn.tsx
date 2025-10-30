"use client";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteProductById } from "@/actions";

export const DeleteProductBtn = ({ id }: { id: string }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
      onClick={() => deleteProductById(id)}
    >
      <Trash2 className="h-4 w-4" />
      <span className="hidden sm:inline">Delete</span>
    </Button>
  );
};
