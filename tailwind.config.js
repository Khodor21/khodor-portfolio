/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#F1EFC8",
        second: "#0F4415",
        third: "#063E0C",
        fourth: "#D4D4D4",
        white: "#ffff",
        red: "#FF0000",
        gray: "#808080",
        blue: "#3B82F6",
      },
    },
  },
  plugins: [],
};
