/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['.index.html', './src/**/*.{vue, js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'mcl-orange': '#ff6d01',
        'mcl-pale-orange': '#ff984a',
        'mcl-okx-pink': '#fe1872',
        'dark-mode-gray': '#121212',
        'dark-gray': '#222222',
        'light-gray': '#363636',
        'xkom-gray': '#a5a5a5'
      }
    }
  },
  plugins: []
}
