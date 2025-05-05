/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2F4858',
        primary: '#2B5329', // Forest green
        accent: '#D95D1E', // Autumn orange
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
      },
      fontFamily: {
        montserrat: ['Montserrat Variable', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display Variable', 'serif'],
      },
      keyframes: {
        'star-movement-top': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(250%)' }
        },
        'star-movement-bottom': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-250%)' }
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%'
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%'
          }
        },
        appear: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'appear-zoom': {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        'star-movement-top': 'star-movement-top var(--speed, 6s) linear infinite',
        'star-movement-bottom': 'star-movement-bottom var(--speed, 6s) linear infinite',
        'aurora': 'aurora 60s linear infinite',
        'appear': 'appear 0.8s ease-out forwards',
        'appear-zoom': 'appear-zoom 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
}