const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

// const colors = {
//   "teal-darkest": "#0d3331",
//   "teal-darker": "#20504f",
//   "teal-dark": "#38a89d",
// };

// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  //  colors: colors,
  backgroundColors: colors,
  theme: {
    colors: {
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      pink: colors.pink,
      yellow: colors.yellow,
    },
    extend: {
      width: {
        '410px': '410px',
      },
    },
    fontFamily: {
      sans: [
        '"Titillium Web"',
        'Helvetica',
        'Arial',
        'sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
