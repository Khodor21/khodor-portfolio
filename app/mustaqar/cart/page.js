"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TopBar from "../components/TopBar";
import { useCart } from "../context/cartContext";
import { IoClose } from "react-icons/io5";
import ConfirmModal from "../components/ConfirmModal";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import Lottie from "lottie-react";
import successAnimation from "@/public/lotties/Confetti.json";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
    clearCart,
  } = useCart();

  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      setSelectedItem(item);
      setModalOpen(true);
    } else {
      decreaseQty(item.id);
    }
  };

  const handleCheckout = () => {
    toast.success("🎉 تم إرسال طلبك بنجاح!", {
      position: "top-center",
      autoClose: 3000,
    });

    clearCart();
    setOrderCompleted(true);

    // 🎊 Confetti
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  // 🚀 Auto redirect after 5 sec
  useEffect(() => {
    if (orderCompleted) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [orderCompleted, router]);

  return (
    <>
      <TopBar />

      <div className="w-full md:max-w-4xl md:mx-auto px-4 py-6 mb-24">
        <h1 className="text-2xl font-extrabold text-mustaqar mb-6">
          سلة المشتريات
        </h1>

        {orderCompleted ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center animate-fadeIn">
            {/* 🎬 Lottie Animation */}
            <div className="w-64">
              <Lottie animationData={successAnimation} loop={false} />
            </div>

            <h2 className="text-3xl font-bold text-mustaqar mt-6">
              شكراً لطلبك!
            </h2>

            <p className="text-gray-600 font-regular text-xl mt-2">
              تم استلام طلبك بنجاح وسيتم التواصل معك قريباً.
            </p>

            <p className="font-regular text-gray-400 mt-4">
              سيتم تحويلك للصفحة الرئيسية خلال لحظات...
            </p>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="text-center font-bold text-gray-500">السلة فارغة</div>
        ) : (
          <>
            {/* CART ITEMS */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#fefefe] shadow-sm rounded-2xl p-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4 w-full justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => {
                            setSelectedItem(item);
                            setModalOpen(true);
                          }}
                          className="flex p-1 w-fit rounded-full bg-[#D50000] text-[#FFE3E3]"
                        >
                          <IoClose size={12} />
                        </button>

                        <div>
                          <h2 className="font-bold text-xl">{item.name}</h2>
                          <p className="text-mustaqar font-bold text-2xl">
                            {item.currency}
                            {item.price}
                          </p>
                        </div>
                      </div>

                      <div className="relative w-20 h-20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* QTY */}
                  <div className="flex justify-between items-center mt-4 border-t pt-4">
                    <p className="text-gray-500 font-bold text-lg">
                      المجموع:
                      <span className="font-bold text-xl text-black ml-2">
                        {item.currency}
                        {item.price * item.quantity}
                      </span>
                    </p>

                    <div className="flex items-center bg-[#F9F9F9] rounded-xl px-3 py-1 gap-4">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="text-xl"
                      >
                        −
                      </button>
                      <span className="font-bold text-xl">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="mt-3 bg-white shadow-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">ملخص الطلب</h2>

              <div className="flex justify-between mb-3">
                <span className="text-lg font-regular">مجموع المنتجات</span>
                <span className="font-bold text-xl">$ {totalPrice}</span>
              </div>

              <div className="flex justify-between text-2xl font-bold">
                <span>الإجمالي</span>
                <span className="text-mustaqar">$ {totalPrice}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-mustaqar text-white py-3 rounded-xl font-bold text-2xl hover:scale-105 transition duration-300"
              >
                إتمَـــام الطَلـــب
              </button>
            </div>
          </>
        )}
      </div>

      <ConfirmModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="حذف المنتج"
        description="هل أنت متأكد أنك تريد حذف هذا المنتج من السلة؟"
        onConfirm={() => {
          removeItem(selectedItem.id);
          setModalOpen(false);
        }}
      />
    </>
  );
}
