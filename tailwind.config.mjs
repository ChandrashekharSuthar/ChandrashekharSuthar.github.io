/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#141218',
          low: '#1D1B20',
          card: '#211F26',
        },
        content: {
          primary: '#E6E0E9',
          secondary: '#CAC4D0',
        },
        accent: {
          DEFAULT: '#9CD67D',
          hover: '#B8F397',
          on: '#0C3900',
        },
        outline: {
          variant: '#49454F',
          subtle: 'rgba(255, 255, 255, 0.08)',
        },
      },
      borderRadius: {
        card: '18px',
        pill: '100px',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '960px',
      },
    },
  },
  plugins: [],
};
