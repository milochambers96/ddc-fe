/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ddc: {
          background: "#FAFAFA",
          text: "#111111",
          accent: "#4A3344",
          highlight: "#A01F7E",
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
