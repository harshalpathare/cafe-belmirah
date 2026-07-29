import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#FFFFFF', // Pure White
          50: '#FAFAFA',      // Off-white
          100: '#F5F5F5',     // Very light gray
          200: '#E5E5E5',     // Light gray
        },
        gold: {
          DEFAULT: '#D4AF37', // Classic Taj Gold
          light: '#F3E5AB',
          dark: '#AA8529',
          pale: '#FBF5D4',
        },
        cream: {
          DEFAULT: '#111111', // Deep Charcoal (for text)
          dark: '#222222',    // Dark gray
          muted: '#555555',   // Medium gray
        },
        forest: {
          DEFAULT: '#2D5016',
          light: '#3D6B20',
          dark: '#1E3A0E',
        },
        wood: {
          DEFAULT: '#8B5E3C',
          light: '#A67C52',
          dark: '#6B4428',
        },
        glass: 'rgba(0,0,0,0.03)', // Light mode glass effect
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        accent: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #A07830 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.95) 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(201,168,76,0.3), 0 0 60px rgba(201,168,76,0.1)',
        'gold-lg': '0 0 40px rgba(201,168,76,0.4), 0 0 100px rgba(201,168,76,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'card': '0 20px 60px rgba(0,0,0,0.5)',
        'card-hover': '0 30px 80px rgba(0,0,0,0.6), 0 0 30px rgba(201,168,76,0.2)',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '60px',
      },
      borderColor: {
        gold: 'rgba(201,168,76,0.3)',
        'gold-strong': 'rgba(201,168,76,0.6)',
        glass: 'rgba(255,255,255,0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'rise': 'rise 1s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
          '75%': { opacity: '0.95' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(201,168,76,0.3)' },
          '100%': { textShadow: '0 0 30px rgba(201,168,76,0.8), 0 0 60px rgba(201,168,76,0.4)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-in': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
};

export default config;
