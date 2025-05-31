/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default  = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta según tu estructura
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar
],
};
