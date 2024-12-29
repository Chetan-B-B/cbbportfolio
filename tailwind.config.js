/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ["Berkshire Swash", "sans-serif"],
        portfolio: ["Instrument Serif", "sans-serif"],
      },
      borderRadius: {
        xl: "123px",
      },
    },
  },
  plugins: [],
};
