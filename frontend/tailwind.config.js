/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent1: "#FF8C00",
        accent2: "#FB4570",
        accent3: "#2b374b",
        accent4: "#178a94",
        "primary-text": "#E2E8F0",
      },
    },
  },
  plugins: [],
};
