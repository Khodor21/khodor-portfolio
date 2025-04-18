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
        black: "#121212",
        white: "#EFEFEF",
        green: "#26CF7B",
        third: "#088F4C",
        fourth: "#D4D4D4",
        red: "#FF0000",
        gray: "#808080",
        blue: "#3B82F6",
      },
    },
  },
  plugins: [],
};
