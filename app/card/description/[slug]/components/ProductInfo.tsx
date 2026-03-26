import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
 
interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: any;
  sizes: string[];
  soldOut?: string[];
  productImages?: any[];
  images?: any[];
  sku?: string;
}
interface ProductInfoProps {
  product: Product;
  selectedSize: string;
  wished: boolean;
  onSizeSelect: (size: string) => void;
  onWishToggle: () => void;
  onShare: () => void;
  onAddToCart: () => void;
}

export function ProductInfo({
  product,
  selectedSize,
  wished,
  onSizeSelect,
  onWishToggle,
  onShare,
  onAddToCart,
}: ProductInfoProps) {
  const savings = product.oldPrice ? product.oldPrice - product.price : null;

  return (
    <div className="order-2 lg:order-1 lg:w-[340px] xl:w-[380px] shrink-0 flex flex-col">
      {/* Wishlist + Share */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={onWishToggle}
          aria-label="مفضلة"
          className="active:scale-90 transition-transform"
        >
          {wished ? (
            <AiFillHeart size={22} color="#C0392B" />
          ) : (
            <AiOutlineHeart size={22} color="#555" />
          )}
        </button>
        <button
          onClick={onShare}
          aria-label="مشاركة"
          className="active:scale-90 transition-transform"
        >
          <AiOutlineShareAlt size={22} color="#555" />
        </button>
      </div>

      {/* Name */}
      <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-3 leading-snug text-right">
        {product.name}
      </h1>

      {/* Price */}
      <div className="flex items-center justify-end gap-3 mb-5">
        {product.oldPrice && (
          <span className="text-gray-400 line-through text-sm">
            ﷼ {product.oldPrice}
          </span>
        )}
        <span className="text-xl font-bold text-[#1A1A1A]">
          ﷼ {product.price}
        </span>
      </div>

      {/* Sizes */}
      {product.sizes.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors">
              <LuPencilLine size={13} />
              <span>جليل المقاسات</span>
            </button>
            <span className="text-sm font-medium text-[#1A1A1A]">Size</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {product.sizes.map((size) => {
              const isSoldOut = product.soldOut?.includes(size);
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => !isSoldOut && onSizeSelect(size)}
                  disabled={isSoldOut}
                  className={`min-w-[48px] h-10 px-3 flex items-center justify-center rounded border text-sm font-medium transition-all
                    ${
                      isSoldOut
                        ? "border-gray-100 text-gray-300 cursor-not-allowed line-through"
                        : isSelected
                          ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-500"
                    }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Add to Cart */}
      <button
        onClick={onAddToCart}
        className="w-full py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2
          bg-[#9BB5BE] hover:bg-[#8aa7b0] text-white transition-colors mb-4"
      >
        <BsCart2 size={20} />
        إضافة للسلة
      </button>

      {/* Tamara */}
      <div className="border border-gray-100 rounded-xl px-4 py-3 mb-3 text-right">
        <p className="text-xs text-gray-600 leading-relaxed">
          أو قسم فاتورتك على 4 دفعات بقيمة{" "}
          <strong>{Math.round(product.price / 4)} ﷼</strong> بدون رسوم تأخير،
          متوافقة مع الشريعة الإسلامية{" "}
          <a href="#" className="text-[#C0392B] font-bold underline">
            اعرف أكثر
          </a>
        </p>
        <div className="mt-2 flex justify-end">
          <span className="inline-flex items-center bg-[#3D5A50] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            tamara
          </span>
        </div>
      </div>

      {/* Tabby */}
      <div className="border border-gray-100 rounded-xl px-4 py-3 mb-3 text-right">
        <p className="text-xs text-gray-600 leading-relaxed">
          قسّمها على 4 دفعات بقيمة{" "}
          <strong>{Math.round(product.price / 4)}.00 ﷼</strong> بدون فوائد،
          متوافق مع أحكام الشريعة.{" "}
          <a href="#" className="text-gray-500 underline text-xs">
            لمعرفة المزيد
          </a>
        </p>
        <div className="mt-2 flex justify-end">
          <span className="inline-flex items-center bg-[#3AC490] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            tabby
          </span>
        </div>
      </div>

      {/* Gold Warranty */}
      <div className="border border-gray-100 rounded-xl px-4 py-3 mb-4 text-right">
        <div className="flex items-center justify-end gap-2 mb-1">
          <span className="text-sm font-bold text-[#1A1A1A]">ضمان ذهبي</span>
          <span className="text-xl">🏅</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          ضمان ذهبي كامل لمدة عام كامل على المنتج. راحة بال وجودة مضمونة
        </p>
      </div>

      {/* SKU */}
      <div className="text-right">
        <span className="text-xs text-gray-400">
          رمز المنتج : {product.sku ?? product.id.toString().padStart(7, "0")}
        </span>
      </div>
    </div>
  );
}
