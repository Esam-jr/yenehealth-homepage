/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '##E17A6E',
          50: '#fef5f3',
          100: '#fce9e4',
          200: '#f8d4ca',
          300: '#f4beaf',
          400: '#eda894',
          500: '#E87860',
          600: '#d85d45',
          700: '#c44933',
          800: '#b03a26',
          900: '#8e2d1f',
        },
        teal: {
          DEFAULT: '#4A9B8E',
          50: '#f0faf8',
          100: '#d9eeea',
          200: '#b3ddd5',
          300: '#8dccbf',
          400: '#67bbaa',
          500: '#4A9B8E',
          600: '#407a70',
          700: '#365952',
          800: '#2c3834',
          900: '#221d16',
        },
        lightBg: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
