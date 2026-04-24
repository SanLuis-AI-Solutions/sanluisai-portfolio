/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#0A0A0A',
      gold: {
        DEFAULT: '#D49E2C',
        dim: 'rgba(212,158,44,0.15)',
        glow: 'rgba(212,158,44,0.08)',
      },
      'navy-brand': '#1B3C72',
      navy: '#2D527E',
      bg: '#0A0A0A',
      surface: '#141414',
      muted: '#888888',
      white: '#FFFFFF',
      red: { 400: '#f87171' },
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.12em',
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(ellipse at center, rgba(212,158,44,0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
