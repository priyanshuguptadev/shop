export const ProductCardSkeleton = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden border-0 shadow-sm">
      <div className="flex w-full items-center justify-center bg-gray-200 animate-pulse aspect-1000/1365" />
      <div className="flex flex-1 flex-col p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
        <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="h-5 bg-gray-200 rounded animate-pulse w-16" />
          <div className="h-9 bg-gray-200 rounded animate-pulse w-24" />
        </div>
      </div>
    </div>
  );
};
