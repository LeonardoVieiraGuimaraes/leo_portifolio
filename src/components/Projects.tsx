import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function Projects() {
  const projects = [
    {
      title: "Sistema SAE",
      description: "Descrição do projeto 1",
      image: "enfermagemProjeto01",
      link: "https://sae.leoproti.com.br/",
      colSpan: "col-span-1",
    },
    {
      title: "Sistema SAE",
      description: "Descrição do projeto 1",
      image: "",
      link: "https://sae.leoproti.com.br/",
      colSpan: "col-span-1",
    },
    {
      title: "Sistema SAE",
      description: "Descrição do projeto 1",
      image: "",
      link: "https://sae.leoproti.com.br/",
      colSpan: "col-span-1",
    },
    {
      title: "Sistema de Enfermagem",
      description: "Descrição do projeto 2",
      image: "",
      link: "https://enfermagem.leoproti.com.br/",
      colSpan: "col-span-1",
    },
    {
      title: "Programacao Orientado a Objeto",
      description: "Repositório Aula Uniasselvi",
      image: "",
      link: "https://github.com/LeonardoVieiraGuimaraes/Programacao-Orientado-a-Objetos.git",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 4",
      description: "Descrição do projeto 4",
      image: "projeto1",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 5",
      description: "Descrição do projeto 5",
      image: "/images/projects/enfermagemProjeto01",
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
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center bg-${project.image}`}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* <img src={`${project.image}`} alt="" /> */}

                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-70"></div>
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg text-center font-semibold ">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm">{project.description}</p>

                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 rounded shadow hover:bg-gray-200"
                  >
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                    Ver projeto
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
