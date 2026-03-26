import { BsCart2 } from "react-icons/bs";

interface BottomCTAProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onAddToCart: () => void;
}

export function BottomCTA({
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
}: BottomCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
      <div className="flex items-center border border-gray-200 rounded-lg h-12 px-2 bg-white shrink-0">
        <button onClick={onIncrease} className="px-2 text-xl text-gray-600">
          +
        </button>
        <span className="w-8 text-center font-bold text-sm">{quantity}</span>
        <button onClick={onDecrease} className="px-2 text-xl text-gray-600">
          −
        </button>
      </div>
      <button
        onClick={onAddToCart}
        className="flex-1 h-12 rounded-lg font-bold flex items-center justify-center gap-2 bg-[#9BB5BE] text-white active:bg-[#8aa7b0] transition-colors"
      >
        <BsCart2 size={18} />
        إضافة للسلة
      </button>
    </div>
  );
}
