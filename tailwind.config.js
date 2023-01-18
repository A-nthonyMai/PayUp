/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#463145',
        'thunder-purple': '#312231',
        'don-juan-purple': '#594659',
      },
      textColor: {
        'bon-jour-purple': '#EDEAED'
      },
    },
  },
  plugins: [],
}
