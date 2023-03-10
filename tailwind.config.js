/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': ['"Open Sans"']
    },
    extend: {
      colors: {
        'phew': '#002a32',
        'pinky' : '#f40076',
        'shimmer': '#d2d2d2'
      },
    },
  },
  plugins: [],
}
