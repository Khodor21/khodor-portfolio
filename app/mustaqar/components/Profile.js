"use client";

import TopBar from "./TopBar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";

//tabes
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("حسابي");

  useEffect(() => {
    const staticUser = {
      name: "خضر حسن",
      email: "khodor@example.com",
      phone: "+961 70 123 456",
      avatar: "/default-avatar.png",
      role: "مالك مطعم / Owner",
      location: "بيروت، لبنان",
      bio: "رجل أعمال شغوف بمجال المطاعم والخدمات الرقمية. يسعى دائمًا لتطوير تجربة العملاء ورفع مستوى الخدمة.",
    };

    setTimeout(() => setUser(staticUser), 500);
  }, []);

  const tabs = [
    "حسابي",
    "الإشعارات",
    "الطلبات",
    "طلبات بانتظار الدفع",
    "تسجيل الخروج",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 rtl">
      {/* Top Bar */}
      <TopBar />

      {/* Profile Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {user ? (
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">
            {/* Profile Header */}
            <div className="flex flex-col items-center md:items-start mb-6">
              <CiUser
                size={188}
                className="rounded-full p-4 border-4 border-[#0B1261] mb-4"
              />
              <h2 className="text-2xl font-bold text-[#0B1261]">{user.name}</h2>

              {/* Tabs under name */}
              {/* Tabs under name */}
              <div className="mt-4 w-full flex gap-2 md:gap-4 overflow-x-auto scrollbar-none">
                {tabs.map((tab) => {
                  // Map tab to icon
                  let Icon;
                  switch (tab) {
                    case "حسابي":
                      Icon = CiUser;
                      break;
                    case "الإشعارات":
                      Icon = IoMdNotificationsOutline;
                      break;
                    case "الطلبات":
                      Icon = PiShoppingCartSimpleLight;
                      break;
                    case "طلبات بانتظار الدفع":
                      Icon = HiOutlineInboxArrowDown;
                      break;
                    case "تسجيل الخروج":
                      Icon = IoLogOutOutline;
                      break;
                    default:
                      Icon = null;
                  }

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-shrink-0 font-regular text-xl flex items-center gap-2 px-4 py-2  transition ${
                        activeTab === tab
                          ? "border-b border-[#0B1261] text-mustaqar"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {Icon && <Icon size={20} />}
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Profile Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-3 md:col-span-3 flex flex-col justify-between space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="font-extrabold text-xl text-right">العنوان</h3>
                  <p className="text-lg font-regular bg-[#F8F8F8] rounded w-full px-2 py-1">
                    {user.location}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="font-extrabold text-xl text-right">
                    البريد الإلكتروني
                  </h3>
                  <p className="text-lg font-regular bg-[#F8F8F8] rounded w-full px-2 py-1">
                    {user.email}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="font-extrabold text-xl text-right">الهاتف</h3>
                  <p className="text-lg font-regular bg-[#F8F8F8] rounded w-full px-2 py-1">
                    {user.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 font-medium">
            جارٍ تحميل بيانات الحساب...
          </p>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
