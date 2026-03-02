"use client";

import TopBar from "./TopBar"; // adjust folder path if needed
import Footer from "./Footer"; // adjust folder path
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO: fetch profile from your API
    // example:
    // fetch("/api/user/profile")
    //   .then(res => res.json())
    //   .then(data => setUser(data));
  }, []);

  return (
    <div className="min-h-screen bg-white text-black rtl">
      {/* Top Bar */}
      <TopBar />

      {/* Profile Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">الملف الشخصي</h1>

        {/* User info */}
        {user ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Picture */}
            <div className="flex justify-center md:justify-start">
              <img
                src={user.avatar || "/default-avatar.png"}
                alt="الصورة الشخصية"
                className="w-40 h-40 rounded-full border-4 border-gray-200 object-cover"
              />
            </div>

            {/* Basic Info */}
            <div className="col-span-2 space-y-4">
              <div>
                <label className="text-lg font-semibold">الاسم:</label>
                <p className="text-xl text-[#0B1261]">{user.name}</p>
              </div>

              <div>
                <label className="text-lg font-semibold">
                  البريد الإلكتروني:
                </label>
                <p className="text-lg text-gray-600">{user.email}</p>
              </div>

              <div>
                <label className="text-lg font-semibold">رقم الهاتف:</label>
                <p className="text-lg text-gray-600">
                  {user.phone || "لم يتم التعريف بعد"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            جارٍ تحميل بيانات الحساب...
          </p>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
