/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            trump: {
              background: "#f5f7fa",
              primary: "#189ab4",
              dark: "#05445e",
              alert: "#bee9e8",
              heading: "#1f2937",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
