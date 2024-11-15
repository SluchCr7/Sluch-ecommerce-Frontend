/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ModeOne: {
          primary: "#ffffff",
          text : "#000000",
          secondary: "#a4133c",
          third : "#ff8fa3"
        },
        ModeTwo: {
          primary: "#000000",
          text : "#ffffff",
          secondary: "#7b2cbf",
          third : "#ff9100"
        },
      },
    },
  },
  plugins: [],
};
