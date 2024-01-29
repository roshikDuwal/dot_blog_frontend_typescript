/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#108ffc",
        darkblue: " #17222b",
        red: "#fe4554",
        lightblack: "#17222b",
        bgcolor: "#fcfcfc",
        footerbg:"#17222b"
      },
    },
  },
  plugins: [],
}