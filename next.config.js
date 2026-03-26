/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "placehold.co"],
  },
};

const withVideos = require("next-videos");

module.exports = withVideos(nextConfig);