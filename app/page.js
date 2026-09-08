"use client";
import React from "react";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import { Emoji } from "emoji-picker-react";

const Page = () => {
  return (
    <div>
      <Hero />
      <Portfolio />

      {/* ─── Footer ─── */}
      <footer className="w-full bg-paper border-t border-line">
        <div className="mx-auto max-w-3xl px-4 py-6 flex items-center justify-center gap-1">
          <p className="thmanya-light text-xs text-muted">صُنع بـ لبنان</p>
          <div className="flex items-center gap-1.5">
            <Emoji size={18} unified="1f1f1-1f1e7" />
          </div>
          <p className="thmanya-light text-xs text-muted">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
