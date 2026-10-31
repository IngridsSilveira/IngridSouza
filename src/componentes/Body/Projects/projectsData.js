export const getProjectsData = (texts = {}, language = "pt") => {
  const currentText = texts[language] || {};
  const projects = currentText.projects || {};

  const isEnglish = language === "en";

  return [
    // EDIÇÃO DE VÍDEO
    {
      key: 13,
      name: isEnglish
        ? "Beauty Promotional Video"
        : "Vídeo Publicitário | Beleza",
      src: "/images/images_webp/port-beleza.webp",
      videoId: "ycJst-h807U",
      hrefDemo: "https://youtube.com/shorts/ycJst-h807U",
      hrefGithub: "",
      category: "video",
      description: isEnglish
        ? "Demonstration project for social media, featuring rhythmic cuts, transitions, visual adjustments and promotional text."
        : "Projeto demonstrativo para redes sociais, com cortes sincronizados à música, transições, ajustes visuais e textos promocionais.",
    },
    {
      key: 14,
      name: isEnglish
        ? "Food Promotional Video"
        : "Vídeo Publicitário | Gastronomia",
      src: "/images/images_webp/port-comida.webp",
      videoId: "SmJ-RiOK37M",
      hrefDemo: "https://youtube.com/shorts/SmJ-RiOK37M",
      hrefGithub: "",
      category: "video",
      description: isEnglish
        ? "Demonstration project focused on food promotion, with dynamic editing, music synchronization and engaging text."
        : "Projeto demonstrativo de edição para o segmento gastronômico, com cortes dinâmicos, sincronização musical e textos estratégicos.",
    },
    {
      key: 15,
      name: isEnglish
        ? "AI-Assisted Product Advertisement"
        : "Vídeo Publicitário | Produto com IA",
      src: "/images/images_webp/port-produto.webp",
      videoId: "FjMp9iXty6w",
      hrefDemo: "https://youtube.com/shorts/FjMp9iXty6w",
      hrefGithub: "",
      category: "video",
      description: isEnglish
        ? "Personal affiliate content created with AI assistance, using the real product image, editing and custom calls to action."
        : "Conteúdo próprio de afiliada, criado com auxílio de IA, utilizando a imagem real do produto, edição e chamadas para ação personalizadas.",
    },

    // DESENVOLVIMENTO WEB
    {
      key: 1,
      name: "Lions Seminovos",
      src: "/images/images_webp/lions.webp",
      hrefGithub: "https://github.com/IngridsSilveira/lions-seminovos",
      hrefDemo: "https://ingridssilveira.github.io/lions-seminovos/",
      category: "web",
      description: projects.lions || "Descrição não disponível",
    },
    {
      key: 2,
      name: "Landing Page Clínica Estética",
      src: "/images/images_webp/clinica-estetica.webp",
      hrefGithub: "https://github.com/IngridsSilveira/clinica-estetica",
      hrefDemo: "https://ingridssilveira.github.io/clinica-estetica/",
      category: "web",
      description: projects.lpEstetica || "Descrição não disponível",
    },
    {
      key: 3,
      name: "Landing Page Pet Shop",
      src: "/images/images_webp/pet-shop.webp",
      hrefGithub: "https://github.com/IngridsSilveira/pet-shop",
      hrefDemo: "https://ingridssilveira.github.io/pet-shop/",
      category: "web",
      description: projects.lpPet || "Descrição não disponível",
    },

    // UI/UX DESIGN
    {
      key: 4,
      name: "Zei - Organização de Tarefas",
      src: "/images/images_webp/zei.png",
      hrefGithub: "https://github.com/IngridsSilveira/Zei",
      hrefDemo: "https://ingridssilveira.github.io/Zei/",
      category: "design",
      description: projects.zei || "Descrição não disponível",
    },
    {
      key: 5,
      name: "Redesign Coca-Cola",
      src: "/images/images_webp/cocacola.webp",
      hrefGithub: "",
      hrefDemo: "",
      category: "design",
      description:
        projects.cocaCola ||
        "Proposta visual moderna para interface da marca.",
    },
    {
      key: 6,
      name: "Interface Magalu (Desktop)",
      src: "/images/images_webp/magalu-desktop.webp",
      hrefGithub: "",
      hrefDemo: "",
      category: "design",
      description:
        projects.magaluDesktop || "Protótipo web focado em e-commerce e UX.",
    },
    {
      key: 7,
      name: "Interface Magalu (Mobile)",
      src: "/images/images_webp/magalu-mobile.webp",
      hrefGithub: "",
      hrefDemo: "",
      category: "design",
      description:
        projects.magaluMobile ||
        "Layout responsivo focado na experiência mobile.",
    },
    {
      key: 8,
      name: "Coleção de Protótipos UI",
      src: "/images/images_webp/prototipos.webp",
      hrefGithub: "",
      hrefDemo: "",
      category: "design",
      description:
        projects.prototipos || "Conjunto de telas e conceitos de design.",
    },
    {
      key: 9,
      name: "Interface Spotify Concept",
      src: "/images/images_webp/spotify.webp",
      hrefGithub: "",
      hrefDemo: "",
      category: "design",
      description:
        projects.spotify || "Estudo de UI focado em reprodutor de mídia.",
    },
  ];
};