import { useLanguage } from "../../index";
import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { getProjectsData } from "./projectsData";

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { language, texts } = useLanguage();

  const items = getProjectsData(texts, language);

  const itemsPorPagina = 2;
  const totalPaginas = Math.ceil(items.length / itemsPorPagina);

  const currentItems = items.slice(
    currentPage * itemsPorPagina,
    currentPage * itemsPorPagina + itemsPorPagina
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1 < totalPaginas ? prev + 1 : 0));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : totalPaginas - 1));
  };

  const currentTexts = texts[language] || {};

  return (
    <section
      id="Projects"
      data-aos="fade-right"
      className="w-full py-16 px-4 md:px-8 bg-zinc-950 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight mb-12 text-zinc-100 dark:text-zinc-900 transition-colors">
          {currentTexts.myProjects || "Meus Projetos"}
        </h2>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentItems.map((item) => {
            const targetDemo = item.hrefDemo || item.src;

            return (
              <div
                key={item.key}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900/90 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Moldura da Imagem */}
                <div className="w-full h-72 bg-zinc-950/60 dark:bg-zinc-200/60 flex items-center justify-center p-4 relative overflow-hidden border-b border-zinc-800/80 dark:border-zinc-300">
                  <img
                    className="max-h-full max-w-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                    src={item.src}
                    alt={`Imagem do projeto ${item.name}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400x200?text=Projeto";
                    }}
                  />
                </div>

                {/* Informações e Ações */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-xl text-zinc-100 dark:text-zinc-900 group-hover:text-emerald-400 dark:group-hover:text-emerald-600 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-400 dark:text-zinc-600 mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center justify-between pt-4 border-t border-zinc-800 dark:border-zinc-300/80">
                    <a
                      href={targetDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-emerald-950/20"
                      aria-label={`Visualizar projeto ${item.name}`}
                    >
                      <span>
                        {item.hrefDemo
                          ? currentTexts.btnSeeProject || "Ver Projeto"
                          : currentTexts.btnSeePrototype || "Ver Protótipo"}
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
                        <span>{currentTexts.btnRepository || "Repositório"}</span>
                      </a>
                    ) : (
                      <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-800/60 dark:bg-zinc-200/80 text-zinc-400 dark:text-zinc-700 border border-zinc-700/50 dark:border-zinc-300">
                        {currentTexts.tagDesign || "UI / UX Design"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </article>

        {/* Navegação Moderna */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={handlePrevPage}
            className="bg-zinc-800 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-zinc-200 dark:text-zinc-800 hover:text-white dark:hover:text-white p-3 rounded-xl transition-all border border-zinc-700 dark:border-zinc-300 shadow-md active:scale-95"
            aria-label="Página anterior"
          >
            <GrFormPreviousLink className="text-2xl" />
          </button>

          <span className="text-sm font-mono text-zinc-400 dark:text-zinc-700 bg-zinc-900 dark:bg-zinc-100 px-4 py-2 rounded-xl border border-zinc-800 dark:border-zinc-300">
            {language === "pt" ? "Página" : "Page"}{" "}
            <strong className="text-emerald-400 dark:text-emerald-600">{currentPage + 1}</strong>{" "}
            {language === "pt" ? "de" : "of"} {totalPaginas}
          </span>

          <button
            onClick={handleNextPage}
            className="bg-zinc-800 dark:bg-zinc-100 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-zinc-200 dark:text-zinc-800 hover:text-white dark:hover:text-white p-3 rounded-xl transition-all border border-zinc-700 dark:border-zinc-300 shadow-md active:scale-95"
            aria-label="Próxima página"
          >
            <GrFormNextLink className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};