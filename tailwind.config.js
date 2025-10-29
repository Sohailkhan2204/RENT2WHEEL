/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "slate-100": "#F1F5F9",
        "gray-true-800": "#414141cc",
        "blue-600": "#2563EB",
        "gray-500-transparent": "#6B728000",
        "gray-true-800-solid": "#414141",
        "blue-primary": "#0558FE",
        "blue-light": "#A9CFFF",
        "blue-secondary": "#0257FF",
        "slate-800": "#2B3441",
        "gray-500-opaque": "#6B7280e5",
        "gray-700": "#374151",
        "gray-700-light": "#374151a1",
        "gray-text": "#929292",
        "gray-placeholder": "#9A9A9A",
        "gray-dark": "#373737",
        "slate-800-opaque": "#2B3441e5",
        "slate-800-light": "#2B344180",
        "slate-500": "#64748B",
        "slate-950": "#090A0B",
        "blue-accent": "#1562FC",
        "black": "#000000",
        "slate-600": "#4A5565",
        "green-status-bg": "rgba(187, 255, 215, 0.51)",
        "green-status-text": "#06A764",
        "blue-50": "#EEF2FF",
        "slate-200": "#E2E8F0",
        "slate-900": "#0F172A",
      },
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
      boxShadow: {
        'card': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'form': '0px 8px 20px 0px rgba(0, 0, 0, 0.1)',
        'testimonial': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
