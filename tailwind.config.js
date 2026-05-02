/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0D9488',
          dark: '#134E4A',
          deep: '#0A2E2C',
          light: '#CCFBF1',
        },
        sage: {
          DEFAULT: '#5EA092',
          light: '#D4E5DD',
        },
        amber: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        coral: {
          DEFAULT: '#E07856',
          light: '#F5C9B8',
          soft: '#FBE9D7',
        },
        cream: '#EAEFE5',
        ivory: '#FFFAF0',
        warmwhite: '#FFFCF5',
        charcoal: '#1A2624',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
