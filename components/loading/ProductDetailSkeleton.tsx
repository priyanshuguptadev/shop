export const ProductDetailSkeleton = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 animate-pulse aspect-square w-full max-w-md rounded-lg" />
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="h-3 bg-gray-200 rounded animate-pulse w-24" />
            <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4" />
            <div className="h-7 bg-gray-200 rounded animate-pulse w-32" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
            <div className="h-3 bg-gray-200 rounded animate-pulse w-4/5" />
          </div>
          <div className="pt-4">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-32" />
          </div>
        </div>
      </div>
    </main>
  );
};
