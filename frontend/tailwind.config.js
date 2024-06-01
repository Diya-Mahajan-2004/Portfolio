/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent1: '#F56565', // Example colors
        accent2: '#ED64A6',
        accent3: '#68D391',
        accent4: '#4FD1C5',
        'primary-text': '#E2E8F0',
      },

    },
  },
  plugins: [],
}