const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        truegray: colors.trueGray,
        lightBlue: colors.sky,
      },
      fontFamily:{
        body: ['Helvetica']
      },
      minWidth: {
        '100': '400px',
      },
      maxWidth: {
        '100': '100px',
      },
      flex: {
        nostrink: '1 0 auto',
        one: '1'
      },
      zIndex:{
        '-10': '-10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}