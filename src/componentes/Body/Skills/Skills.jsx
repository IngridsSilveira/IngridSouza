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
    // Web / Front-end
    { name: "HTML5", IconComponent: TiHtml5, color: "text-orange-500", category: "Web" },
    { name: "CSS3", IconComponent: IoLogoCss3, color: "text-blue-500", category: "Web" },
    { name: "JavaScript", IconComponent: RiJavascriptFill, color: "text-yellow-400", category: "Web" },
    { name: "TypeScript", IconComponent: BiLogoTypescript, color: "text-blue-600", category: "Web" },
    { name: "React", IconComponent: FaReact, color: "text-cyan-400", category: "Web" },
    { name: "Tailwind CSS", IconComponent: SiTailwindcss, color: "text-sky-400", category: "Web" },
    { name: "Bootstrap", IconComponent: FaBootstrap, color: "text-purple-500", category: "Web" },
    { name: "Git", IconComponent: FaGitAlt, color: "text-orange-600", category: "Dev" },
    
    // UI / UX & Design / Mídia
    { name: "Figma", IconComponent: FiFigma, color: "text-pink-500", category: "UI/UX" },
    { name: "Canva", IconComponent: SiCanva, color: "text-cyan-500", category: "Design" },
    { name: "CapCut", imageSrc: capcut, category: currentTexts.categoryEditing || "Edição" },
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
            {currentTexts.skillsSubtitle || "Habilidades técnicas em desenvolvimento Web, design de interfaces e criação de conteúdo."}
          </p>
        </div>

        {/* Grid de Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {allSkills.map(({ name, IconComponent, imageSrc, color, category }, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center p-4 bg-zinc-950/60 dark:bg-zinc-200/60 border border-zinc-800 dark:border-zinc-300 rounded-xl hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Ícone ou Imagem */}
              <div className="mb-3 flex items-center justify-center h-12 w-12">
                {IconComponent ? (
                  <IconComponent
                    className={`${color} group-hover:scale-110 transition-transform duration-300`}
                    size={42}
                  />
                ) : (
                  <img
                    src={imageSrc}
                    alt={name}
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 object-contain"
                  />
                )}
              </div>

              {/* Nome da Skill */}
              <span className="font-semibold text-sm text-zinc-200 dark:text-zinc-800 group-hover:text-emerald-400 dark:group-hover:text-emerald-600 transition-colors">
                {name}
              </span>

              {/* Tag / Categoria */}
              <span className="mt-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-600 bg-zinc-900 dark:bg-zinc-300/60 px-2 py-0.5 rounded-full border border-zinc-800/80 dark:border-zinc-300">
                {category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};