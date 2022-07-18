/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}", // See: https://github.com/nuxt-community/tailwindcss-module/issues/429
    "./app.vue",
  ],
  theme: {
      container: {
        center: true,
        padding: '2rem',
    },
    extend: {},
  },
  plugins: [],
}
