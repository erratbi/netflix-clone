const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "2rem",
          xl: "5.5rem",
        }
      },
      fontFamily: {
        sans: ["Netflix Sans", ...fontFamily.sans],
      }
    },
  },
  plugins: [],
};

module.exports = config;
