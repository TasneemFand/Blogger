module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
      borderColors: {
        primary: "var(--color-gray-200)",
        secondary: "var(--color-gray-600)",
      },
      textColors: {
        primary: "var(--color-white)",
        secondary: "#a9adc1",
      },
      colors: {
        secondary: "#1f2028",
      },
      borderColor: (theme) => ({
        ...theme("borderColors"),
      }),
      textColor: (theme) => ({
        ...theme("textColors"),
      }),
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      ringOffsetWidth: ["hover", "active"],
      ringOffsetColor: ["hover", "active"],
      textColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
        "active",
      ],
      transform: ["responsive", "hover", "focus", "active", "group-hover"],
      scale: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [],
};
