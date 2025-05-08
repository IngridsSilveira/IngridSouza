import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiCanva, SiTailwindcss } from "react-icons/si";
import capcut from "../../../assets/capcut-stroke-rounded.svg";
import { useLanguage } from "../../index";

// Reusable Card Component
const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-slate-200 w-80 ml-12 h-30 rounded-md shadow-md shadow-slate-800">
      <h1 className="text-center text-4xl bg-black rounded-t-md text-white font-protest tracking-wide p-1">
        {title}
      </h1>
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center p-3">
        {skills.map(({ IconComponent, imageSrc, color, size }, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {IconComponent ? (
              <IconComponent
                className={`${color} hover:scale-110 hover:transition`}
                size={size}
              />
            ) : (
              <img
                src={imageSrc}
                alt="Skill"
                className="w-14 h-14 hover:scale-110 hover:transition"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const { language, texts } = useLanguage();

  // Skill Data Object
  const skillData = [
    {
      title: texts[language].programing,
      skills: [
        { IconComponent: TiHtml5, color: "text-palete-orange", size: 55 },
        { IconComponent: IoLogoCss3, color: "text-linkedin-color", size: 45 },
        { IconComponent: RiJavascriptFill, color: "text-yellow-500", size: 55 },
        {
          IconComponent: BiLogoTypescript,
          color: "text-linkedin-color",
          size: 55,
        },
        { IconComponent: FaReact, color: "text-linkedin-color", size: 50 },
        { IconComponent: SiTailwindcss, color: "text-blue-600", size: 50 },
        { IconComponent: FaBootstrap, color: "text-purple-600", size: 50 },
      ],
    },
    {
      title: texts[language].edicao,
      skills: [
        { IconComponent: SiCanva, color: "text-purple-600", size: 55 },
        { imageSrc: capcut},
      ],
    },
  ];

  return (
    <section
      data-aos="fade-left"
      className="container-fluid h-screen md:h-60 flex flex-col md:flex-row gap-4 items-center justify-center text-black dark:bg-slate-100"
    >
      {skillData.map(({ title, skills }, index) => (
        <SkillCard key={index} title={title} skills={skills} />
      ))}
    </section>
  );
};
