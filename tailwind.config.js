const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    colors: {
      primary: '#30587e',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue
    }
  }
}
