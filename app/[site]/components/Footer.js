"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdPhone, MdEmail } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi";

// Map string names from data to actual Icon Components
const iconMap = {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
};

// ─── Payment Badge ─────────────────────────────────────────
const PaymentBadge = ({ label }) => (
  <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-zinc-200 bg-white text-[11px] font-semibold text-zinc-700 tracking-wide shadow-sm">
    {label}
  </span>
);

// ─── Social Button ─────────────────────────────────────────
const SocialBtn = ({ icon, href = "#", label }) => {
  // Get the component from the map, or return null if not found
  const IconComponent = iconMap[icon];

  if (!IconComponent) return null;

  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200 shadow-sm"
    >
      <IconComponent size={15} />
    </a>
  );
};

const Footer = ({ data }) => {
  // Add a safety check in case data is undefined
  if (!data) return null;

  const {
    brand,
    contact,
    socials,
    paymentMethods,
    crNumber,
    country,
    language,
  } = data;

  return (
    <footer
      dir="rtl"
      className="w-full bg-[#fafafa] border-t border-zinc-200 font-[system-ui,sans-serif]"
    >
      {/* ── Top ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tighter text-zinc-900">
              {brand?.name?.[0]}
              <span className="text-zinc-400">{brand?.name?.slice(1)}</span>
            </span>
          </div>

          <p className="text-sm font-regular text-zinc-600 max-w-md leading-relaxed">
            {brand?.description}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-5">
          <h3 className="text-base font-bold text-zinc-900 border-b border-zinc-200 pb-2">
            تواصل معنا
          </h3>

          <ul className="space-y-3 text-sm text-zinc-600">
            {contact?.phone && (
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 hover:text-zinc-900"
                >
                  <MdPhone size={16} className="text-zinc-400" />
                  <span dir="ltr">{contact.phone}</span>
                </a>
              </li>
            )}

            {contact?.email && (
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 hover:text-zinc-900"
                >
                  <MdEmail size={16} className="text-zinc-400" />
                  <span>{contact.email}</span>
                </a>
              </li>
            )}
          </ul>

          {/* Socials */}
          <div className="flex gap-2 flex-wrap">
            {socials?.map((s, i) => (
              <SocialBtn key={i} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-200" />

      {/* Middle */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* CR */}
        {crNumber && (
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <div className="w-10 h-10 flex items-center justify-center border rounded bg-white">
              <span className="text-[9px] font-bold text-zinc-400">CR</span>
            </div>
            <div>
              <span className="block font-semibold text-zinc-700">
                الرقم التجاري
              </span>
              <span dir="ltr">{crNumber}</span>
            </div>
          </div>
        )}

        {/* Payments */}
        <div className="flex flex-wrap gap-2">
          {paymentMethods?.map((m, i) => (
            <PaymentBadge key={i} label={m} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-200" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-2">
        {(country || language) && (
          <button className="flex items-center gap-1.5 hover:text-zinc-800">
            <HiOutlineGlobeAlt size={14} />
            <span>{country}</span>
            <span className="text-zinc-300">|</span>
            <span>{language}</span>
          </button>
        )}

        <p>
          جميع الحقوق محفوظة © {brand?.name?.toUpperCase?.()}{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
