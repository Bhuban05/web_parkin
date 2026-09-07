/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // shadcn/ui CSS variable colors
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
        // Brand primary — bright sky blue
        brand: {
          DEFAULT: "#2BA8DE",
          hover: "#1E8FC4",
          light: "#6BC5ED",
          dark: "#1A6FA0",
        },
        // Dark sections — navy-slate
        navy: {
          DEFAULT: "#1E2A38",
          deep: "#162230",
          light: "#3A4A5E",
          darker: "#121C27",
        },
        // Light backgrounds
        cream: {
          DEFAULT: "#FAF9F6",
          warm: "#F5F4F0",
        },
        // Text colors
        heading: "#111318",
        body: "#5B6270",
        light: "#F5F7FA",
        // Accents
        amber: {
          DEFAULT: "#F5A623",
          light: "#F7BC5E",
          dark: "#D98A15",
        },
        teal: {
          DEFAULT: "#1F8A9C",
          light: "#28A8BD",
        },
        blue: {
          section: "#2B6CB0",
        },
        // Card tints
        tint: {
          blue: "#DCEEF7",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "Georgia", "serif"],
        body: ["'Public Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["2rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.5rem", { lineHeight: "3rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.5rem", { lineHeight: "4rem" }],
      },
      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },
      maxWidth: {
        content: "1200px",
        narrow: "800px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(30, 42, 56, 0.08)",
        "card-hover": "0 16px 48px rgba(30, 42, 56, 0.14)",
        "card-lg": "0 24px 64px rgba(30, 42, 56, 0.12)",
        glow: "0 0 60px rgba(43, 168, 222, 0.15)",
        "glow-amber": "0 0 40px rgba(245, 166, 35, 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "smooth-in": "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth-out": "cubic-bezier(0, 0, 0.2, 1)",
        "bounce-gentle": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(43, 168, 222, 0.1)" },
          "100%": { boxShadow: "0 0 40px rgba(43, 168, 222, 0.2)" },
        },
      },
    },
  },
  plugins: [],
};
