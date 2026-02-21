import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md"; // Make sure react-icons is installed
import Logo from "../images/Logo-Navy.svg";
import BottomNavigation from "../components/BottomNavigation";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white" dir="rtl">
      {/* Header Section (Remove if your layout already includes this) */}
      <header className="flex justify-between items-center p-4">
        {/* Location (Visual Right in RTL) */}
        <div className="flex items-center gap-2">
          <MdOutlineLocationOn className="text-[#0B1261]" size={28} />
          <div className="flex flex-col text-right">
            <span className="text-[#0B1261] font-bold text-sm md:text-base">
              مدينة إدلب
            </span>
            <span className="text-gray-400 text-xs">
              جنوب ساحة الساعة، شارع...
            </span>
          </div>
        </div>

        {/* Logo (Visual Left in RTL) */}
        <div className="relative w-24 h-10 md:w-32 md:h-12">
          <Image src={Logo} alt="شعار مستقر" fill className="object-contain" />
        </div>
      </header>

      {/* Main Not Found Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center pb-20">
        <h1 className="text-[#0B1261] font-extrabold text-3xl md:text-5xl leading-relaxed md:leading-snug">
          هذه الصفحة غير متوفرة الآن
          <br />
          جَاري العَمل عليهــــــا...
        </h1>

        <Link
          href="/"
          className="mt-8 bg-[#0B1261] hover:bg-blue-900 active:scale-95 transition-all text-white font-bold text-xl py-3 px-12 rounded-md shadow-md"
        >
          العودة للرئيسيّة
        </Link>
      </main>
      <BottomNavigation />
    </div>
  );
}
