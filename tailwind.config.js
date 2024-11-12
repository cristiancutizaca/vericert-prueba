/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'roboto': ['Roboto', 'system-ui'],
      },
      colors: {
        'primary': '#0e7ac2',
        'secondary': '#ff00d4',
        'blackblue': '#1e293b',
        'blackblue2': '#0f172a',
        'primaryblue': '#0e7ac2',
        'primaryblack': '#262626',
        'fondDark': '#140d2f'// color de fondo para el vericert`''
        
      },
      textColor: {
        'textrosa': '#ff00d4', // Cambia esto al color rosado que prefieras
        'textblue': '#0060ff',

      },
      animation: {

        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'marquee 25s linear infinite',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      
    },
  },
  darkMode: "class",

  plugins: [
    nextui({
      themes: {
        
      },
    }),
  ],
};
