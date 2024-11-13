/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'serif'],
      mono: ['Fira Code', 'Courier New', 'monospace'],
      display: ['Poppins', 'Helvetica Neue', 'sans-serif'],
      body: ['Nunito', 'Roboto', 'Arial', 'sans-serif'],
      heading: ['Playfair Display', 'Georgia', 'serif'],
      script: [
        'Dancing Script', 
        'Pacifico', 
        'Great Vibes', 
        'Sacramento', 
        'Cookie', 
        'Satisfy', 
        'Caveat', 
        'Cursive'
      ],
    },
  },
  plugins: [],
};
