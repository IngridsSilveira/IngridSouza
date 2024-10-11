import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGit, FaNpm, FaReact, FaBootstrap } from "react-icons/fa";
import { SiCanva, SiTailwindcss } from "react-icons/si";

import { useLanguage } from "../../index";

// Reusable Card Component
const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-slate-200 w-80 h-30 rounded-md shadow-md shadow-slate-700">
      <h1 className="text-center text-4xl bg-black rounded-t-md shadow-md shadow-blue-800 text-white font-protest tracking-wide p-1">
        {title}
      </h1>
      <div className="flex flex-row gap-3 items-center justify-center p-3">
        {skills.map(({ IconComponent, color, size }, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <IconComponent
              className={`${color} hover:scale-110 hover:transition`}
              size={size}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const { language, texts } = useLanguage();

  const languages = [
    { IconComponent: TiHtml5, color: "text-palete-orange", size: 65 },
    { IconComponent: IoLogoCss3, color: "text-linkedin-color", size: 55 },
    { IconComponent: RiJavascriptFill, color: "text-yellow-500", size: 60 },
    { IconComponent: BiLogoTypescript, color: "text-linkedin-color", size: 60 },
  ];

  const frameworks = [
    { IconComponent: FaReact, color: "text-linkedin-color", size: 65 },
    { IconComponent: SiTailwindcss, color: "text-blue-600", size: 55 },
    { IconComponent: FaBootstrap, color: "text-purple-600", size: 60 },
  ];

  const tools = [
    { IconComponent: FaGit, color: "", size: 50 },
    { IconComponent: FaNpm, color: "text-red-600", size: 50 },
    { IconComponent: SiCanva, color: "text-purple-600", size: 55 },
  ];

  return (
    <section className="container-fluid h-screen md:h-60 flex flex-col md:flex-row gap-4 items-center justify-center text-black dark:bg-slate-100">
      <SkillCard title={texts[language].linguagem} skills={languages} />
      <SkillCard title="Frameworks" skills={frameworks} />
      <SkillCard title={texts[language].ferramentas} skills={tools} />
    </section>
  );
};
