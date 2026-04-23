/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        c1: '#1f3a5f',
        c2: '#3d5a80',
        c3: '#98c1d9',
        c4: '#ee6c4d',
        c5: '#293241',
        c6: '#6d597a',
      },
    },
  },
  plugins: [],
}