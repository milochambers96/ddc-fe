/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["object-[71.5%_28.5%]"],
  theme: {
    extend: {
      colors: {
        ddc: {
          background: "#FAFAFA",
          text: "#111111",
          accent: "#4A3344",
          highlight: "#A01F7E",
          faded: "#A09999;",
          black: "#000",
          button: "#EFEFEF",
        },
      },
      fontFamily: {
        title: ["'Hanken Grotesk'", "serif"],
        detail: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
