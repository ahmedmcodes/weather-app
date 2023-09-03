/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropSepia: {
        10: ".10",
      },
    },
  },
  plugins: [],
};
