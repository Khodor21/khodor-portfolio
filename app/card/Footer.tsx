"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdPhone, MdEmail } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi";

// ─── Payment method pill component ───────────────────────────────────────────
const PaymentBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-zinc-200 bg-white text-[11px] font-semibold text-zinc-700 tracking-wide shadow-sm">
    {label}
  </span>
);

// ─── Social icon button ───────────────────────────────────────────────────────
const SocialBtn = ({
  icon: Icon,
  href = "#",
  label,
}: {
  icon: React.ElementType;
  href?: string;
  label: string;
}) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200 shadow-sm"
  >
    <Icon size={15} />
  </a>
);

// ─── Main Footer ──────────────────────────────────────────────────────────────
export default function Footer() {
  const paymentMethods = [
    "tamara",
    "Mastercard",
    "VISA",
    "mada",
    "Samsung Pay",
    "Apple Pay",
    "tabby",
  ];

  return (
    <footer
      dir="rtl"
      className="w-full bg-[#fafafa] border-t border-zinc-200 font-[system-ui,sans-serif]"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* ── Top section ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand description – RIGHT column (RTL = starts on right) */}
        <div className="md:col-span-2 space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tighter text-zinc-900 select-none">
              Z<span className="text-zinc-400">brand</span>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 max-w-md">
            ZBRAND علامة تجارية سعودية، تأسست في عام 2021. رسالتنا هي التصميم
            البسيط والجودة العالية، ونسعى دائمًا لتطوير مهاراتنا في التصميم
            وتحسين جودة الملابس. أولويتنا رضا العملاء وتقديم تجربة فريدة ومميزة
            لهم.
          </p>
        </div>

        {/* Contact – LEFT column */}
        <div className="space-y-5">
          <h3 className="text-base font-bold text-zinc-900 border-b border-zinc-200 pb-2">
            تواصل معنا
          </h3>
          s
          <ul className="space-y-3 text-sm text-zinc-600">
            <li>
              <a
                href="tel:+966508116023"
                className="flex items-center gap-2 hover:text-zinc-900 transition-colors"
              >
                <MdPhone size={16} className="text-zinc-400 flex-shrink-0" />
                <span dir="ltr">966508116023</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@zbrandsa.com"
                className="flex items-center gap-2 hover:text-zinc-900 transition-colors"
              >
                <MdEmail size={16} className="text-zinc-400 flex-shrink-0" />
                <span>info@zbrandsa.com</span>
              </a>
            </li>
          </ul>
          {/* Social icons */}
          <div className="flex items-center gap-2 flex-wrap pt-1">
            <SocialBtn icon={FaTiktok} label="TikTok" href="#" />
            <SocialBtn icon={FaSnapchatGhost} label="Snapchat" href="#" />
            <SocialBtn icon={FaXTwitter} label="X / Twitter" href="#" />
            <SocialBtn icon={FaInstagram} label="Instagram" href="#" />
            <SocialBtn icon={FaFacebookF} label="Facebook" href="#" />
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-zinc-200" />

      {/* ── Middle section: CR + Payment methods ── */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Commercial registration */}
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <div className="w-10 h-10 flex items-center justify-center rounded border border-zinc-200 bg-white shadow-sm">
            {/* Placeholder for Maroof / ZAKAT badge */}
            <span className="text-[9px] font-bold text-zinc-400 leading-none text-center">
              CR
            </span>
          </div>
          <div className="leading-snug">
            <span className="block font-semibold text-zinc-700">
              الرقم التجاري
            </span>
            <span dir="ltr">2050147892</span>
          </div>
        </div>

        {/* Payment methods */}
        <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end">
          {paymentMethods.map((m) => (
            <PaymentBadge key={m} label={m} />
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-zinc-200" />

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
        {/* Language switcher */}
        <button className="flex items-center gap-1.5 hover:text-zinc-800 transition-colors">
          <HiOutlineGlobeAlt size={14} />
          <span>السعودية</span>
          <span className="text-zinc-300">|</span>
          <span>English</span>
        </button>

        {/* Copyright */}
        <p>جميع الحقوق محفوظة © ZBRAND {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
