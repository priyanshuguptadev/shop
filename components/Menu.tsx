import { X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Menu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) => {
  return (
    <div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-lg font-medium">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close account"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6">
              <div className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href="/dashboard">Continue to dashboard</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin">Continue to admin panel</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
