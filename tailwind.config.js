/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#070a13',
        light: '#f1f5f9',
        slate400: '#94a3b8',
        slate600: '#475569',
        slate800: '#1e293b',
        rose: '#e11d48',
        indigo: '#4f46e5',
      },
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.5rem',
        xs: '0.75rem',
        s: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem',
      },
      boxShadow: {
        rose: '0 10px 20px rgba(225, 29, 72, 0.5), 0 6px 6px rgba(225, 29, 72, 0.5), 0 0 100px -10px rgba(225, 29, 72, 1)',
        roseHover: '0 14px 28px rgba(225, 29, 72, 0.25), 0 10px 10px rgba(225, 29, 72, 0.22), 0 0 120px -10px rgba(225, 29, 72, 1)',
      },
    },
  },
  plugins: [],
};