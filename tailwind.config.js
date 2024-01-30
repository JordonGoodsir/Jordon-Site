/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#161A1D',
        'main-gradient': '#ffa449',
        // 'sky-blue': '#ddeeff',
        // 'tree-brown': '#A52A2A',
        // 'brick-brown': '#bd5858',
      }
    },
    keyframes: {
      flashingType: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      }
    }
  },

  plugins: [],
}