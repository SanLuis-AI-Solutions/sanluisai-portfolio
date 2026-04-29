/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#0B1A33', 900: '#112447', 800: '#1A3160', 700: '#244478', 600: '#335799', 500: '#4F75B8', 400: '#7E9CCB', 300: '#B3C4DE', 200: '#D6DFEC', 100: '#ECF0F7' },
        gold: { 900: '#8A6418', 800: '#A77A1F', 700: '#C49328', 600: '#D9A434', 500: '#E5B656', 400: '#ECC679', 300: '#F2D9A1', 200: '#F8E9C7', 100: '#FBF4E2' },
        bone: { 50: '#FAF7F1', 100: '#F4EFE5', 200: '#EDE6D6', 300: '#E0D6BF' },
        ink: { 950: '#0A0E14', 900: '#14181F', 800: '#232932', 700: '#353D49', 600: '#4D5663', 500: '#6B7585', 400: '#8E97A6', 300: '#B4BBC7', 200: '#D5D9E0', 100: '#EAECF0', 50: '#F6F7F9' },
        bgCanvas: '#FAF7F1',
        bgSurface: '#FFFFFF',
        bgInverse: '#112447',
        fg1: '#112447',
        fg2: '#353D49',
        fg3: '#6B7585',
        fgAccent: '#C49328',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      borderRadius: { DEFAULT: '4px', pill: '999px' },
      boxShadow: {
        '1': '0 1px 2px rgba(11,26,51,0.06), 0 1px 1px rgba(11,26,51,0.04)',
        '2': '0 4px 8px -2px rgba(11,26,51,0.08), 0 2px 4px -2px rgba(11,26,51,0.06)',
        '3': '0 12px 24px -8px rgba(11,26,51,0.14), 0 4px 8px -4px rgba(11,26,51,0.08)',
        '4': '0 24px 48px -12px rgba(11,26,51,0.22), 0 8px 16px -8px rgba(11,26,51,0.10)',
        'goldGlow': '0 0 0 1px rgba(217,164,52,0.4), 0 6px 20px -6px rgba(217,164,52,0.45)',
      },
    },
  },
  plugins: [],
}
