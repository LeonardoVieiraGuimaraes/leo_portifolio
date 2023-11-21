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
        projetoEnfermagem01: "url('/images/projetoEnfermagem01.jpg')",
        projetoEnfermagem02: "url('/images/projetoEnfermagem02.jpg')",
        dissertacaoEngenhariaComputacao:
          "url('/images/dissertacaoEngenhariaComputacao.jpg')",
        dissertacaoMestrado: "url('/images/dissertacaoMestrado.jpg')",
      },
    },
  },
  plugins: [],
};
