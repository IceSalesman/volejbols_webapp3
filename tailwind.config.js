/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {},
    extend: {
      backgroundImage: {
        'arts': "url('./src/static/arts.png')"
      }
    },
  },
  plugins: [],
}

