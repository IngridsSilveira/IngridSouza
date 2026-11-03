import {
  FaVideo,
  FaPalette,
  FaLaptopCode,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { useLanguage } from "../../Header/LanguageContext/LanguageProvider";

export const Services = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const services = [
    {
      title: isEnglish ? "Video Editing" : "Edição de Vídeo",
      description: isEnglish
        ? "Short-form videos for brands, businesses and content creators. I also take on longer video editing projects."
        : "Edição de vídeos curtos para marcas, negócios e criadores de conteúdo. Também aceito projetos de vídeos mais longos.",
      items: isEnglish
        ? [
            "Instagram Reels, TikTok and Shorts",
            "Product and service promotions",
            "Social media content",
            "Cuts, transitions and subtitles",
            "Audio, music and sound effects",
            "Long-form videos upon request",
          ]
        : [
            "Instagram Reels, TikTok e Shorts",
            "Divulgação de produtos e serviços",
            "Conteúdo para redes sociais",
            "Cortes, transições e legendas",
            "Edição de áudio, músicas e efeitos sonoros",
            "Vídeos longos sob consulta",
          ],
      Icon: FaVideo,
      featured: true,
    },
    {
      title: isEnglish ? "Digital Design" : "Design Digital",
      description: isEnglish
        ? "Visual materials and interfaces that help communicate your brand and strengthen your digital presence."
        : "Criação de materiais visuais e interfaces que ajudam a comunicar sua marca e fortalecer sua presença digital.",
      items: isEnglish
        ? ["Social media graphics", "Visual materials", "Interface design"]
        : [
            "Artes para redes sociais",
            "Materiais visuais",
            "Design de interfaces",
          ],
      Icon: FaPalette,
      featured: false,
    },
    {
      title: isEnglish ? "Web Development" : "Desenvolvimento Web",
      description: isEnglish
        ? "Responsive and modern websites to present your business and services online."
        : "Sites modernos e responsivos para apresentar seu negócio e seus serviços na internet.",
      items: isEnglish
        ? ["Landing pages", "Responsive websites", "Modern interfaces"]
        : ["Landing pages", "Sites responsivos", "Interfaces modernas"],
      Icon: FaLaptopCode,
      featured: false,
    },
  ];

  return (
    <section
      id="Services"
      data-aos="fade-up"
      className="w-full pt-16 pb-8 px-4 flex justify-center bg-zinc-950 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 transition-colors"
    >
      <div className="w-full max-w-6xl bg-zinc-900/90 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-sm transition-all">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {isEnglish ? "My Services" : "Meus Serviços"}
          </h2>

          <p className="text-zinc-400 dark:text-zinc-600 text-sm md:text-base max-w-2xl mx-auto">
            {isEnglish
              ? "Creative digital solutions to help your brand stand out."
              : "Soluções digitais criativas para ajudar sua marca a se destacar."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.Icon;

            return (
              <div
                key={service.title}
                className={`relative rounded-2xl border p-6 md:p-8 flex flex-col transition-all hover:-translate-y-1 ${
                  service.featured
                    ? "md:col-span-2 border-emerald-500/50 bg-emerald-500/5"
                    : "border-zinc-800 dark:border-zinc-300 bg-zinc-950/60 dark:bg-zinc-200/60"
                }`}
              >
                {service.featured && (
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4">
                    {isEnglish ? "Main service" : "Serviço principal"}
                  </span>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-zinc-400 dark:text-zinc-600 mb-6">
                  {service.description}
                </p>

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 ${
                    service.featured ? "md:grid-cols-3" : ""
                  }`}
                >
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-zinc-300 dark:text-zinc-700"
                    >
                      <FaCheck className="text-emerald-500 shrink-0 text-xs" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#Contact"
                  className="mt-auto inline-flex items-center justify-center gap-3 w-full sm:w-fit px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-950/20"
                >
                  {isEnglish ? "Request a quote" : "Solicitar orçamento"}
                  <FaArrowRight className="text-sm" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Chamada comercial */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-zinc-100 dark:text-zinc-900 mb-3">
            {isEnglish
              ? "Ready to bring your next project to life?"
              : "Vamos tirar seu próximo projeto do papel?"}
          </h3>

          <p className="text-sm md:text-base text-zinc-400 dark:text-zinc-600 max-w-2xl mx-auto mb-6">
            {isEnglish
              ? "Need to promote your brand, showcase your products or strengthen your digital presence? Let's talk about how I can help!"
              : "Precisa divulgar sua marca, apresentar seus produtos ou fortalecer sua presença digital? Vamos conversar sobre como posso ajudar!"}
          </p>

          <a
            href="#Contact"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-950/20"
          >
            {isEnglish ? "Talk about my project" : "Falar sobre meu projeto"}
            <FaArrowRight className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};
