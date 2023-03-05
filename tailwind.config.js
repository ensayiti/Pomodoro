/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2c54ba",
          "secondary": "#f2a9aa",
          "accent": "#13076b",
          "neutral": "#2D2933",
          "base-100": "#5B375D",
          "info": "#49A6D4",
          "success": "#3AD9B4",
          "warning": "#9D5B0B",
          "error": "#F74B5F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
