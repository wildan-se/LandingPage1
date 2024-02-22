/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255 237 213)",
        secondary: "rgb(251 146 60)",
      },
    },
  },
  plugins: [],
};
