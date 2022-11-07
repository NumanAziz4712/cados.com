/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Lexend, ui-sans-serif, system-ui",
      },
      dropShadow: {
        "3xl": "0 10px 35px rgba(68, 183, 229, 0.1)",
        "4xl": [
          "0 35px 35px rgba(68, 183, 229, 0.25)",
          "0 45px 65px rgba(68, 183, 229, 0.25)",
        ],
      },
    },
  },
  plugins: [],
};
