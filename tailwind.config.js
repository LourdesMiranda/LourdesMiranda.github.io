/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        space: '#0a0a0a',
        accent: '#4fc3f7',
        'accent-dark': '#26c6da',
      },
      keyframes: {
        stars: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '10000px 5000px' },
        },
        shine: {
          '0%': { transform: 'rotate(30deg) translate(-30%, -30%)' },
          '100%': { transform: 'rotate(30deg) translate(30%, 30%)' },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        stars: 'stars 500s linear infinite',
        shine: 'shine 1.5s ease-out infinite',
        'pulse-scale': 'pulseScale 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease',
      },
    },
  },
  plugins: [],
}
