"use client";

import { motion } from "framer-motion";

export default function ArAboutSection() {
  return (
    <section id="about" dir="rtl" className="bg-[#050509] text-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="flex flex-col gap-3 mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-xs md:text-sm text-white/70 handiReg w-fit">
            <span className="w-2 h-2 rounded-full bg-[#f4c542]" />
            من أنا؟
          </span>

          <h2 className="handiBold text-2xl md:text-3xl lg:text-4xl text-white">
            لمحة <span className="text-[#f4c542]">عنّي</span>
          </h2>
        </div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#0b0b10] border border-white/10 p-8 md:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
        >
          {/* GLOW BACKGROUND */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-10 w-48 h-48 bg-[#f4c542]/25 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-[#a855f7]/20 rounded-full blur-3xl" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col gap-8 text-white">
            {/* About me */}
            <div>
              <h3 className="handiBold text-xl md:text-2xl mb-3">
                🧑‍💻 من هو خضر حسن؟
              </h3>
              <p className="handiReg text-white/70 leading-relaxed text-sm md:text-base">
                أنا <span className="handiBold text-white">خضر حسن</span>، مُحبّ
                للتصاميم وشغوف بالبرمجة، وطالب علم شرعي — أعيش بين عالم الإبداع
                الرقمي وعالم المعرفة الشرعية. أسعى دائمًا لتقديم واجهات بسيطة،
                واضحة، ومريحة للمستخدم.
              </p>
            </div>

            {/* Study path / Education timeline */}
            <div>
              <h3 className="handiBold text-xl md:text-2xl mb-3">
                🎓 المسار الدراسي والعلمي
              </h3>

              <div className="relative pr-4 md:pr-6">
                {/* الخط العمودي */}
                <div className="absolute top-1 bottom-1 right-1 md:right-2 w-[2px] bg-white/15" />

                <div className="space-y-4 md:space-y-5 text-sm md:text-base handiReg text-white/70">
                  {/* 2018 - 2021 */}
                  <div className="relative flex flex-col gap-1">
                    <span className="absolute -right-[11px] md:-right-[13px] top-1 w-3 h-3 rounded-full bg-[#f4c542] border border-black/40" />
                    <p className="text-[11px] md:text-xs text-white/50">
                      2018 – 2021
                    </p>
                    <p>دراسة هندسة كهرباء.</p>
                  </div>

                  {/* 2021 - 2022 */}
                  <div className="relative flex flex-col gap-1">
                    <span className="absolute -right-[11px] md:-right-[13px] top-1 w-3 h-3 rounded-full bg-[#f4c542] border border-black/40" />
                    <p className="text-[11px] md:text-xs text-white/50">
                      2021 – 2022
                    </p>
                    <p>
                      الانتقال إلى دراسة البرمجة والتصميم والتركيز على المجال
                      الرقمي.
                    </p>
                  </div>

                  {/* 2023 - now */}
                  <div className="relative flex flex-col gap-1">
                    <span className="absolute -right-[11px] md:-right-[13px] top-1 w-3 h-3 rounded-full bg-[#f4c542] border border-black/40" />
                    <p className="text-[11px] md:text-xs text-white/50">
                      2023 – حتى الآن
                    </p>
                    <p>طلب العلوم الشرعية ضمن برنامج لبناء منهجي متوازن.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What I offer */}
            <div>
              <h3 className="handiBold text-xl md:text-2xl mb-3">
                🎯 ماذا أقدّم؟
              </h3>
              <ul className="list-disc pr-5 text-white/70 handiReg leading-relaxed text-sm md:text-base">
                <li>تصميم واجهات مواقع وتطبيقات</li>
                <li>تحسين تجربة المستخدم UX</li>
                <li>بناء صفحات هبوط عربية احترافية</li>
                <li>تصميم واجهات متاجر إلكترونية</li>
                <li>تصميم لوحات تحكّم Dashboard UI</li>
              </ul>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="handiBold text-xl md:text-2xl mb-3">
                💡 نقاط قوتي
              </h3>
              <ul className="list-disc pr-5 text-white/70 handiReg leading-relaxed text-sm md:text-base">
                <li>حلّ المشكلات بأسلوب منطقي وفعّال</li>
                <li>تبسيط الواجهات المعقدة</li>
                <li>قوة حضور وشخصية عملية</li>
                <li>شغف كبير بالتعلّم المستمر</li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="handiBold text-xl md:text-2xl mb-3">
                🛠️ أدواتي المفضّلة
              </h3>
              <p className="handiReg text-white/70 text-sm md:text-base">
                Figma — Next.js — Tailwind CSS — Node.js — MongoDB
              </p>
            </div>

            {/* Freelancing */}
            <div>
              <h3 className="handiBold text-xl md:text-2xl mb-3">
                🧩 خبرة العمل
              </h3>
              <p className="handiReg text-white/70 text-sm md:text-base">
                أعمل كـ<strong>فريلانسر</strong> منذ سنتين، وأحب التعاون مع
                أصحاب المشاريع الصغيرة والمتاجر الإلكترونية وكل من يريد واجهة
                عربية محترفة.
              </p>
            </div>

            {/* Personal touch */}
            <div>
              <h3 className="handiBold text-xl md:text-2xl mb-3">
                ❤️ لمحة شخصية
              </h3>
              <p className="handiReg text-white/70 text-sm md:text-base">
                مُحبّ للقراءة، ومُتابع لكرة القدم ،ومع ذلك أهتم بمواكبة التحليل
                السياسي ومعرفة ما وراء الأخبار.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
