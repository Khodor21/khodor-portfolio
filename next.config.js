/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
const withVideos = require("next-videos");

module.exports = withVideos(nextConfig);
