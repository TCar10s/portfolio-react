const savvywombatGridAreas = require("@savvywombat/tailwindcss-grid-areas");

module.exports = {
  content: ['./src/**/*.html', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        "primary-dark": "#5EEAD4",
        "gray-1": "#333333",
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        "gray-light-1": "#C4C4C4",
        "gray-light-2": "#E0E0E0",
        "card-primary": "#1E1E1E",
        "body-dark": "#121212",
        "body-light": "#F2F2F2",
      },
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
        phone: { raw: '(max-width: 768px)' },
        desktop: { raw: '(min-width: 1024px)' },
        tablet: { raw: '(max-width: 1023px)' },
      },
      gridTemplateAreas: {
        wide: [
          "details details details",
          "sidebar main main",
          "sidebar main main",
          "sidebar certificates certificates",
          "projects projects projects",
        ],
        medium: [
          "details details details",
          "sidebar main main",
          "sidebar main main",
          "certificates certificates certificates",
          "projects projects projects",
        ],
        slim: [
          "details",
          "sidebar",
          "main",
          "certificates",
          "projects",
        ],
      },
    },
  },

  plugins: [savvywombatGridAreas],
}
