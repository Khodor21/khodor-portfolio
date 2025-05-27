"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data as projects } from "@/app/data/data";
import Image from "next/image";
function Carousel({ details = [], title }) {
  const [index, setIndex] = useState(0);

  if (!details || details.length === 0) {
    return (
      <div
        style={{
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        No images
      </div>
    );
  }

  const prev = () => setIndex((i) => (i === 0 ? details.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === details.length - 1 ? 0 : i + 1));

  return (
    <div
      style={{
        position: "relative",
        width: 320,
        height: 400,
        margin: "0 auto",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={details[index]}
            alt={title}
            width={320}
            height={400}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prev}
        style={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.7)",
          border: "none",
          borderRadius: "50%",
          width: 32,
          height: 32,
          cursor: "pointer",
        }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.7)",
          border: "none",
          borderRadius: "50%",
          width: 32,
          height: 32,
          cursor: "pointer",
        }}
        aria-label="Next"
      >
        ›
      </button>
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 6,
        }}
      >
        {details.map((_, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: i === index ? "#333" : "#ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 32 }}>
        Projects
      </h1>
      <div style={{ display: "grid", gap: 40 }}>
        {projects.map((project, idx) => (
          <motion.section
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{
              background: "#fff",
              borderRadius: 4,
              padding: 24,
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ fontSize: 24, marginBottom: 16 }}>{project.title}</h2>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 8 }}>Images</h3>
                <Carousel
                  details={project.details}
                  title={project.title + " images"}
                />
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
