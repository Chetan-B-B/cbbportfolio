/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ["Berkshire Swash", "sans-serif"],
        portfolio: ["Instrument Serif", "sans-serif"],
      },
      screens: {
        'about-floaters': { min: '600px', max: '900px' },
      },
      borderRadius: {
        xl: "123px",
      },
    },
  },
  plugins: [],
};
