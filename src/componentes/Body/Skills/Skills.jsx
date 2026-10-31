import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiCanva, SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import capcut from "../../../assets/capcut-stroke-rounded.svg";
import { useLanguage } from "../../Header/LanguageContext/LanguageProvider"; // Ajuste o caminho se necessário

export const Skills = () => {
  const { language, texts } = useLanguage();
  const currentTexts = texts?.[language] || {};

  const allSkills = [
    // Edição de vídeo
    {
      name: "CapCut",
      imageSrc: capcut,
      category: "Edição de Vídeo",
    },

    // Design
    {
      name: "Figma",
      IconComponent: FiFigma,
      color: "text-pink-500",
      category: "Design",
    },
    {
      name: "Canva",
      IconComponent: SiCanva,
      color: "text-cyan-500",
      category: "Design",
    },
    
    // Desenvolvimento Web
    {
      name: "HTML5",
      IconComponent: TiHtml5,
      color: "text-orange-500",
      category: "Web",
    },
    {
      name: "CSS3",
      IconComponent: IoLogoCss3,
      color: "text-blue-500",
      category: "Web",
    },
    {
      name: "JavaScript",
      IconComponent: RiJavascriptFill,
      color: "text-yellow-400",
      category: "Web",
    },
    {
      name: "TypeScript",
      IconComponent: BiLogoTypescript,
      color: "text-blue-600",
      category: "Web",
    },
    {
      name: "React",
      IconComponent: FaReact,
      color: "text-cyan-400",
      category: "Web",
    },
    {
      name: "Tailwind CSS",
      IconComponent: SiTailwindcss,
      color: "text-sky-400",
      category: "Web",
    },
    {
      name: "Bootstrap",
      IconComponent: FaBootstrap,
      color: "text-purple-500",
      category: "Web",
    },
    {
      name: "Git",
      IconComponent: FaGitAlt,
      color: "text-orange-600",
      category: "Web",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="w-full py-16 px-4 flex justify-center bg-zinc-950 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 transition-colors"
    >
      <div className="w-full max-w-6xl bg-zinc-900/90 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-sm transition-all">
        {/* Título da Seção */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-900 mb-2 transition-colors">
            {currentTexts.skillsTitle || "Conhecimentos & Tecnologias"}
          </h2>
          <p className="text-zinc-400 dark:text-zinc-600 text-sm md:text-base max-w-xl mx-auto transition-colors">
            {currentTexts.skillsSubtitle ||
              "Habilidades técnicas em desenvolvimento Web, design de interfaces e criação de conteúdo."}
          </p>
        </div>

        {/* Grid de Skills */}
        {/* Blocos de habilidades */}
        <div className="space-y-6">
          {/* Edição de Vídeo em destaque */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/50 bg-emerald-500/5 p-6 md:p-8 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-md">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                  {language === "en" ? "Main focus" : "Foco principal"}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold mt-2 text-zinc-100 dark:text-zinc-900">
                  {language === "en" ? "Video Editing" : "Edição de Vídeo"}
                </h3>

                <p className="text-sm md:text-base mt-3 leading-relaxed text-zinc-400 dark:text-zinc-600">
                  {language === "en"
                    ? "Promotional videos, short-form content and creative editing for digital platforms."
                    : "Vídeos promocionais, conteúdos curtos e edições criativas para plataformas digitais."}
                </p>
              </div>

              {allSkills
                .filter((skill) => skill.category === "Edição de Vídeo")
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 bg-zinc-900 dark:bg-zinc-100 border border-emerald-500/30 rounded-xl p-5 min-w-[180px]"
                  >
                    <img
                      src={skill.imageSrc}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />

                    <span className="font-bold text-lg text-zinc-100 dark:text-zinc-900">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Design e Desenvolvimento Web */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Design */}
            <div className="md:col-span-1 bg-zinc-950/60 dark:bg-zinc-200/60 border border-zinc-800 dark:border-zinc-300 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2 text-zinc-100 dark:text-zinc-900">
                Design
              </h3>

              <p className="text-sm text-zinc-400 dark:text-zinc-600 mb-6">
                {language === "en"
                  ? "Interface design and visual content."
                  : "Design de interfaces e conteúdo visual."}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {allSkills
                  .filter((skill) => skill.category === "Design")
                  .map(({ name, IconComponent, color }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 hover:border-emerald-500 transition-all"
                    >
                      <IconComponent className={color} size={38} />

                      <span className="font-semibold text-sm text-zinc-200 dark:text-zinc-800">
                        {name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Desenvolvimento Web */}
            <div className="md:col-span-2 bg-zinc-950/60 dark:bg-zinc-200/60 border border-zinc-800 dark:border-zinc-300 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2 text-zinc-100 dark:text-zinc-900">
                {language === "en" ? "Web Development" : "Desenvolvimento Web"}
              </h3>

              <p className="text-sm text-zinc-400 dark:text-zinc-600 mb-6">
                {language === "en"
                  ? "Front-end technologies and development tools."
                  : "Tecnologias front-end e ferramentas de desenvolvimento."}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {allSkills
                  .filter((skill) => skill.category === "Web")
                  .map(({ name, IconComponent, color }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 hover:border-emerald-500 transition-all"
                    >
                      <IconComponent className={color} size={36} />

                      <span className="font-semibold text-xs text-center text-zinc-200 dark:text-zinc-800">
                        {name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
