/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'abtimg': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1704494004/about-hero_bh1uyr.jpg')",
        'main-hero': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1704494393/sean-pollock-PhYq704ffdA-unsplash_euydwu.jpg')",
        'subfooter': "url('https://www.solidvestglobal.com/files/quintet_counterpoint_midyear_webinar_banner.jpg')",
        'heroimgone': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1704494393/sean-pollock-PhYq704ffdA-unsplash_euydwu.jpg')",
        'heroimgtwo': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1705992451/hhero_c1gym9.jpg')",
        'heroimgthree': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1705992451/heroo_do7twv.jpg')",
        stkhero: "url('assets/stockhero.jpg')",
        stkheros: "url('assets/serviceone.jpg')"
      },
      colors: {
        primary: "#65a147",
        footer: "#111827",
        wcebg: "hsl(0, 0%, 98%)",
        latestbg: "hsl(233, 8%, 62%)"
      },
      fontFamily: {
        'Jost': ['Jost', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: []
};
