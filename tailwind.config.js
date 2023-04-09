/** @type {import('tailwindcss').Config} */

//import img from "./src/img/ws.jpeg";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/ws.jpeg')",
      },
    },
  },
  plugins: [],
};
