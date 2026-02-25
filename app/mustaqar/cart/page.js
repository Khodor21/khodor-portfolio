"use client";
import { useState } from "react";
import Image from "next/image";
import TopBar from "../components/TopBar";
import { useCart } from "../context/cartContext";
import { IoClose } from "react-icons/io5";
import ConfirmModal from "../components/ConfirmModal";
export default function CartPage() {
  const { cartItems, increaseQty, decreaseQty, removeItem, totalPrice } =
    useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      setSelectedItem(item);
      setModalOpen(true);
    } else {
      decreaseQty(item.id);
    }
  };

  const handleRemoveClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };
  return (
    <>
      <TopBar />

      <div className="w-full md:max-w-4xl md:mx-auto px-4 py-6 mb-24">
        <h1 className="text-2xl font-extrabold text-[#0B1261] mb-6">
          سلة المشتريات
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">السلة فارغة</div>
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
                    {/* INFO */}
                    <div className="flex gap-4 w-full justify-between items-center">
                      {/*  */}

                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleRemoveClick(item)}
                          className="flex p-1 w-fit rounded-full bg-[#D50000] text-[#FFE3E3]"
                        >
                          <IoClose size={12} />
                        </button>
                        <div>
                          <h2 className="font-bold text-xl">{item.name}</h2>
                          <p className="text-[#0B1261] font-bold text-2xl">
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
                      المجموع:{" "}
                      <span className="font-bold text-xl  text-black">
                        {item.currency}
                        {item.price * item.quantity}
                      </span>
                    </p>

                    <div className="flex items-center justify-center bg-[#F9F9F9] rounded-xl px-3 py-1 gap-4">
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
                <span className="font-regular text-lg">مجموع المنتجات</span>
                <span className="font-bold text-xl">$ {totalPrice}</span>
              </div>

              <div className="flex justify-between text-2xl font-extrabold">
                <span>الإجمالي</span>
                <span className="text-[#0B1261]">$ {totalPrice}</span>
              </div>

              <button className="w-full mt-6 bg-[#0B1261] text-white py-2 rounded-xl font-bold text-2xl">
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
