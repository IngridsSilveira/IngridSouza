import { createContext, useState, useContext } from "react";

// TEXTOS DO SITE
const texts = {
  en: {
    btnSeeProject: "See Project",
    btnSeePrototype: "See Prototype",
    btnRepository: "Repository",
    tagDesign: "UI / UX Design",
    profission: "Digital Creator",
    contactTitle: "Get in Touch",
    contactSubtitle: "Have a project in mind or need help elevating your brand online? Let's talk!",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    sendMessageBtn: "Send Message",
    whatsappBtn: "Chat on WhatsApp",
    emailDirectBtn: "Send Email",
    about: "About Me",
    ingrid:
      "I'm Ingrid, a web developer and digital creator with a degree in Systems Analysis and Development. I combine technical programming precision with UI/UX design and video editing expertise. My mission is to help growing businesses build a strong digital presence by crafting fast, modern, and responsive websites (using React, JavaScript, HTML, and CSS) alongside dynamic videos tailored for high conversion. Let's build something great together!",
    btnLookProjetcs: "Look my Projects",
    aboutMe:
      "Elevating business online presence with high-converting websites and engaging video editing.",
    contact: "Contact me",
    myProjects: "My Projects",
    projects: {
      zei: "Full presentation of the ZEI project.",
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
    skillsSubtitle: "Technical skills in Web development, interface design, and content creation.",
    categoryEditing: "Editing",
    footerDevelopedBy: "Developed by",
    footerCTA: "Let's bring your idea to life? Get in touch.",
    footerRights: "All rights reserved.",
  },
  pt: {
    btnSeeProject: "Ver Projeto",
    btnSeePrototype: "Ver Protótipo",
    btnRepository: "Repositório",
    tagDesign: "UI / UX Design",
    profission: "Criadora Digital",
    contactTitle: "Entre em Contato",
    contactSubtitle: "Tem um projeto em mente ou quer transformar a presença digital da sua empresa? Vamos conversar!",
    nameLabel: "Seu Nome",
    emailLabel: "Seu E-mail",
    messageLabel: "Sua Mensagem",
    sendMessageBtn: "Enviar Mensagem",
    whatsappBtn: "Conversar no WhatsApp",
    emailDirectBtn: "Enviar E-mail",
    about: "Sobre Mim",
    ingrid:
      "Sou a Ingrid, desenvolvedora web e criadora digital formada em Análise e Desenvolvimento de Sistemas. Uno a precisão técnica da programação com o apelo visual do design UI/UX e da edição de vídeo. Meu foco é ajudar pequenos e médios negócios a se destacarem no mercado digital, criando sites rápidos, modernos e responsivos (com React, JavaScript, HTML e CSS), além de vídeos dinâmicos focados em conversão e engajamento. Quer profissionalizar sua marca e atrair mais clientes? Vamos conversar!",
    aboutMe:
      "Transformo a presença online do seu negócio com sites de alta conversão e edições de vídeo que atraem e engajam clientes.",
    btnLookProjetcs: "Veja meus Projetos",
    contact: "Entre em Contato",
    myProjects: "Meus Projetos",
    projects: {
      zei: "Apresentação completa do projeto ZEI.",
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
    skillsSubtitle: "Habilidades técnicas em desenvolvimento Web, design de interfaces e criação de conteúdo.",
    categoryEditing: "Edição",
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