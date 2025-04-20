/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto Flex", "sans-serif"],
      },
    },
  },
  plugins: [],
};
