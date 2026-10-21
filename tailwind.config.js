/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        surface: 'var(--surface)',
        surfaceAlt: 'var(--surface-alt)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        divider: 'var(--divider)',
        controlBorder: 'var(--control-border)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent-hover)',
        accentText: 'var(--accent-text)',
        onAccent: 'var(--on-accent)',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        display: ['Prata', 'Georgia', 'serif'],
      },
      maxWidth: {
        shell: '1360px',
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
