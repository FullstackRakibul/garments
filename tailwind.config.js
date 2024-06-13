/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004539",
          light: "#9c27b0",
          dark: "#6a0dad",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        primary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
