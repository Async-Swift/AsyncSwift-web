/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        banner: "calc(100vh - 80px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mont: ["var(--font-montserrat)"],
      },
      animation: {
        fadeIn: "fadeIn 1s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%" },
          "50%": { opacity: "50%" },
          "100%": { opacity: "100%" },
        },
      },
    },
  },
  plugins: [],
};
