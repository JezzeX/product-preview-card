/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //Primary
        darkCyan: "hsl(158, 36%, 37%)",
        darkerCyan: "hsl(158, 36%, 20%)",
        cream: "hsl(30, 38%, 92%)",
        //Neutral
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
    },
  },
  plugins: [],
};
