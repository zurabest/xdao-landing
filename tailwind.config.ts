import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        // Precise Braintrust colors
        'bt-pink': '#FFC6C6',
        'bt-blue': '#2C1FEA',
        'bt-lime': '#CCFF00',
        'xdao-yellow': '#FFD700',
        'bt-orange': '#FF8000',
        'bt-dark-green': '#094135',
        'bt-dark-maroon': '#2D1A1A',
        'bt-light-blue': '#C5CFE8',
        'bt-gray-border': '#E4E4E7',
        'bt-gray-text': '#3F3F46',

        // Shadcn colors
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
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'display': ['60px', { lineHeight: '60px', letterSpacing: '-1.5px' }],
        'heading': ['36px', { lineHeight: '40px', letterSpacing: '-0.5px' }],
        'subhead': ['24px', { lineHeight: '32px' }],
        'body': ['16px', { lineHeight: '24px' }],
        'small': ['14px', { lineHeight: '20px' }],
        'label': ['12px', { lineHeight: '16px', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        'bt-sm': '2px',
        'bt-md': '4px',
        'bt-lg': '6px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        'bt': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bt-spring': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee var(--animation-duration, 60s) linear infinite",
      },
    },
  },
  plugins: [],
}

export default config
