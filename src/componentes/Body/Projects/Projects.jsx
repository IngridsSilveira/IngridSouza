import { useLanguage } from "../../index";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { language, texts } = useLanguage();

  const items = [
    {
      name: "Lions Seminovos",
      src: "https://imgur.com/rt7d0vc.jpg",
      hrefGithub: "https://github.com/IngridsSilveira/lions-seminovos",
      hrefDemo: "https://ingridssilveira.github.io/lions-seminovos/",
      description:
        texts[language]?.projects?.lions || "Descrição não disponível", // Use o texto baseado na linguagem
      key: 4,
    },
    {
      name: "Doces Artesanais",
      src: "https://i.imgur.com/epCVoGL.jpeg",
      hrefGithub: "https://www.instagram.com/tsuki_edita/",
      hrefDemo:
        "https://drive.google.com/file/d/1wFYcdlgP_koateqEGLVo_CIsgMk9Uu67/view?usp=drive_link",
      description:
        texts[language]?.projects?.confeitaria || "Descrição não disponível",
      key: 3,
    },

    {
      name: "Landing Page Clínica Estética",
      src: "https://i.imgur.com/fNgWy5s.png",
      hrefGithub: "https://github.com/IngridsSilveira/clinica-estetica",
      hrefDemo: "https://ingridssilveira.github.io/clinica-estetica/",
      description:
        texts[language]?.projects?.lpEstetica || "Descrição não disponível",
      key: 6,
    },
    {
      name: "Barbearia Moderna",
      src: "https://i.imgur.com/5c4mavv.jpeg",
      hrefGithub: "https://www.instagram.com/tsuki_edita/",
      hrefDemo:
        "https://drive.google.com/file/d/1qr5aNi0-isJDnDKQj5KKGLm6l60D9mE3/view?usp=drive_link",
      description:
        texts[language]?.projects?.barbearia || "Descrição não disponível",
      key: 1,
    },
    {
      name: "Landing Page Pet Shop",
      src: "/images/projetos/star.webp",
      hrefGithub: "https://github.com/IngridsSilveira/starWars-Planets",
      hrefDemo: "https://ingridssilveira.github.io/starWars-Planets/",
      description:
        texts[language]?.projects?.lpPet || "Descrição não disponível",
      key: 2,
    },
    {
      name: "Clínica de Estética",
      src: "https://i.imgur.com/C53emWg.jpeg",
      hrefGithub: "https://www.instagram.com/tsuki_edita/",
      hrefDemo:
        "https://drive.google.com/file/d/1uAoH1ArXsDs-HxdILraa3nH1VwL9T2EL/view?usp=drive_link",
      description:
        texts[language]?.projects?.estetica || "Descrição não disponível",
      key: 5,
    },
  ];

  const itemsPorPaginas = 2;
  const totalPaginas = Math.ceil(items.length / itemsPorPaginas);

  //itens da página atual
  const currentItems = items.slice(
    currentPage * itemsPorPaginas,
    currentPage * itemsPorPaginas + itemsPorPaginas
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 < totalPaginas ? prevPage + 1 : 0
    ); //volta ao chegar no final
  };

  return (
    <section
      id="Projects"
      data-aos="fade-right"
      className="container-fluid mx-auto py-12 px-4 dark:bg-slate-100 text-white"
    >
      <h2 className="text-center text-3xl font-protest tracking-wider mb-8 dark:text-black">
        {texts[language].myProjects}
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentItems.map((item) => (
          <div
            key={item.key}
            className="rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 bg-white shadow-md shadow-slate-700"
          >
            <img
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
              src={item.src}
              alt={`Imagem do projeto ${item.name}`}
              onError={(e) => {
                e.target.onerror = null; // impede loops
                e.target.src = "/path/to/default/image.jpg"; // imagem padrão
              }}
            />
            <div className="p-4">
              <h1 className="font-bold text-lg mb-2 text-black">{item.name}</h1>
              <p className="text-sm text-gray-700 mb-4">{item.description}</p>
              <div className="flex justify-between">
                {item.hrefDemo ? (
                  <a
                    href={item.hrefDemo}
                    className="bg-green-600 text-white px-4 py-2 rounded-md transition-all hover:bg-green-700"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver demo do projeto ${item.name}`}
                  >
                    Dar uma olhada
                  </a>
                ) : (
                  <button
                    className="bg-gray-400 text-white px-4 py-2 rounded-md"
                    disabled
                  >
                    Indisponível
                  </button>
                )}
                <a
                  href={item.hrefGithub}
                  className="bg-gray-900 text-white px-4 py-2 rounded-md transition-all hover:bg-gray-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  Minha rede
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>

      <div className="flex justify-between items-center mt-8">
        <span className="text-sm text-gray-300 dark:text-gray-950">
          Página {currentPage + 1} de {totalPaginas}
        </span>
        <button
          onClick={handleNextPage}
          className="bg-green-600 rounded-md px-3 text-3xl transition-all hover:bg-green-700"
        >
          <GrFormNextLink className="text-white" />
        </button>
      </div>
    </section>
  );
};
