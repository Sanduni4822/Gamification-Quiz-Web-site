/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Luckiest Guy"', "cursive"], // For "Login" heading
        button: ['"Press Start 2P"', "cursive"], // For buttons
        body: ['"Fredoka One"', "cursive"], // For input & body text
      },
    },
  },
  plugins: [],
};
