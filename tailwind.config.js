/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgSpace: '#030305',      // True deep dark background
        surface: '#0d0d12',      // Slightly lighter for cards
        surfaceGlow: '#1a1a24',  // Hover states
        violet: '#8b5cf6',       // Primary accent
        blueAccent: '#3b82f6',   // Secondary accent
        textMain: '#f8fafc',     // Crisp white text
        textMuted: '#94a3b8',    // Sleek gray for descriptions
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'], // Great for bold headers
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}