/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        body: ["Poppins"],
      },
      colors: {
        "primGreen": "#23D192"
      }
    },
  },
  plugins: [],
};
