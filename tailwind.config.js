/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#161622',
        'secondary': '#FF8C00',
        'tertiary': '#BC38F9',
        'black': {
          '900': '#000',
          'first': '#1E1E2D',
        }
      },
      fontFamily: {
        'poppins-regular': ['PoppinsRegular', 'sans-serif'],
        'poppins-semibold': ['PoppinsSemiBold', 'sans-serif'],
        'poppins-bold': ['PoppinsBold', 'sans-serif'],
      },
    

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

