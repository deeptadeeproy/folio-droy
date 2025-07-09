/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark_moss_green: {
          DEFAULT: '#1C5802',
          100: '#061200',
          200: '#0b2401',
          300: '#113601',
          400: '#174801',
          500: '#1c5802',
          600: '#36ac04',
          700: '#51fa09',
          800: '#8bfc5b',
          900: '#c5fdad',
        },
        black: {
          DEFAULT: '#07010A',
          100: '#010002',
          200: '#030004',
          300: '#040106',
          400: '#050107',
          500: '#07010a',
          600: '#460a64',
          700: '#8613bf',
          800: '#b649ed',
          900: '#dba4f6',
        },
        african_violet: {
          DEFAULT: '#B882B2',
          100: '#281726',
          200: '#512e4d',
          300: '#794473',
          400: '#a25b9a',
          500: '#b882b2',
          600: '#c79cc2',
          700: '#d5b5d1',
          800: '#e3cde1',
          900: '#f1e6f0',
        },
        harvest_gold: {
          DEFAULT: '#D28C2A',
          100: '#2a1c08',
          200: '#533810',
          300: '#7d5319',
          400: '#a76f21',
          500: '#d28c2a',
          600: '#dda351',
          700: '#e5ba7d',
          800: '#eed1a8',
          900: '#f6e8d4',
        },
        indigo: {
          DEFAULT: '#430B6F',
          100: '#0e0216',
          200: '#1b042d',
          300: '#290743',
          400: '#360959',
          500: '#430b6f',
          600: '#6f12b6',
          700: '#972bea',
          800: '#ba72f1',
          900: '#dcb8f8',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "gradient": "gradient 15s ease infinite",
        "slide-in": "slide-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 