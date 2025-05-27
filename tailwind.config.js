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
        black: "#191919",
        white: "#fdfdfd",
        green: "#26CF7B",
        third: "#088F4C",
        fourth: "#D4D4D4",
        red: "#FF0000",
        gray: "#fafafa",
        blue: "#3797FF",
      },
    },
  },
  plugins: [],
};
