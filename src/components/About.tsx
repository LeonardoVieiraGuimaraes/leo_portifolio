import { differenceInYears } from "date-fns";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const birthDate = new Date(1984, 10 - 1, 2); // Substitua pela sua data de nascimento (ano, mês - 1, dia)
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <section className="container mx-auto my-4 max-w-5xl p-4" id="about">
      <div className=" p-4 text-center">
        <h2 className=" z-50 mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>

        <p className=" text-justify">
          Tenho varios projetos no meu repositório no{" "}
          <a
            href="https://github.com/LeonardoVieiraGuimaraes?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-800 hover:underline"
          >
            GitHub
          </a>
          {/* <span>
              <FaGithub size={15} />
            </span> */}
          , profissional dedicado, conto com uma sólida formação acadêmica e
          ampla experiência. Mestre em Modelagem Computacional e Sistemas pela
          UNIMONTES, minha expertise também abrange especialização em Matemática
          e Estatística. Graduei-me em Engenharia de Computação e Matemática,
          desempenhando o papel de Professor de Ensino Superior, lecionando
          disciplinas como Matemática Financeira, Probabilidade, Tecnologia da
          Informação e Gestão de Finanças. Além disso, contribuo na área
          administrativa como Assistente em Gestão de Defesa Agropecuária no
          IMA, demonstrando minha versatilidade profissional. Ao longo da minha
          carreira, participei ativamente e continuo colaborando com
          instituições de renome como IFNMG, UNIASSELVI e FADENORTE, agregando
          experiência e conhecimento diversificado. Destaco meu compromisso com
          o aprendizado contínuo, evidenciado pela participação em cursos
          complementares e eventos acadêmicos. Sou um profissional maduro,
          dedicado à aplicação prática do conhecimento adquirido, e permaneço
          aberto a novos desafios e aprendizados que contribuam para o meu
          constante desenvolvimento profissional.
        </p>
      </div>
      <div className="flex justify-center">
        <a
          href="https://github.com/LeonardoVieiraGuimaraes?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:underline ml-4"
          title="Meu Repositório GitHub"
        >
          <FaGithub size={24} />
        </a>
        {/* <a
          href="https://www.instagram.com/seu_usuario_do_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:underline ml-4"
          title="Meu Instagram"
        >
          <FaInstagram size={24} />
        </a> */}
        <a
          href="https://www.linkedin.com/in/leonardo-vieira-guimaraes-270b8451/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:underline ml-4"
          title="Meu LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className=" relative mx-auto mt-20 max-w-lg">
        <div className=" w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
          <div className=" w-full h-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Mue nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Leonardo Vieira Guimarães
              </span>
            </p>
            <table className="mt-4 w-full text-sm table-auto">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>{age}</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="tel:+5538999352408"
                      className="underline hover:text-blue-800"
                    >
                      +55 (38)99935-2408
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    {" "}
                    <a
                      href="mailto:leonardovieiraxy@hotmail.com"
                      className="underline hover:text-blue-800"
                    >
                      leonadovieiraxy@hotmail.com
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    {" "}
                    <a
                      href="https://maps.app.goo.gl/J8GYMwibv7pjR8HE7"
                      className="underline hover:text-blue-800"
                    >
                      Sao Francisco - MG
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
                {/* <tr>
                <td>Localização</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30688.84778320753!2d-44.876730045314794!3d-15.955841358702505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7557a052c46ddc5%3A0x70a2134b1ce81ba3!2sS%C3%A3o%20Francisco%2C%20MG%2C%2039300-000!5e0!3m2!1spt-BR!2sbr!4v1697823253673!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-profile bg-cover bg-center md:-left-1 md:-top-1 md:h-64 md:w-40"></div>
        </div>
      </div>
    </section>
  );
}
