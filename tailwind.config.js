/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Specify the paths to your HTML and JS files

  theme: {
    fontFamily:{
      comicNeue: ["Comic Neue", "sans-serif"],
      atma: ["Atma", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

