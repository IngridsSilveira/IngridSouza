import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiCanva, SiTailwindcss } from "react-icons/si";
import capcut from "../../../assets/capcut-stroke-rounded.svg";
import { useLanguage } from "../../index";

export const Skills = () => {
  const { language, texts } = useLanguage();

  // Unificando todas as skills em um só array
  const allSkills = [
    { IconComponent: TiHtml5, color: "text-palete-orange", size: 55 },
    { IconComponent: IoLogoCss3, color: "text-linkedin-color", size: 45 },
    { IconComponent: RiJavascriptFill, color: "text-yellow-500", size: 55 },
    { IconComponent: BiLogoTypescript, color: "text-linkedin-color", size: 55 },
    { IconComponent: FaReact, color: "text-linkedin-color", size: 50 },
    { IconComponent: SiTailwindcss, color: "text-blue-600", size: 50 },
    { IconComponent: FaBootstrap, color: "text-purple-600", size: 50 },
    { IconComponent: SiCanva, color: "text-purple-600", size: 55 },
    { imageSrc: capcut },
  ];

  return (
    <section
      data-aos="fade-left"
      className="container-fluid h-screen md:h-60 flex items-center justify-center text-black dark:bg-slate-100"
    >
      <div className="bg-slate-200 max-w-5xl rounded-md shadow-md shadow-slate-800">
        <h1 className="text-center text-4xl bg-black rounded-t-md text-white font-protest tracking-wide p-1">
          Conhecimentos
        </h1>
        <div className="flex flex-row flex-wrap gap-4 items-center justify-center p-4">
          {allSkills.map(({ IconComponent, imageSrc, color, size }, idx) => (
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
    </section>
  );
};
