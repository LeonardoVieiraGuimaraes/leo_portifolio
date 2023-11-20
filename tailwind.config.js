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
        projeto1:
          "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
      },
    },
  },
  plugins: [],
};
