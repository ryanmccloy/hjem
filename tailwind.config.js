/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#BC6C25",
        secondary: "#F7F1E1",
      },
      fontFamily: {
        primary: ["Bebas Neue", "cursive"],
        secondary: ["Montserrat", "sans-serif"],
      },
      height: {
        "screen-dvh": "100dvh",
      },
    },
  },
  plugins: [],
};
