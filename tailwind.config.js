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
        main: "#F9F9F9",
        second: "#551AA6",
        third: "#381668",
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
