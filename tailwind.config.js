/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: "#9747ff",
        black: "#000",
        gray: {
          "100": "#888b92",
          "200": "#82848a",
          "300": "#262626",
          "400": "#191d2a",
          "500": "rgba(22, 22, 22, 0)",
        },
        tomato: "#ff5555",
        red: "#ff0000",
      },
      spacing: {},
      fontFamily: {
        "clash-display": "'Clash Display'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "dm-sans": "'DM Sans'",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "4xs-6": "8.6px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "8xs-2": "4.2px",
      "9xl": "28px",
      lg: "18px",
      "29xl": "48px",
      "11xs": "2px",
      "8xs-8": "4.8px",
      "2xs-4": "10.4px",
      "smi-7": "12.7px",
      xl: "20px",
      "2xs-5": "10.5px",
      "xs-8": "11.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
