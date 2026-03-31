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
  <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-zinc-200 bg-white text-[14px] font-regular text-primary tracking-wide shadow-sm">
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
      className="w-7 h-7 flex items-center justify-center rounded-full border border-zinc-200 bg-white text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
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
    <footer dir="rtl" className="w-full bg-primary border-t border-zinc-200">
      {/* ── Top ── */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {/* Brand */}
        <div className="space-y-2">
          <h3 className="text-lg font-extrabold text-white">عن متجرنا</h3>

          <p className="text-sm font-regular text-white/90 max-w-md leading-relaxed">
            {brand?.description}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h3 className="text-lg font-extrabold text-white">تواصل معنا</h3>

          <ul className="space-y-1 text-sm text-white/90">
            {contact?.phone && (
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 hover:text-zinc-900"
                >
                  <MdPhone
                    size={24}
                    className="text-primary bg-white p-1 rounded-full shadow-lg"
                  />
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
                  <MdEmail
                    size={24}
                    className="text-primary bg-white p-1 rounded-full shadow-lg"
                  />
                  <span>{contact.email}</span>
                </a>
              </li>
            )}
          </ul>

          {/* Socials */}
          <div className="flex gap-2 flex-wrap mt-2">
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
            <div>
              <span className="font-bold text-white text-extrabold">
                في المجال منذ{" "}
              </span>
              <span dir="ltr" className="font-bold text-white">
                2020
              </span>
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-white gap-2">
        {(country || language) && (
          <button className="flex items-center font-extrabold gap-1.5 hover:text-zinc-800">
            <HiOutlineGlobeAlt size={14} />
            <span>{country}</span>
          </button>
        )}

        <p className="font-bold">
          جميع الحقوق محفوظة {brand?.name?.toUpperCase?.()}{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
