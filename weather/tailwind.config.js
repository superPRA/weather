/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "box-light": "url('https://www.stockvault.net/data/2014/06/23/159139/preview16.jpg')",
        "box-dark": "url('https://img.freepik.com/free-photo/sky-full-stars-silhouettes-trees_181624-12446.jpg?w=1060&t=st=1673201427~exp=1673202027~hmac=f51b4cbc2388f7fe109123420060a93f8ac17922a1f4021967e9f402500499c2')"
      },
      fontSize: {
        "unit" : "3rem",
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
