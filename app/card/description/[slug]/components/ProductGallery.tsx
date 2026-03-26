import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ProductGalleryProps {
  images: string[];
  activeImage: number;
  productName: string;
  savings: number | null;
  onPrev: () => void;
  onNext: () => void;
  onSelectImage: (index: number) => void;
}

export function ProductGallery({
  images,
  activeImage,
  productName,
  savings,
  onPrev,
  onNext,
  onSelectImage,
}: ProductGalleryProps) {
  return (
    <div className="order-1 lg:order-2 flex-1 min-w-0">
      {/* Main image */}
      <div className="relative w-full aspect-square lg:aspect-[3/4] xl:aspect-square overflow-hidden bg-[#F5F5F3] rounded-sm">
        <img
          src={images[activeImage]}
          alt={`${productName} - ${activeImage + 1}`}
          className="w-full h-full object-cover object-top transition-opacity duration-300"
        />

        {savings && (
          <span className="absolute top-3 right-3 z-10 bg-[#C0392B] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            وفر {savings} ر.س
          </span>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label="السابق"
              className="absolute top-1/2 -translate-y-1/2 right-3 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
            >
              <AiOutlineRight size={16} />
            </button>
            <button
              onClick={onNext}
              aria-label="التالي"
              className="absolute top-1/2 -translate-y-1/2 left-3 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
            >
              <AiOutlineLeft size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Thumbnail strip ─── */
interface ThumbnailStripProps {
  images: string[];
  activeImage: number;
  onSelect: (index: number) => void;
}

export function ThumbnailStrip({
  images,
  activeImage,
  onSelect,
}: ThumbnailStripProps) {
  if (images.length <= 1) return null;

  return (
    <div className="order-1 lg:order-3 lg:w-[90px] shrink-0">
      {/* Mobile: horizontal */}
      <div className="flex lg:hidden gap-2 overflow-x-auto pb-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all
              ${activeImage === idx ? "border-[#1A1A1A]" : "border-transparent"}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Desktop: vertical */}
      <div className="hidden lg:flex flex-col gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full aspect-square rounded overflow-hidden border-2 transition-all
              ${activeImage === idx ? "border-[#1A1A1A]" : "border-gray-100 hover:border-gray-300"}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
