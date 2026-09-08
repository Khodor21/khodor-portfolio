"use client";
import React from "react";
import { motion } from "framer-motion";
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
    title: "متجر بيلدر",
    subtitle: "أنشئ متجرك الإلكتروني بنفسك",
    image: Banner1,
    href: "#",
  },
  {
    id: "menu-saas",
    title: "منيو بيلدر",
    subtitle: "أنشئ منيو مطعمك بنفسك",
    image: Banner2,
    href: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="relative w-full bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        {/* ─── منصّاتي الخاصة ─── */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="thmanya-light text-xs text-muted md:text-sm">
            منصّات أمتلكها وأطوّرها
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
                <div className="flex items-center gap-3">
                  <span className="thmanya-bold text-sm text-ink">
                    {banner.title}
                  </span>
                  <span className="thmanya-light hidden text-xs text-muted sm:inline">
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
        <motion.h2
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="thmanya-serif mt-8 text-2xl leading-tight text-ink md:mt-10 md:text-3xl"
        >
          أعمال
        </motion.h2>

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
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
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
  );
};

export default Portfolio;
