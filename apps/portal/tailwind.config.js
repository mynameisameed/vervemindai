/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vm-primary': 'var(--vm-primary)',
        'vm-primary-light': 'var(--vm-primary-light)',
        'vm-primary-dim': 'var(--vm-primary-dim)',
        'vm-primary-glow': 'var(--vm-primary-glow)',
        'vm-primary-surface': 'var(--vm-primary-surface)',
        'vm-accent': 'var(--vm-accent)',
        'vm-accent-surface': 'var(--vm-accent-surface)',
        'vm-positive': 'var(--vm-positive)',
        'vm-positive-surface': 'var(--vm-positive-surface)',
        'vm-base': 'var(--vm-base)',
        'vm-surface-low': 'var(--vm-surface-low)',
        'vm-surface': 'var(--vm-surface)',
        'vm-surface-high': 'var(--vm-surface-high)',
        'vm-surface-highest': 'var(--vm-surface-highest)',
        'vm-text': 'var(--vm-text)',
        'vm-text-secondary': 'var(--vm-text-secondary)',
        'vm-text-muted': 'var(--vm-text-muted)',
        'vm-border': 'var(--vm-border)',
        'vm-border-active': 'var(--vm-border-active)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
