/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/pages/**/*.{html,js}"],
  theme: {
    fontFamily: {
      instrumentsans: "Instrument Sans, sans-serif",
    },
    extend: {
      colors: {
        primary: "#016552",
        secondary: "#F5FFFD",
        grey: "#667085",
        dark: "#121F3E",
        page: "#F8F8FA",
        success: "#2ED16C",
        neutral600: "#475467",
      },
    },
  },
  plugins: [],
};
