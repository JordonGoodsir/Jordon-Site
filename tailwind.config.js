/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#211d1b',
        'highlight': '#ffa449',
        'sky-blue': '#ddeeff',
        'tree-brown': '#A52A2A',
        'brick-brown': '#bd5858',
      }
    },
  },

  plugins: [],
}