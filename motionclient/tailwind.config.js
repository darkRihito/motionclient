/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bkg3: "url('/assets/bkg/background03.webp')",
        bkg2: "url('/assets/bkg/background02.webp')",
        bkg0: "url('/assets/bkg/background01.webp')",
        bkg1: "url('/assets/bkg/bkg1.jpg')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: {
          white: "#FAFAFA",
        },
        black: {
          100: "#18181b",
          200: "#262626",
          DEFAULT: "#171717",
        },
        primary: "#E3D6A9",
        secondary: "#74664D",
        ternary: "#AB3F2D",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(10%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoom: {
          "0%": { opacity: 0, transform: "scale(80%)" },
          "100%": { opacity: 1, transform: "scale(100%)" },
        },
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)",
        zoom: "zoom .25s ease-in-out forwards var(--delay, 0)",
      },
    },
  },
  plugins: [],
};
