/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ajce-blue': '#002147', // Oxford Blue - Classic Elite
        'ajce-navy': '#002147', // Alias for clarity
        'ajce-gold': '#cfb53b', // Vegas Gold - Premium
        'ajce-dark': '#001229', // Deep Navy (replacing black)
        'ajce-gray': '#e5e5e5', // Light Gray
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'], // Ivy League Vibe
        'sans': ['"Inter"', 'sans-serif'], // Modern Vibe
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
