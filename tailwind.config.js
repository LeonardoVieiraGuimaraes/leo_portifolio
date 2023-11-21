/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans"],
      handwriting: ["Caveat"],
      headline: ["Poppins"],
    },
    extend: {
      backgroundImage: {
        profile: "url('/images/fotoPerfil.jpg')",
        enfermagemProjeto01: "url('/images/projects/enfermagemProjeto01.jpg')",
        enfermagemProjeto02: "url('/images/projects/enfermagemProjeto02.jpg')",
      },
    },
  },
  plugins: [],
};
