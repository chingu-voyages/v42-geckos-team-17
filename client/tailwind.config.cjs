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
        bg3: '#FFFFFE',
      },
      fontFamily: {
        body: ['Inter'],
      },
      boxShadow: {
        button: 'inset 0 0 0 1px #000000',
      },
    },
  },
  plugins: [],
}
