/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png')",
      },
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
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    }, 
  },
  plugins: [],
};
