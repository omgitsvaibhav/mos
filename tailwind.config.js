/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "391px",
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
        'home': "url('https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729331674/header_ns8mgt.webp')",
        'about': "url('https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729331863/header_zmr218.webp')",
        'service': "url('https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729331727/header_fda3qy.webp')",
        'lookbook': "url('https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729331681/header_gxlst0.webp')",
        'contact': "url('https://res.cloudinary.com/dsy1vfp2c/image/upload/v1729332279/contact_lgbqy9.webp')"
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
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
