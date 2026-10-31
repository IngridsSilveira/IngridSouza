import { useLanguage } from "../../index";
import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { getProjectsData } from "./projectsData";

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

  const { language, texts } = useLanguage();

  const items = getProjectsData(texts, language);
  const currentTexts = texts[language] || {};

  const isEnglish = language === "en";

  const categories = [
    {
      id: "all",
      label: isEnglish ? "All" : "Todos",
    },
    {
      id: "video",
      label: isEnglish ? "Video Editing" : "Edição de Vídeo",
    },
    {
      id: "design",
      label: isEnglish ? "UI/UX Design" : "UI/UX Design",
    },
    {
      id: "web",
      label: isEnglish ? "Web Development" : "Desenvolvimento Web",
    },
  ];

  const categoryLabels = {
    video: isEnglish ? "Video Editing" : "Edição de Vídeo",
    design: "UI/UX Design",
    web: isEnglish ? "Web Development" : "Desenvolvimento Web",
  };

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const itemsPorPagina = 2;
  const totalPaginas = Math.ceil(filteredItems.length / itemsPorPagina);

  const currentItems = filteredItems.slice(
    currentPage * itemsPorPagina,
    currentPage * itemsPorPagina + itemsPorPagina
  );

  const handleCategoryChange = (category) => {
  setSelectedCategory(category);
  setCurrentPage(0);
  setActiveVideo(null);
};

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1 < totalPaginas ? prev + 1 : 0));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : totalPaginas - 1));
  };

  return (
    <section
      id="Projects"
      data-aos="fade-right"
      className="w-full py-16 px-4 md:px-8 bg-zinc-950 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-900 transition-colors">
            {currentTexts.myProjects || (isEnglish ? "My Projects" : "Meus Projetos")}
          </h2>

          <p className="text-zinc-400 dark:text-zinc-600 mt-3 text-sm md:text-base">
            {isEnglish
              ? "A selection of my work in video, design and web development."
              : "Uma seleção dos meus trabalhos em vídeo, design e desenvolvimento web."}
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                selectedCategory === category.id
                  ? "bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950/20"
                  : "bg-zinc-900 dark:bg-zinc-100 border-zinc-800 dark:border-zinc-300 text-zinc-300 dark:text-zinc-700 hover:border-emerald-500 hover:text-emerald-400 dark:hover:text-emerald-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projetos */}
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentItems.map((item) => {
            const targetDemo = item.hrefDemo || item.src;

            return (
              <div
                key={item.key}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900/90 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500 transition-all duration-300 flex flex-col"
              >
                {/* Vídeo incorporado */}
                {/* Capa e reprodução dos vídeos */}
{item.videoId ? (
  <div className="w-full bg-black flex items-center justify-center p-4 border-b border-zinc-800 dark:border-zinc-300">
    <div className="relative w-full max-w-[292px] aspect-[9/16] overflow-hidden rounded-xl bg-black">

      {activeVideo === item.videoId ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
          title={item.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={item.src}
            alt={`Capa do projeto ${item.name}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          <button
            onClick={() => setActiveVideo(item.videoId)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300"
            aria-label={`Reproduzir ${item.name}`}
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white shadow-xl hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5.14v13.72c0 .78.85 1.26 1.52.86l11.1-6.86a1 1 0 0 0 0-1.72L9.52 4.28A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>
          </button>
        </>
      )}

    </div>
  </div>
) : (
  /* Imagem dos outros projetos */
  <div className="w-full h-72 bg-zinc-950/60 dark:bg-zinc-200/60 flex items-center justify-center p-4 relative overflow-hidden border-b border-zinc-800/80 dark:border-zinc-300">
    <img
      className="max-h-full max-w-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-500"
      src={item.src}
      alt={`Imagem do projeto ${item.name}`}
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://via.placeholder.com/400x200?text=Projeto";
      }}
    />
  </div>
)}

                {/* Informações */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h3 className="font-bold text-xl text-zinc-100 dark:text-zinc-900 group-hover:text-emerald-400 dark:group-hover:text-emerald-600 transition-colors">
                        {item.name}
                      </h3>

                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 dark:text-emerald-700 border border-emerald-500/20">
                        {categoryLabels[item.category]}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-400 dark:text-zinc-600 mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 items-center justify-between pt-4 border-t border-zinc-800 dark:border-zinc-300/80">
                    <a
                      href={targetDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-emerald-950/20"
                      aria-label={`Visualizar projeto ${item.name}`}
                    >
                      <span>
                        {item.videoId
                          ? isEnglish
                            ? "Watch on YouTube"
                            : "Assistir no YouTube"
                          : item.hrefDemo
                            ? currentTexts.btnSeeProject || (isEnglish ? "View Project" : "Ver Projeto")
                            : currentTexts.btnSeePrototype || (isEnglish ? "View Prototype" : "Ver Protótipo")}
                      </span>

                      <FaExternalLinkAlt className="text-xs" />
                    </a>

                    {item.hrefGithub ? (
                      <a
                        href={item.hrefGithub}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-zinc-800 dark:bg-zinc-200 hover:bg-zinc-700 dark:hover:bg-zinc-300 text-zinc-200 dark:text-zinc-800 px-4 py-2 rounded-xl text-sm font-medium transition-all border border-zinc-700 dark:border-zinc-300"
                      >
                        <FaGithub className="text-base" />
                        <span>
                          {currentTexts.btnRepository || (isEnglish ? "Repository" : "Repositório")}
                        </span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </article>

        {/* Paginação */}
        {totalPaginas > 1 && (
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={handlePrevPage}
              className="bg-zinc-800 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-zinc-200 dark:text-zinc-800 hover:text-white dark:hover:text-white p-3 rounded-xl transition-all border border-zinc-700 dark:border-zinc-300 shadow-md active:scale-95"
              aria-label={isEnglish ? "Previous page" : "Página anterior"}
            >
              <GrFormPreviousLink className="text-2xl" />
            </button>

            <span className="text-sm font-mono text-zinc-400 dark:text-zinc-700 bg-zinc-900 dark:bg-zinc-100 px-4 py-2 rounded-xl border border-zinc-800 dark:border-zinc-300">
              {isEnglish ? "Page" : "Página"}{" "}
              <strong className="text-emerald-400 dark:text-emerald-600">
                {currentPage + 1}
              </strong>{" "}
              {isEnglish ? "of" : "de"} {totalPaginas}
            </span>

            <button
              onClick={handleNextPage}
              className="bg-zinc-800 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-zinc-200 dark:text-zinc-800 hover:text-white dark:hover:text-white p-3 rounded-xl transition-all border border-zinc-700 dark:border-zinc-300 shadow-md active:scale-95"
              aria-label={isEnglish ? "Next page" : "Próxima página"}
            >
              <GrFormNextLink className="text-2xl" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};