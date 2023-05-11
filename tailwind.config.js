/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/@abifa-ui/components/**/*.{js,vue,ts}",
    "./@abifa-ui/components/**/*.{js,vue,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        "primary-200": "#a5f3fc",
        "primary-400": "#22d3ee",
        "primary-500": "#06b6d4",
        "primary-600": "#0891b2",
        "primary-700": "#0e7490",

        "secondary-500": "#1f2937"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
