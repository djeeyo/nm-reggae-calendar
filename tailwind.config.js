/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0A1F44",
        "brand-indigo": "#1E2A5C",
        "rasta-yellow": "#F5D300",
        "rasta-red": "#E10600",
        "rasta-green": "#1DAC24",
      },
    },
  },
  plugins: [
    require("shadcn-ui")
  ],
};
