// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main': '#211d1b',
        'highlight-dark': '#1a9b69',
        'sky-blue': '#87CEEB',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}