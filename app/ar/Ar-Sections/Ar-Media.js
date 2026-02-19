"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/app/data/projects";

export default function ArProjectsSection() {
  return (
    <section
      id="projects"
      dir="rtl"
      className="bg-[#050509] text-gray-100 pb-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="flex flex-col gap-3 mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-xs md:text-sm text-white/70 handiReg w-fit">
            <span className="w-2 h-2 rounded-full bg-[#f4c542]" />
            معرض أعمالي
          </span>

          <h2 className="handiBold text-2xl md:text-3xl lg:text-4xl text-white">
            مشاريع مختارة من أعمالي في تصميم
            <span className="text-[#f4c542]">الواجهات وتجربة المستخدم</span>
          </h2>

          <p className="text-sm md:text-base handiReg text-white/60 max-w-2xl">
            مجموعة من المشاريع التي عملت عليها، تشمل صفحات هبوط، تطبيقات موبايل،
            ولوحات تحكّم — مع التركيز على البساطة، الوضوح، وتجربة مستخدم مريحة.
          </p>
        </div>

        {/* GRID OF PROJECTS */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.id || index}
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[30px] bg-[#0b0b10] border border-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* gradient overlay like reference */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* TEXT OVERLAY */}
              <div className="absolute bottom-5 right-6 left-6 flex flex-col gap-1">
                <h3 className="handiBold text-lg md:text-xl text-white">
                  {project.title}
                </h3>
                {project.role && (
                  <p className="text-xs md:text-sm handiReg text-white/70">
                    {project.role}
                  </p>
                )}
              </div>

              {/* subtle hover border highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent group-hover:border-white/20 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
