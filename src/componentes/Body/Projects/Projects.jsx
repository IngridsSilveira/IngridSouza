import { useLanguage } from "../../index";

export const Projects = () => {
  const { language, texts } = useLanguage();

  const items = [
    {
      name: "Lions Seminovos",
      src: "/images/projetos/lions.png",
      hrefGithub: "https://github.com/IngridsSilveira/lions-seminovos",
      hrefDemo: "#",
      description:
        texts[language]?.projects?.lions || "Descrição não disponível", // Use o texto baseado na linguagem
      key: 4,
    },
    {
      name: "Formulário com API",
      src: "/images/projetos/formPrint.png",
      hrefGithub: "https://github.com/IngridsSilveira/form-validation",
      hrefDemo: "https://ingridssilveira.github.io/Lista_Animes/",
      description:
        texts[language]?.projects?.form || "Descrição não disponível",
      key: 5,
    },
    {
      name: "Países API",
      src: "/images/projetos/CountriesApp.png",
      hrefGithub: "https://github.com/IngridsSilveira/countries-page",
      hrefDemo: "https://ingridssilveira.github.io/loginSite/",
      description:
        texts[language]?.projects?.countries || "Descrição não disponível",
      key: 6,
    },
    {
      name: "Calculadora de Rescisão",
      src: "/images/projetos/calculoRescisao.png",
      hrefGithub: "https://github.com/IngridsSilveira/CalculoRescisao",
      hrefDemo: "https://ingridssilveira.github.io/CalculoRescisao/",
      description:
        texts[language]?.projects?.rescisao || "Descrição não disponível",
      key: 1,
    },
    {
      name: "Planetas do Star Wars API",
      src: "/images/projetos/star.webp",
      hrefGithub: "https://github.com/IngridsSilveira/starWars-Planets",
      hrefDemo: "https://ingridssilveira.github.io/starWars-Planets/",
      description:
        texts[language]?.projects?.starWars || "Descrição não disponível",
      key: 2,
    },
    {
      name: "E-commerce Alura",
      src: "/images/projetos/alura.webp",
      hrefGithub: "https://github.com/IngridsSilveira/AluraGeek",
      hrefDemo: "https://ingridssilveira.github.io/AluraGeek/",
      description:
        texts[language]?.projects?.ecommerce || "Descrição não disponível",
      key: 3,
    },
  ];

  return (
    <section id="Projects" className="container-fluid mx-auto p-5 dark:bg-slate-100 text-white">
      <h2 className="text-center text-3xl font-protest tracking-wider mb-8 dark:text-black">
        Meus Projetos
      </h2>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.key}
            id={item.key}
            className="rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 bg-white"
          >
            <img
              className="w-full h-48 object-cover"
              src={item.src}
              alt={`Imagem do projeto`}
            />
            <div className="p-4">
              <h1 className="font-bold font-poppins text-lg mb-2 text-black">
                {item.name}
              </h1>
              <p className="text-sm text-gray-700 mb-4 font-poppins">
                {item.description}
              </p>
              <div className="flex justify-between">
                <a
                  href={item.hrefDemo}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md transition-all hover:bg-blue-700 font-sono"
                >
                  Demo
                </a>
                <a
                  href={item.hrefGithub}
                  className="bg-gray-900 text-white px-4 py-2 rounded-md transition-all hover:bg-gray-800 font-sono"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
