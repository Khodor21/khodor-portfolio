import Link from "next/link";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { BiChevronsLeft } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-[#0B1261] text-white py-12 px-6" dir="rtl">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {/* 1. About Store */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">عن متجرنا</h3>
          <p className="text-white/80 font-regular leading-relaxed text-sm md:text-base">
            مستقر هي علامة متخصصة في الساعات ذات الجودة العالية، نختار تصاميمنا
            بعناية لنقدم لك مزيجاً من الدقة، الأناقة، والمتانة. رؤيتنا أن نجعل
            الوقت أكثر قيمة... وأن يكون حضورك ثابتاً في كل لحظة.
          </p>
        </div>

        {/* 2. Contact & Socials */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>

          <div
            dir="rtl"
            className="flex flex-col gap-3 text-white/90 text-sm md:text-base mb-6"
          >
            <a
              href="https://wa.me/963957861895"
              className="flex items-center gap-2 font-bold hover:text-[#C8CEFF] transition"
            >
              <BiChevronsLeft className="text-[#C8CEFF]" size={20} />
              <span dir="ltr">00963957861895</span> : واتساب
            </a>
            <a
              href="https://t.me/963957861895"
              className="flex items-center gap-2 hover:text-[#C8CEFF] transition"
            >
              <BiChevronsLeft className="text-[#C8CEFF]" size={20} />
              <span dir="ltr">00963957861895</span> : تلغرام
            </a>
          </div>

          {/* Social Icons */}
          <h3 className="text-xl font-bold mb-3">تابعنا على</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#0B1261] transition"
            >
              <FaTelegramPlane size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#0B1261] transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* 3. Important Links */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">روابط مهمة</h3>
          <ul className="flex flex-col gap-3 text-white/80 text-sm md:text-base">
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 hover:text-[#C8CEFF] transition"
              >
                <BiChevronsLeft className="text-[#C8CEFF]" size={20} />
                من نحن
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 hover:text-[#C8CEFF] transition"
              >
                <BiChevronsLeft className="text-[#C8CEFF]" size={20} />
                سياسة الخصوصية
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 hover:text-[#C8CEFF] transition"
              >
                <BiChevronsLeft className="text-[#C8CEFF]" size={20} />
                الشروط والاحكام
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 hover:text-[#C8CEFF] transition"
              >
                <BiChevronsLeft className="text-[#C8CEFF]" size={20} />
                الدعم الفني
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
