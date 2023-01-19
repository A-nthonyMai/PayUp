/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xiketic-purple': '#241924',
        'dark-purple': '#251825',
        'dark-purple2': '#3E283E',
        'jazzberry-jam': '#961D4E',
        'english-violet': '#573857',
        'black-purple': '#0C080C'
      },
      textColor: {
        'thistle-purple': '#D7C1D7'
      },
    },
  },
  plugins: [],
}
