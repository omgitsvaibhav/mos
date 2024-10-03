/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        mont: "Montserrat",
        playfair: "'Playfair Display'"
      },
      backgroundImage: {
        'home': "url('/home/sukanya.jpg')"
      }
      // backgroundImage: {
      //   "gradient-colour": "linear-gradient(57.5deg, #1c1c1c 50%, #272727 50%)",
      // },
      // keyframes: {
      //   slideUp: {
      //     "0%": { transform: "translateY(50px)", opacity: "0" },
      //     "100%": { transform: "translateY(0)", opacity: "1" },
      //   },
      //   fadeIn: {
      //     "0%": {
      //       opacity: "0",
      //     },
      //     "100%": {
      //       opacity: "1",
      //     },
      //   },
      //   liftAndChangeColor: {
      //     from: {
      //       transform: "translateY(0)",
      //       "background-color": "#3c3c3c",
      //     },
      //     to: {
      //       transform: "translateY(-5px)",
      //       "background-color": "#4c4c4c",
      //     },
      //   },
      //   cardFadeIn: {
      //     "0%": {
      //       transform: "translateY(50px)",
      //       opacity: "0",
      //     },
      //     "100%": {
      //       transform: "translateY(0)",
      //       opacity: "1",
      //     },
      //   },
      // },
    },
    animation: {
      slideUp: "slideUp 1s ease",
      fadeIn: "fadeIn 0.8s ease-in",
      cardFadeIn: "cardFadeIn 1s ease",
    },
  },
  plugins: [],
};
