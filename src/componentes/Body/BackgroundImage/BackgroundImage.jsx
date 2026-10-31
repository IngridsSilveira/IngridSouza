
import { FaLinkedin, FaGithub, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { useLanguage } from "../../index";

export const BackgroundImage = () => {
  const { language, texts } = useLanguage();
  const currentTexts = texts?.[language] || {};
  const isEnglish = language?.startsWith("en");

  const content = {
    title: isEnglish
      ? "Creativity, technology and digital solutions."
      : "Criatividade, tecnologia e soluções digitais.",
    description: isEnglish
      ? "Explore my work in video editing, digital design and web development. Turning ideas into engaging digital experiences."
      : "Explore meus trabalhos em edição de vídeo, design digital e desenvolvimento web. Transformando ideias em experiências digitais.",
    projects: isEnglish ? "Explore projects" : "Ver projetos",
    contact: isEnglish ? "Get in touch" : "Entrar em contato",
    label: isEnglish ? "MY CREATIVE UNIVERSE" : "MEU UNIVERSO CRIATIVO",
    video: isEnglish ? "Video Editing" : "Edição de vídeo",
    design: isEnglish ? "UI/UX Design" : "Design UI/UX",
    web: isEnglish ? "Web Development" : "Desenvolvimento Web",
  };

  return (
    <section
      id="Home"
      data-aos="fade-up"
      className="relative w-full overflow-hidden bg-zinc-950 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 px-5 md:px-8 py-12 md:py-20 transition-colors"
      aria-labelledby="home-heading"
    >
      {/* Brilho decorativo de fundo */}
      <div className="absolute -top-32 -right-20 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800 dark:border-zinc-400">

          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase font-mono">
              Ingrid Souza<span className="text-emerald-400">.</span>
            </h1>

            <p className="mt-1 text-sm md:text-base text-emerald-400 dark:text-emerald-700 font-semibold tracking-wide">
              {currentTexts.profission || "Criadora Digital"}
            </p>
          </div>

          {/* Redes sociais */}
          <nav
            aria-label="Redes sociais"
            className="flex items-center gap-4"
          >
            {[
              {
                url: "https://www.linkedin.com/in/ingridssilveira/",
                label: "LinkedIn",
                icon: <FaLinkedin />,
                hover: "hover:text-sky-400",
              },
              {
                url: "https://github.com/IngridsSilveira/",
                label: "GitHub",
                icon: <FaGithub />,
                hover: "hover:text-white dark:hover:text-zinc-950",
              },
              {
                url: "https://api.whatsapp.com/send?phone=5521979661084",
                label: "WhatsApp",
                icon: <FaWhatsapp />,
                hover: "hover:text-emerald-400",
              },
              {
                url: "https://www.youtube.com/@tsuki_editssD",
                label: "YouTube",
                icon: <FaYoutube />,
                hover: "hover:text-red-500",
              },
              {
                url: "https://www.tiktok.com/@tsukidx",
                label: "TikTok",
                icon: <AiFillTikTok />,
                hover: "hover:text-pink-400",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className={`text-zinc-400 dark:text-zinc-600 text-xl md:text-2xl transition-all duration-300 hover:-translate-y-1 ${social.hover}`}
              >
                {social.icon}
              </a>
            ))}
          </nav>
        </header>

        {/* Apresentação principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-14 md:py-20">

          {/* Texto */}
          <div className="text-center md:text-left">

            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-400 dark:text-emerald-700 uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {content.label}
            </span>

            <h2
              id="home-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              {content.title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-emerald-400 dark:text-emerald-700">
                {content.title.split(" ").slice(2).join(" ")}
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-400 dark:text-zinc-600 max-w-xl mx-auto md:mx-0">
              {content.description}
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-9">

              <a
                href="#Projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                {content.projects}
              </a>

              <a
                href="#Contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg border border-zinc-700 dark:border-zinc-400 hover:border-emerald-400 text-zinc-200 dark:text-zinc-800 font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
              >
                {content.contact}
              </a>

            </div>
          </div>

          {/* Painel visual */}
          <div className="relative max-w-md w-full mx-auto">

            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />

            <div className="relative bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 rounded-2xl p-6 md:p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-8">
                <span className="text-xs text-zinc-500 font-mono">
                  creative.skills
                </span>

                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="space-y-5">

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/70 dark:bg-zinc-200 border border-zinc-700/50 dark:border-zinc-300">
                  <span className="text-2xl">▶</span>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100 dark:text-zinc-900">
                      {content.video}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      CapCut · YouTube Create · IA
                    </p>
                  </div>
                  <span className="ml-auto text-emerald-400">01</span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/70 dark:bg-zinc-200 border border-zinc-700/50 dark:border-zinc-300">
                  <span className="text-2xl">✳</span>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100 dark:text-zinc-900">
                      {content.design}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      Figma · Canva · Affinity
                    </p>
                  </div>
                  <span className="ml-auto text-emerald-400">02</span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/70 dark:bg-zinc-200 border border-zinc-700/50 dark:border-zinc-300">
                  <span className="text-2xl">{"</>"}</span>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100 dark:text-zinc-900">
                      {content.web}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      React · JavaScript
                    </p>
                  </div>
                  <span className="ml-auto text-emerald-400">03</span>
                </div>

              </div>

              <div className="mt-8 pt-5 border-t border-zinc-700 dark:border-zinc-300 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">
                  Ingrid Souza
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  Available for projects
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
