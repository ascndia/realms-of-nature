/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#white',
        secondary:'#65748b',
        secondary_dark:'#022c22',
        dark: '#052e16'
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
}
