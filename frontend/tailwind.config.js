/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent1: '	#1c3464', 
        accent2: '#034569',
        accent3: '	#235b79',
        accent4: '#086ca2',
        'primary-text': '#E2E8F0',
      },

    },
  },
  plugins: [],
}