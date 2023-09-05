/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropSepia: {
        10: ".10",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
