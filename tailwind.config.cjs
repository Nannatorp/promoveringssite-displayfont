/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      widest: ".40em",
    },
    extend: {
      colors: {
        beige: "#D6D2C4",
        mosgreen: "#013035",
      },
      fontFamily: {
        montserrat: "’Montserrat’, sans-serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
