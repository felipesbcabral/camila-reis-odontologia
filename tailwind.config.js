/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Paleta Rosa Suave (Dra. Sofia style)
        rose: {
          50: '#fdf8f9',
          100: '#fceef0',
          200: '#f5e0e3',
          300: '#edd5d9',
          400: '#d896a1',
          500: '#c97d8a',
          600: '#b86a77',
          700: '#a05562',
        },
        // Cores de texto
        dark: {
          DEFAULT: '#2d2d2d',
          50: '#ffffff',
          100: '#f8f8f8',
          200: '#e8e8e8',
          300: '#d0d0d0',
          400: '#8a8a8a',
          500: '#5a5a5a',
          600: '#4a4a4a',
          700: '#3d3d3d',
          800: '#2d2d2d',
          900: '#1a1a1a',
        },
        // Backgrounds
        cream: {
          DEFAULT: '#fdf8f9',
          50: '#ffffff',
          100: '#fdf8f9',
          200: '#f8f0f2',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        'card-hover': "0 8px 30px rgba(0, 0, 0, 0.12)",
        button: "0 2px 10px rgba(216, 150, 161, 0.3)",
        'rose-glow': "0 0 40px rgba(216, 150, 161, 0.2)",
        'rose-glow-strong': "0 0 60px rgba(216, 150, 161, 0.4)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-rose": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(216, 150, 161, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(216, 150, 161, 0.6)" },
        },
        "scroll-logos": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-rose": "pulse-rose 2s ease-in-out infinite",
        "scroll-logos": "scroll-logos 30s linear infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-rose': 'linear-gradient(135deg, #d896a1 0%, #c97d8a 50%, #d896a1 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
