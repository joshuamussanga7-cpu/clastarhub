/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          lighter: '#1E293B',
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
          green: '#22C55E',
        }
      },
      backgroundImage: {
        'gradient-mesh': 'radial-gradient(at 0% 0%, hsla(215, 27%, 16%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(217, 91%, 60%, 0.1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(188, 91%, 43%, 0.1) 0, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
