import { createContext, useState, useContext } from "react";

// TEXTOS DO SITE
const texts = {
  en: {
    profission: "Web Developer",
    about: "About Me",
    ingrid: "Hi! I'm Ingrid, a web developer passionate about creating modern and functional digital experiences. I enjoy solving complex problems and learning new technologies. Currently, I'm focused on projects with React, TypeScript and Tailwind CSS, but I'm always looking to explore other tools and frameworks.",
    btnLookProjetcs: "Look my Projects",
    aboutMe:
      "Specialized in creating modern and responsive digital experiences, with a focus on performance and usability.",
   contact:
      "Contact me",
    linguagem: "Languages",
    ferramentas: "Tools",
    myProjects: "My Projects",
    projects: {
      lions: "Landing page for a car dealership, focused on SEO, responsiveness, and accessibility.",
      form: "Real-time form validation with API integration for data validation.",
      countries: "Interactive page that consumes an API to list countries with basic information such as flag and capital.",
      rescisao: "Simple app to calculate termination of employment based on user input.",
      starWars: "Application that consumes the Star Wars planets API, displaying details and characteristics of each planet.",
      ecommerce: "Geek-themed virtual store developed as a practical project to apply e-commerce and responsiveness concepts.",
    }
  },
  pt: {
    profission: "Desenvolvedora web",
    about: "Sobre Mim",
    ingrid: "Olá! Eu sou Ingrid, uma desenvolvedora web apaixonada por criar experiências digitais modernas e funcionais. Gosto de resolver problemas complexos e aprender novas tecnologias. Atualmente, estou focada em projetos com React, TypeScript e Tailwind CSS, mas sempre busco explorar outras ferramentas e frameworks.",
    aboutMe:
      "Especializada em criar experiências digitais modernas e responsivas, com um foco em desempenho e usabilidade.",
      btnLookProjetcs: "Veja meus Projetos",
   contact:
      "Entre em Contato",
    linguagem: "Linguagens",
    ferramentas: "Ferramentas",
    myProjects: "Meus Projetos",
    projects: {
      lions: "Landing page para uma concessionária de seminovos, com foco em SEO, responsividade e acessibilidade.",
      form: "Validação de formulários em tempo real com integração de API para validação de dados.",
      countries: "Página interativa que consome uma API para listar países com informações básicas, como bandeira e capital.",
      rescisao: "Aplicação simples para calcular a rescisão trabalhista com base em dados fornecidos pelo usuário.",
      starWars: "Aplicação que consome a API de planetas de Star Wars, exibindo detalhes e características de cada planeta.",
      ecommerce: "Loja virtual com tema Geek, desenvolvida como projeto prático para aplicar conceitos de e-commerce e responsividade.",
    }
  }
};

// Criando o contexto
const LanguageContext = createContext();

// Provider do contexto de idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");

  // Função para alternar entre os idiomas
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook para usar o contexto de idioma
export const useLanguage = () => useContext(LanguageContext);
