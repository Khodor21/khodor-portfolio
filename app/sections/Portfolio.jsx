"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";
import Banner1 from "../assets/images/Ecommerce Saas Banner.jpg";
import Banner2 from "../assets/images/Menu Saas Banner.jpg";

const easing = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay: 0.12 * i },
  }),
};

const saasBanners = [
  {
    id: "ecommerce-saas",
    title: "منصة محلّي",
    subtitle: "افتح متجرك الإلكتروني خلال ثواني وبدون خبرة تقنية",
    image: Banner1,
    href: "https://www.mahally.app",
  },
  {
    id: "menu-saas",
    title: "مينوزلي (Menusly)",
    subtitle: "ودّع الطباعة، منيو ذكية لمطعمك بتحكم كامل بأقل من دقيقة",
    image: Banner2,
    href: "https://www.menusly.vercel.app",
  },
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [externalLink, setExternalLink] = useState("");

  const handleProjectClick = (e, link) => {
    e.preventDefault();
    setExternalLink(link);
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative w-full bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-4">
          {/* ─── منصّاتي الخاصة ─── */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-2 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <p className="thmanya-bold text-sm text-ink md:text-base">
              منتجات رقمية (SaaS) أمتلكها وأطوّرها
            </p>
          </motion.div>

          {/* ─── SaaS Banners ─── */}
          <div className="mt-6 flex flex-col gap-3 md:mt-8 md:gap-4">
            {saasBanners.map((banner, i) => (
              <motion.a
                key={banner.id}
                custom={1 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                href={banner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-accent"
              >
                {/* 16:9 banner */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.02]"
                  />
                </div>

                {/* Bottom label strip */}
                <div className="flex items-center justify-between border-t border-line px-4 py-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <span className="thmanya-bold text-sm text-ink">
                      {banner.title}
                    </span>
                    <span className="thmanya-light text-xs text-muted">
                      {banner.subtitle}
                    </span>
                  </div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-accent"
                  >
                    <path d="M17 17L7 7" />
                    <path d="M7 15V7h8" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          {/* ─── أعمال ─── */}
          {/* ─── أعمال ─── */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mt-10 md:mt-12"
          >
            <h2 className="thmanya-serif text-2xl leading-tight text-ink md:text-3xl">
              أعمال مختارة
            </h2>
            <p className="thmanya-light mt-2 text-sm text-muted">
              مجموعة منتقاة من أبرز المشاريع والمنصات التي طوّرتها.
            </p>
          </motion.div>

          {/* ─── Grid ─── */}
          <div className="mt-5 grid grid-cols-2 gap-3 md:mt-7 md:grid-cols-3 md:gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                custom={4 + i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                href={project.link}
                onClick={(e) => handleProjectClick(e, project.link)}
                className="group block cursor-pointer"
              >
                <div className="project-container relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                  />
                  <div className="overlay pointer-events-none">
                    <div className="overlay-content">
                      <h4 className="text-[15px]">{project.title}</h4>
                      <p className="thmanya-light mt-1 text-[13px] text-paper/80">
                        {project.role}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-1 pb-1 pt-3 md:hidden">
                  <h3 className="thmanya-bold text-sm leading-snug text-ink">
                    {project.title}
                  </h3>
                  <p className="thmanya-light mt-0.5 text-xs text-muted">
                    {project.role}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── External Link Modal ─── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-paper p-6 shadow-2xl"
              dir="rtl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-ink"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <h3 className="thmanya-bold text-lg text-ink">مغادرة الصفحة</h3>
              </div>
              <p className="thmanya-light mb-6 text-sm leading-relaxed text-muted">
                أنت على وشك الانتقال إلى رابط خارجي لمشاهدة هذا العمل. هل تود
                المتابعة؟
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 rounded-lg bg-ink py-2.5 text-center text-sm text-paper transition-transform hover:scale-105"
                >
                  <span className="thmanya-bold">نعم، تابع</span>
                </a>
                <button
                  onClick={() => setModalOpen(false)}
                  className="flex-1 rounded-lg border border-line bg-surface py-2.5 text-center text-sm text-ink transition-colors hover:bg-line/50"
                >
                  <span className="thmanya-bold">إلغاء</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
