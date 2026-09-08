"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";

const easing = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay: 0.12 * i },
  }),
};

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
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href="#" // ← رابط منيو بيلدر
              className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-2 pe-4 ps-5 transition-colors duration-300 hover:border-accent"
            >
              <span className="thmanya-bold text-sm text-ink transition-colors duration-300 group-hover:text-accent">
                منيو بيلدر
              </span>
              <span className="thmanya-light hidden text-xs text-muted sm:inline">
                أنشئ منيو مطعمك بنفسك
              </span>
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
            </a>

            <a
              href="#" // ← رابط متجر بيلدر
              className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-2 pe-4 ps-5 transition-colors duration-300 hover:border-accent"
            >
              <span className="thmanya-bold text-sm text-ink transition-colors duration-300 group-hover:text-accent">
                متجر بيلدر
              </span>
              <span className="thmanya-light hidden text-xs text-muted sm:inline">
                أنشئ متجرك الإلكتروني بنفسك
              </span>
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
            </a>
          </div>
        </motion.div>

        {/* ─── أعمال ─── */}
        <motion.h2
          custom={1}
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
              custom={2 + i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Card */}
              <div className="project-container relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
                />
                {/* Overlay — desktop hover only */}
                <div className="overlay pointer-events-none">
                  <div className="overlay-content">
                    <h4 className="text-[15px]">{project.title}</h4>
                    <p className="thmanya-light mt-1 text-[13px] text-paper/80">
                      {project.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info — mobile visible directly */}
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
