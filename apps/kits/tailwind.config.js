/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "var(--vm-base)",
          teal: "var(--vm-primary)",
          accent: "var(--vm-accent)",
          muted: "var(--vm-text-secondary)",
          border: "var(--vm-border)",
        },
        surface: {
          base: "var(--vm-base)",
          low: "rgba(24, 24, 27, 0.4)",
          high: "rgba(255, 255, 255, 0.05)",
          highest: "rgba(255, 255, 255, 0.1)",
        },
        primary: "var(--vm-primary)",
        secondary: "var(--vm-secondary)",
        accent: "var(--vm-accent)",
        base: "var(--vm-base)",
        "text-secondary": "var(--vm-text-secondary)",
        "text-muted": "var(--vm-text-muted)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(circle at 50% 0%, var(--vm-primary-glow) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
