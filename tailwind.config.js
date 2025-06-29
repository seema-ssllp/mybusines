/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch 2s infinite',
        'fade-in': 'fadeIn 2s ease-in-out',
        'slide-up': 'slide-up 5s ease-out',
        'scroll-horizontal': 'scroll-horizontal 20s linear infinite',
        'spin-in': 'spin-in 2s ease-out forwards',
        'fade-glow': 'fade-glow 2.5s ease forwards',
        'floating-heart': 'floating-heart 4s ease-in-out infinite',
      },
      fontFamily: {
        system: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
        festive: ['"Pacifico"', 'cursive'], // new optional fancy font
      },
      scale: {
        '-100': '-1',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'scroll-horizontal': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'spin-in': {
          '0%': { transform: 'rotate(360deg) translateX(100vw)', opacity: 0 },
          '100%': { transform: 'rotate(0) translateX(0)', opacity: 1 },
        },
        'fade-glow': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: 0,
          },
          '60%': {
            transform: 'scale(1.05)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'floating-heart': {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: 0.6,
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.2)',
            opacity: 1,
          },
          '100%': {
            transform: 'translateY(-60px) scale(1)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [
    // Optional: Add plugins like @tailwindcss/typography or forms if needed
  ],
}
