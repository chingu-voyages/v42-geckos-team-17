/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          100: '#9597A5',
          200: '#2D314D',
        },
        accent1: 'rgb(51, 211, 94)', // Green
        accent2: 'rgb(42, 182, 217)', // Blue
        bg1: 'rgba(51, 211, 94, 0.1)', // Transparent green
        bg2: 'rgba(42, 182, 217, 0.1)', // Transparent blue
        bg3: '#FFFFFE', // White
        bg4: '#2D314D', // Dark blue
        modal: 'rgba(0, 0, 0, 0.85)',
        error: '#EE374A', // Red
        link: '#2AB6D9', // Text link
      },
      fontFamily: {
        body: ['Inter'],
      },
      boxShadow: {
        button: 'inset 0 0 0 1px #2D314D',
      },
    },
  },
  plugins: [],
}
