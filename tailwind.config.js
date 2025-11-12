/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  darkMode: 'class', // isterse kaldırılabilir
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: { extend: {} },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* === Normal border === */
        ".border-panel": {
          border: "1.5px solid var(--border)",
          borderRadius: "0.75rem", // rounded-xl
          background: "var(--panel)",
          boxShadow: "var(--shadow)",
          transition: "all 0.25s ease",
        },

        /* === Dashed terminal box === */
        ".border-dashed-panel": {
          border: "1px dashed var(--border)",
          borderRadius: "0.5rem", // rounded-lg
          backgroundColor: "var(--panel-2)",
          padding: "1rem",
          transition: "all 0.25s ease",
        },
      });
    }),
  ],
};
