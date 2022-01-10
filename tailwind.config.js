const colors = require('tailwindcss/colors')

module.exports = {
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
        '100': '100px',
        '250': '250px',
        '300': '300px',
        '400': '400px',
        '600': '600px',
        '1/4': '25%',
        '1/2': '50%',
      },
    },
  },
  plugins: [],
}