/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
        lexendDeca: ["Lexend Deca"],
      },
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeDown: "fadeDown .5s ease-out",
      },
      colors: {
        transparent: "transparent",
        "green-transparent": "rgba(42,124,111, 0.7)",
        "primary-green": "#2A7C6F",
        "secondary-green": "#5EC7B6",
        "secondary-green-transparent": "rgb(94, 199, 182, 0.25)",
        "footer-background-green": "#23655A",
        "footer-text-green": "#6B9D95",
        "primary-white": "#F0F0F0",
        "textbox-white": "#D9D9D9",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      boxShadow: {
        main: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      },
      textShadow: {
        glow: "0 0 10px #5EC7B6, 0 0 20px #5EC7B6, 0 0 30px #5EC7B6, 0 0 40px #5EC7B6",
      },
      backgroundImage: {
        "quote-background": "url('/src/images/quote-background.jpg')",
      },
      variants: {
        extend: {
          animation: ["hover"],
          textShadow: ["hover"],
        },
      },
      screens: {
        sm: "800px",
        md: "960px",
        lg: "1440px",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
