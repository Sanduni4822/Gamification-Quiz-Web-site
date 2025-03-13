/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
      },
      fontFamily: {
        title: ['"Luckiest Guy"', "cursive"],
        button: ['"Press Start 2P"', "cursive"],
        body: ['"Fredoka One"', "cursive"],
      },
    },
  },
  plugins: [],
};
