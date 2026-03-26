import { useEffect } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi";

interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  qty: number;
  image: string;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  cartCount: number;
  cartTotal: number;
  onRemove: (id: number, size: string) => void;
  onUpdateQty: (id: number, size: string, delta: number) => void;
}

export function CartDrawer({
  open,
  onClose,
  items,
  cartCount,
  cartTotal,
  onRemove,
  onUpdateQty,
}: CartDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-black/40 transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed z-[90] bg-white shadow-2xl transition-transform duration-300 ease-out
          bottom-0 inset-x-0 rounded-t-2xl max-h-[85vh]
          md:bottom-auto md:top-0 md:right-auto md:left-0 md:h-full md:w-[380px] md:rounded-none md:rounded-r-2xl
          ${open ? "translate-y-0 md:translate-x-0" : "translate-y-full md:-translate-x-full md:translate-y-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base">محتويات السلة</span>
            {cartCount > 0 && (
              <span className="bg-[#C0392B] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
          <button onClick={onClose} className="p-1">
            <AiOutlineClose size={22} color="#555" />
          </button>
        </div>

        {/* Items */}
        <div
          className="overflow-y-auto px-5 py-4 space-y-4"
          style={{ maxHeight: "calc(85vh - 180px)" }}
        >
          {items.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <BsCart2 size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">السلة فارغة</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-3 items-start"
              >
                <button
                  onClick={() => onRemove(item.id, item.size)}
                  className="mt-1 text-gray-400 hover:text-red-500 transition-colors shrink-0"
                >
                  <AiOutlineDelete size={18} />
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    مقاس: {item.size}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQty(item.id, item.size, 1)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <HiPlus size={12} />
                    </button>
                    <span className="text-sm font-bold w-5 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.size, -1)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <HiMinus size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-sm font-bold text-[#C0392B]">
                    ﷼{(item.price * item.qty).toLocaleString("ar-SA")}
                  </span>
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3 bg-white">
            <div className="flex justify-between text-sm text-gray-500">
              <span>المجموع الفرعي ({cartCount} منتج)</span>
              <span className="font-bold text-[#1A1A1A]">
                ﷼{cartTotal.toLocaleString("ar-SA")}
              </span>
            </div>
            <div className="flex gap-2 pt-1">
              <button
                onClick={onClose}
                className="flex-1 h-12 border-2 border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:border-gray-400 transition-colors"
              >
                سلة المشتريات
              </button>
              <button className="flex-1 h-12 bg-[#1A1A1A] text-white rounded-lg text-sm font-bold hover:bg-[#333] transition-colors">
                إتمام الطلب
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
