"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AddToCartPopupTop({
  product,
  show,
  onClose,
  autoClose = 5000,
}) {
  const [visible, setVisible] = useState(show);
  const [closing, setClosing] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setClosing(false);
      setProgress(100);

      // Progress bar countdown
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, autoClose / 100);

      // Auto close after time
      const timer = setTimeout(() => handleClose(), autoClose);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [show]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      onClose();
    }, 300); // match animation duration
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50" onClick={handleClose}>
      <div
        className={`bg-white w-full shadow-xl p-4 flex flex-col gap-4 ${
          closing ? "animate-slideUp" : "animate-slideDown"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-extrabold text-[#0B1261]">
            تم إضافة المنتج!
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 font-bold text-3xl"
          >
            ×
          </button>
        </div>

        {/* Product Info */}
        <div className="flex gap-4 items-center">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-black/90 text-lg line-clamp-1">
              {product.name}
            </h4>
            <p className="text-black/60 font-regular text-base line-clamp-1">
              {product.feature}
            </p>
            <p className="text-black/90 font-extrabold text-xl">
              {product.price}$
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row-reverse gap-2">
          <button
            onClick={handleClose}
            className="flex-1 py-2 rounded-md border-[0.5px] border-[#0B1261] font-regular text-[#0B1261] hover:bg-[#0B1261] hover:text-white transition"
          >
            مواصلة التسوق
          </button>
          <a
            href="/mustaqar/cart"
            className="flex-1 py-2 rounded-md bg-[#0B1261] text-white font-regular text-center hover:bg-[#09144b] transition"
          >
            الذهاب للسلة
          </a>
        </div>

        {/* Progress bar */}
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-[#0B1261] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
}
