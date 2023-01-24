/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          100: '#525252',
          200: '#000000',
        },
        accent1: '#000000',
        accent2: '#000000',
        bg1: '#FAFAFA',
        bg2: '#F2F2F2',
      },
      fontFamily: {
        body: ['Inter'],
      },
    },
  },
  plugins: [],
}
