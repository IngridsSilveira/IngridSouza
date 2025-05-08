import { createContext, useState, useContext } from "react";

// TEXTOS DO SITE
const texts = {
  en: {
    profission: "IT Girl",
    about: "About Me",
    ingrid: "I'm Ingrid, a digital creator with a passion for technology and visual communication. I work as both a web developer and a video editor, combining creativity with functional solutions. I have experience in HTML, CSS, JavaScript, React and editing tools such as CapCut and Canva.",
    btnLookProjetcs: "Look my Projects",
    aboutMe:
      "Specialized in creating digital experiences, follow me on my social networks:",
   contact:
      "Contact me",
    programing: "💻 Programming",
    edicao: "🎬 Editing",
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
    profission: "Garota do Ti",
    about: "Sobre Mim",
    ingrid: "Sou Ingrid, uma criadora digital com paixão por tecnologia e comunicação visual. Atuo tanto como desenvolvedora web quanto como editora de vídeos, unindo criatividade com soluções funcionais. Tenho experiência em HTML, CSS, JavaScript, React e ferramentas de edição como CapCut e Canva.",
    aboutMe:
      "Especializada em criar experiências digitais, me siga nas minhas rede sociais:",
      btnLookProjetcs: "Veja meus Projetos",
   contact:
      "Entre em Contato",
    programing: "💻 Programação",
    edicao: "🎬 Edição",
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
