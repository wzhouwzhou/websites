module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#919296',
          200: '#86878B',
          300: '#7A7B7F',
          400: '#6D6E72',
          500: '#5E6064',
          600: '#4E5054',
          700: '#3C3E43',
          800: '#1E2026',
          900: '#16181c',
          1000: '#14151a',
        },
        blue: {
          100: '#A4C1D6',
          200: '#93BEDB',
          300: '#88B7D7',
          400: '#81B5D7',
          500: '#7AB2D7',
          600: '#6CACD7',
          700: '#5EA7D8',
          800: '#50A1D8',
          900: '#3396d8',
        },
      },
    },
  },
  plugins: [],
};