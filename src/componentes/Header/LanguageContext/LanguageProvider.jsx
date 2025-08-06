import { createContext, useState, useContext } from "react";

// TEXTOS DO SITE
const texts = {
  en: {
    profission: "IT Girl",
    about: "About Me",
    ingrid: "I'm Ingrid, a digital creator with a passion for technology and visual communication. I work as both a web developer and a video editor, combining creativity with functional solutions. I have experience in HTML, CSS, JavaScript, React and editing tools such as CapCut and Canva.",
    btnLookProjetcs: "Look my Projects",
    aboutMe:
      "Website development and video editing for small businesses looking to grow online!",
   contact:
      "Contact me",
    myProjects: "My Projects",
    projects: {
      lions: "Landing page for a car dealership, focused on SEO, responsiveness, and accessibility.",
       estetica: "Short video for social media, showcasing the clinic's services, focusing on well-being, transformation, and scheduling via WhatsApp.",
      lpEstetica: "Landing page for a beauty clinic, focusing on SEO, responsiveness, and customer engagement.",
      rescisao: "Simple app to calculate termination of employment based on user input.",
      lpPet: "Landing page about a pet shop, focusing on SEO, responsiveness, and customer appeal.",
      confeitaria: "Short video for a fictional artisanal candy store, focusing on visual appeal and calling for orders via WhatsApp.",
    }
  },
  pt: {
    profission: "Garota do Ti",
    about: "Sobre Mim",
    ingrid: "Sou Ingrid, uma criadora digital com paixão por tecnologia e comunicação visual. Atuo tanto como desenvolvedora web quanto como editora de vídeos, unindo criatividade com soluções funcionais. Tenho experiência em HTML, CSS, JavaScript, React e ferramentas de edição como CapCut e Canva.",
    aboutMe:
      "Desenvolvimento de sites e edição de vídeos para pequenos negócios que querem crescer online!",
      btnLookProjetcs: "Veja meus Projetos",
   contact:
      "Entre em Contato",
    myProjects: "Meus Projetos",
    projects: {
      lions: "Landing page para uma concessionária de seminovos, com foco em SEO, responsividade e acessibilidade.",
      estetica: "Vídeo curto para redes sociais, mostrando os serviços da clínica com foco em bem-estar, transformação e agendamento por WhatsApp.",
      lpEstetica: "Landing Page sobre uma clínica estética, com foco em SEO, responsividade e atratividade de clientes.",
      barbearia: "Vídeo de divulgação para barbearia fictícia, com foco em estilo masculino, atendimento personalizado e cuidados com cabelo e barba.",
      lpPet: "Landing Page sobre uma pet shop, com foco em SEO, responsividade e atratividade de clientes.",
      confeitaria: "Vídeo curto para loja fictícia de doces artesanais, focando em apelo visual e chamada para encomendas via WhatsApp.",
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
