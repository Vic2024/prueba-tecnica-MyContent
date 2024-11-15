/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#5a49f8",
        "text-color": "#222222",
        "gray-color": "#cccccc",
        "gray-light-color": "#f3f3f3",
        "gray-dark-color": "#666",
        "first-alpha-color": "rgba(217, 0, 98, 0.75)",
        "black-alpha-color": "rgba(0, 0, 0, 0.5)",
        "title-color": "#333",
      },
      boxShadow: {
        1: "0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        h1: "2rem",
        h2: "1.5rem",
        h3: "1.25rem",
        h4: "1rem",
        h5: "0.85rem",
        h6: "0.7rem",
        "small-text": "0.688rem",
      },
    },
  },
  plugins: [],
};
