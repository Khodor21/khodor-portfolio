/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── Reference Palette (orange → Deep Teal) ───
        paper: "#F7F5F0",
        cream: "#F1EEE7",
        surface: "#FFFFFF",
        ink: "#1A1815",
        muted: "#6B675F",
        line: "#E3DFD5",
        accent: {
          DEFAULT: "#0F766E",
          dark: "#0A5750",
          light: "#14B8A6",
        },
        // ─── Legacy (kept for compatibility) ───
        black: "#191919",
        white: "#fdfdfd",
        green: "#26CF7B",
        third: "#088F4C",
        fourth: "#D4D4D4",
        red: "#FF0000",
        gray: "#fafafa",
        blue: "#3797FF",
        background: "#04070D",
        main: "#D5DBE6",
        mustaqar: "#0a2a8a",
      },
      fontFamily: {
        sans: ["Thmanya-Sans", "sans-serif"],
        serif: ["Thmanya-Serif", "serif"],
      },
      backgroundImage: {
        "radial-dark":
          "radial-gradient(ellipse at center, #001f1f 0%, #000000 100%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
