/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
    "./src/pages/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      slate: colors.slate,
      gray: colors.gray,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      bgl : "#e8e8e8"
    },
    fontFamily: {
      sans: ['Graphic', 'sans-serif'],
      serif: ['Merryweather', 'serif'],
      fair : ['Playfair Display', 'serif'],
      work: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
