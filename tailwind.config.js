/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {},
    extend: {
      backgroundImage: {
        'gatis': "url('./src/static/gatis.png')"
      }
    },
  },
  plugins: [],
}

