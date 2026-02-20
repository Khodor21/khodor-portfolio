import { FaUser, FaCube } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { GiWatch } from "react-icons/gi";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <FaUser size={40} />,
      title: "أكثر من",
      subtitle: "500 عميل",
    },
    {
      id: 2,
      icon: <FaCube size={40} />,
      title: "توصيل إلى",
      subtitle: "كل سوريا",
    },
    {
      id: 3,
      icon: <GiWatch size={44} />,
      title: "أكثر من",
      subtitle: "100 صنف",
    },
    {
      id: 4,
      icon: <BsShieldCheck size={46} />,
      title: "حماية مضمونة",
      subtitle: "على البضائع",
    },
  ];

  return (
    <section className="w-full py-12 bg-white" dir="rtl">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Section Title with Highlighter Effect */}
        <div className="mb-10 text-center">
          <h2 className="relative inline-block px-2 text-4xl md:text-4xl font-extrabold text-[#0B1261] z-10 after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[14px] after:bg-[#C8CEFF] after:-z-10">
            مميّزات مُستقر
          </h2>
        </div>

        {/* Features Grid - 2x2 on mobile, 4 in a row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full max-w-5xl">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              <div className="text-[#0B1261] mb-3">{feature.icon}</div>
              <p className="text-black font-bold text-lg md:text-xl leading-tight">
                {feature.title}
                <br />
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
