/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        heading: '#B30027',
        body: '#0a1a67',
        'page-bg': '#f5f5f5',
        'box-bg': '#f0f0f0',
        brand: {
          DEFAULT: '#b2dfee',
          dark: '#0a1a67',
          50: '#f2faff',
          100: '#e4f4fb',
          200: '#cdeafa',
          300: '#b2dfee',
          400: '#8fd0e5',
          500: '#6fbfe0',
          600: '#5aa6c4',
          700: '#3e89a9',
          800: '#2c6e89',
          900: '#1f4f62',
        },
        slate: {
          50: '#e6f0f7',
          100: '#cce1ef',
          200: '#99c3df',
          300: '#66a5cf',
          400: '#3387bf',
          500: '#0a1a67',
          600: '#003d72',
          700: '#002e56',
          800: '#001f3a',
          900: '#00101d',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-roboto)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-roboto)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(2.25rem, 2.5vw + 1rem, 2.625rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.75rem, 1.5vw + 1rem, 2rem)', { lineHeight: '1.3' }],
        'h3': ['clamp(1.375rem, 0.5vw + 1.1rem, 1.5rem)', { lineHeight: '1.4' }],
        'body': ['clamp(1rem, 0.25vw + 0.9rem, 1.125rem)', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
