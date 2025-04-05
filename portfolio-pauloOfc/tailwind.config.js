/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Ativa o modo escuro baseado na classe "dark"
    theme: {
      extend: {}, // Aqui você pode adicionar customizações no futuro
    },
    plugins: [],
}