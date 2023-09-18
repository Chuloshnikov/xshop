/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
],
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        smlg: "425px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2x1": "1400px",
      },
      colors: {
        mainBg: "#FDF8F6",
        accentBg: "#582467",
        accentBg2: "#B686C3",
        ahornBg: "#EEE7F0",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
