module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {  
      screens: {
        'md2': '858px',
        'md3': '900px',
        '3xl': '1750px',
        '4xl': '1950px',
      },
      colors: {
        'my-white': '#171717',
        'my-black': '#303336',
        'my-orange': '#F5730A',
        'my-orange-100': '#FEF2D1',
        'my-orange-200': '#FEE1A4',
        'my-orange-300': '#FCCB77',
        'my-orange-400': '#FF4C0F',
        'my-orange-500': '#F6931E',
        'my-orange-600': '#D37315',
        'my-orange-700': '#B1570F',
        'my-orange-800': '#8E3F09',
        'my-orange-900': '#762D05',
        'my-purple-100': '#F5EEFD',
        'my-purple-200': '#EBDEFB',
        'my-purple-300': '#DBCAF3',
        'my-purple-400': '#C9B7E8',
        'my-purple-500': '#B19CD9',
        'my-purple-600': '#8872BA',
        'my-purple-700': '#634E9C',
        'my-purple-800': '#43317D',
        'my-purple-900': '#2D1D68',
        'my-2purple': '#680366',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
