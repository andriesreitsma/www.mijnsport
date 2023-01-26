const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      'red': {
         50: '#FFE8EC',
        100: '#FFD3DA',
        200: '#FFA7B4',
        300: '#FF7A8F',
        400: '#FF647C',
        500: '#FF3856',
        600: '#FF2244',
        700: '#E61F3D',
        800: '#CC1B36',
        900: '#991429',
      },
      'navy': {
         50: '#E5E6EF',
        100: '#CCCEE0',
        200: '#93A1B0',
        300: '#748494',
        400: '#556575',
        500: '#405261',
        600: '#314351',
        700: '#253642',
        800: '#1d2b36',
        900: '#00063C',
      },
      'gray': {
        100: '#F6F4F2',
      }
    },
    extend: {
      fontFamily: {
        'sans': [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
        'display': ['Mikro']
      },
    },
  },
  plugins: [],
}