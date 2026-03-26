import { AiOutlineCheckCircle } from "react-icons/ai";

interface ToastProps {
  visible: boolean;
}

export function Toast({ visible }: ToastProps) {
  return (
    <div
      className={`fixed top-5 left-4 z-[100] transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
    >
      <div className="bg-[#1A1A1A] text-white text-sm px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 min-w-[220px]">
        <AiOutlineCheckCircle size={18} className="text-green-400 shrink-0" />
        <span>تمت الإضافة إلى السلة</span>
      </div>
    </div>
  );
}
