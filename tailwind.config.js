/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      opacity: {
        62: "0.62",
      },
      backgroundColor: {
        primary: "#33648E",
      },
    },
  },
  plugins: [],
};
