// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
  variants: {
    extend: {},
  },
  plugins: [],
}