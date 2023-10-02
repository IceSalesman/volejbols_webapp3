/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {},
    extend: {
      backgroundImage: {
        'gatis': "url('./components/pictures/gatis.png')"
      }
    },
  },
  plugins: [],
}

