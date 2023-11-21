import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function Projects() {
  const projects = [
    {
      title: "Sistema SAE",
      description: "Descrição do projeto 1",
      image: "/images/projects/enfermagemProjeto01.jpg",
      link: "https://sae.leoproti.com.br/",
      colSpan: "col-span-1",
    },
    {
      title: "Sistema SAE",
      description: "Descrição do projeto 1",
      image: "/images/projects/enfermagemProjeto02.jpg",
      link: "https://sae.leoproti.com.br/",
      colSpan: "col-span-1",
    },
    {
      title: "Sistema SAE",
      description: "Descrição do projeto 1",
      image: "/images/projects/artigoBovinosRFID.jpg",
      // image:
      //   "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80",
      link: "https://sae.leoproti.com.br/",
      colSpan: "col-span-1",
    },
    {
      title: "Sistema de Enfermagem",
      description: "Descrição do projeto 2",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "https://enfermagem.leoproti.com.br/",
      colSpan: "col-span-1",
    },
    {
      title: "Programacao Orientado a Objeto",
      description: "Repositório Aula Uniasselvi",
      image:
        "https://media.istockphoto.com/id/1305995602/photo/responsive-floating-responsive-design.jpg?b=1&s=170667a&w=0&k=20&c=uFqBz27v_B0UxcslnvZxd9c0D9eJAef7veRZf6b-v-A=",
      link: "https://github.com/LeonardoVieiraGuimaraes/Programacao-Orientado-a-Objetos.git",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 4",
      description: "Descrição do projeto 4",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 5",
      description: "Descrição do projeto 5",
      image: "enfermagemProjeto01",
      // image:
      //   "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1",
    },
  ];

  return (
    <>
      <section
        className="bg-gradient-to-tr to-blue-600 from-gray-900 text-white"
        id="projects"
      >
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-40 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold z-40">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-lg text-white">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador front-end.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                className={`group relative cursor-default rounded-lg ${project.colSpan}`}
                key={index}
              >
                <img
                  className={`h-52 cursor-default rounded-lg bg-cover bg-center`}
                  src={`${project.image}`}
                  alt=""
                />

                <span className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-70"></span>
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg text-center font-semibold ">
                    {project.title}
                  </h4>
                  <p className="p-4">{project.description}</p>

                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 rounded shadow hover:bg-gray-200"
                  >
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                    {} Ver projeto
                  </button>
                </div>
                {/* <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                    Ver projeto
                  </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  );
}
