// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // This content property is essential. It tells Tailwind where to look for class names.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0A1F44',
        'brand-indigo': '#1E2A5C',
        'rasta-yellow': '#F5D300',
        'rasta-red': '#E10600',
        'rasta-green': '#1DAC24',
        'neutral-900': '#EDEDED', // For light text
        'neutral-700': '#C1C1C1', // For secondary text
        'neutral-600': '#8E8E8E',
        'neutral-500': '#26314F', // For card backgrounds
        'neutral-400': '#2E3A5F',
      },
    },
  },
  plugins: [],
};