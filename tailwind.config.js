/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        space: '#05070d',
        surface: '#0d1220',
        accent: '#4fc3f7',
        accent2: '#a78bfa',
        muted: '#8b96ab',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79,195,247,0.15), 0 20px 40px -20px rgba(79,195,247,0.35)',
        'glow-lg': '0 0 0 1px rgba(79,195,247,0.15), 0 30px 60px -25px rgba(79,195,247,0.45)',
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
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        stars: 'stars 500s linear infinite',
        shine: 'shine 1.5s ease-out infinite',
        'fade-in': 'fadeIn 0.3s ease',
      },
    },
  },
  plugins: [],
}
