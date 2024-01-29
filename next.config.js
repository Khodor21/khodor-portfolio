/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
const withVideos = require("next-videos");

module.exports = withVideos(nextConfig);
