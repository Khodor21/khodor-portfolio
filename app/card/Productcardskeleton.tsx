"use client";

export default function ProductCardSkeleton() {
  return (
    <div
      dir="rtl"
      className="relative bg-white overflow-hidden flex flex-col h-full shadow-sm"
    >
      {/* ── IMAGE BLOCK ── */}
      <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] shrink-0 overflow-hidden bg-gray-200">
        <div className="absolute inset-0 shimmer" />
      </div>

      {/* ── BODY ── */}
      <div className="px-3 pt-2.5 pb-3 flex flex-col gap-3 flex-1">

        {/* Name lines */}
        <div className="flex flex-col gap-1.5">
          <div className="relative h-3.5 w-full rounded-sm bg-gray-200 overflow-hidden">
            <div className="absolute inset-0 shimmer" />
          </div>
          <div className="relative h-3.5 w-2/3 rounded-sm bg-gray-200 overflow-hidden">
            <div className="absolute inset-0 shimmer" />
          </div>
        </div>

        {/* Price row */}
        <div className="flex items-center gap-2">
          <div className="relative h-3.5 w-16 rounded-sm bg-gray-200 overflow-hidden">
            <div className="absolute inset-0 shimmer" />
          </div>
          <div className="relative h-3 w-10 rounded-sm bg-gray-200 overflow-hidden">
            <div className="absolute inset-0 shimmer" />
          </div>
        </div>

        <div className="flex-1" />
      </div>

      {/* ── CTA BUTTON ── */}
      <div className="relative w-full h-9 shrink-0 bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 shimmer" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.55) 50%,
            transparent 100%
          );
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
export function ProductGridSkeleton({ count = 2 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}