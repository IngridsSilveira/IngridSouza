import { createContext, useState, useContext } from "react";

// TEXTOS DO SITE
const texts = {
  en: {
    profission: "Digital Solutions Creator",
    contactTitle: "Let's Talk",
    contactSubtitle:
      "Have a project in mind, need video editing or digital services, or want to discuss a professional opportunity? Feel free to reach out!",
    whatsappBtn: "Chat on WhatsApp",
    emailDirectBtn: "Send Email",
    projects: {
      zei: "Full presentation of the Zei project, an app for task organization and productivity.",
      cocaCola: "Modern visual redesign proposal for the brand interface.",
      magaluDesktop: "Web prototype focused on e-commerce and UX.",
      magaluMobile: "Responsive layout focused on the mobile experience.",
      prototipos: "Collection of UI screens and design concepts.",
      spotify: "UI study focused on a media player interface.",
      lions:
        "Landing page for a car dealership, focused on SEO, responsiveness, and accessibility.",
      estetica:
        "Short video for social media, showcasing the clinic's services, focusing on well-being, transformation, and scheduling via WhatsApp.",
      lpEstetica:
        "Landing page for a beauty clinic, focusing on SEO, responsiveness, and customer engagement.",
      barbearia:
        "Promotional video for a fictional barbershop, focusing on men's style, personalized service, and hair & beard care.",
      rescisao:
        "Simple app to calculate termination of employment based on user input.",
      lpPet:
        "Landing page about a pet shop, focusing on SEO, responsiveness, and customer appeal.",
      confeitaria:
        "Short video for a fictional artisanal candy store, focusing on visual appeal and calling for orders via WhatsApp.",
    },
    skillsTitle: "Skills & Technologies",
    skillsSubtitle:
      "Technical skills in Web development, interface design, and content creation.",
  
    footerDevelopedBy: "Developed by",
    footerCTA: "Let's bring your idea to life? Get in touch.",
    footerRights: "All rights reserved.",
  },
  pt: {
    profission: "Criadora de Soluções Digitais",
    contactTitle: "Vamos Conversar?",
    contactSubtitle:
      "Tem um projeto em mente, precisa de serviços de edição de vídeo ou soluções digitais, ou deseja conversar sobre uma oportunidade profissional? Entre em contato!",
    whatsappBtn: "Conversar no WhatsApp",
    emailDirectBtn: "Enviar E-mail",
    projects: {
      zei: "Apresentação completa do projeto Zei, um app para organização de tarefas e produtividade.",
      cocaCola: "Proposta visual moderna para interface da marca.",
      magaluDesktop: "Protótipo web focado em e-commerce e UX.",
      magaluMobile: "Layout responsivo focado na experiência mobile.",
      prototipos: "Conjunto de telas e conceitos de design.",
      spotify: "Estudo de UI focado em reprodutor de mídia.",
      lions:
        "Landing page para uma concessionária de seminovos, com foco em SEO, responsividade e acessibilidade.",
      estetica:
        "Vídeo curto para redes sociais, mostrando os serviços da clínica com foco em bem-estar, transformação e agendamento por WhatsApp.",
      lpEstetica:
        "Landing Page sobre uma clínica estética, com foco em SEO, responsividade e atratividade de clientes.",
      barbearia:
        "Vídeo de divulgação para barbearia fictícia, com foco em estilo masculino, atendimento personalizado e cuidados com cabelo e barba.",
      rescisao:
        "Aplicativo simples para calcular a rescisão de contrato de trabalho com base nos dados informados pelo usuário.",
      lpPet:
        "Landing Page sobre uma pet shop, com foco em SEO, responsividade e atratividade de clientes.",
      confeitaria:
        "Vídeo curto para loja fictícia de doces artesanais, focando em apelo visual e chamada para encomendas via WhatsApp.",
    },
    skillsTitle: "Conhecimentos & Tecnologias",
    skillsSubtitle:
      "Habilidades técnicas em desenvolvimento Web, design de interfaces e criação de conteúdo.",
    footerDevelopedBy: "Desenvolvido por",
    footerCTA: "Vamos tirar sua ideia do papel? Entre em contato.",
    footerRights: "Todos os direitos reservados.",
  },
};

// Criando o contexto
export const LanguageContext = createContext();

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
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};
