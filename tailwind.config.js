/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleCustom: '#603c86',  
      },
      fontFamily: {
        'el-messiri': ['"El Messiri"', 'sans-serif'],  // Your custom font
      },
    },
  },
  plugins: [],
}
