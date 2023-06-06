/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        open: {
          '0%': {marginLeft: '0px'},
          '100%': {marginLeft: '-144px'}
        },
        close: {
          '0%': {marginLeft: '-144px'},
          '100%': {marginLeft: '0px'}
        }
      },
      animation: {
        'open': 'open 300ms ease-in',
        'close': 'close 300ms ease-in'
      }
    },
  },
  plugins: [],
}
