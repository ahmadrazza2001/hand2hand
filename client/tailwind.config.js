/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "black",
        darkGray: "#1f1f1e",
        lightGray: "#616160",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
