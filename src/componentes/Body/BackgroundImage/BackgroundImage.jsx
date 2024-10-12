import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { useLanguage } from "../../index";

export const BackgroundImage = () => {
  const { language, texts } = useLanguage();
  return (
    <section
      id="Home"
      data-aos="fade-up"
      className="h-96 container-fluid md:h-96 w-full bg-black-background dark:bg-white-background text-white bg-cover bg-center flex flex-col md:flex-row  items-center justify-between p-3"
      aria-labelledby="home-heading"
    >
      {/* nome e profissão */}
      <div>
        <h1
          className="text-3xl md:text-4xl dark:text-black uppercase font-sono"
          id="home-heading"
        >
          Ingrid S. Silveira
        </h1>
        <h2
          id="profission"
          className="text-2xl md:text-3xl dark:text-black text-center font-sono"
        >
          {texts[language].profission}
        </h2>
      </div>
      {/* informações e icones */}
      <div>
        <h3
          id="aboutMe"
          className="text-1xl w-96 text-center dark:text-black dark:font-semibold font-poppins font-normal tracking-tighter"
        >
          {texts[language].aboutMe}
        </h3>
        <div className="flex items-center justify-center mt-2 gap-2">
          <a
            href="https://www.linkedin.com/in/ingridssilveira/"
            aria-label={`Link para o LinkedIn de Ingrid S. Silveira`}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={40}
              className="text-linkedin-color hover:translate-y-2 hover:text-blue-700"
            />
          </a>
          <a
            href="https://github.com/IngridsSilveira/"
            aria-label={`Link para o GitHub de Ingrid S. Silveira`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={40}
              className="dark:text-black hover:translate-y-2"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521979661084"
            aria-label={`Link para o Whatsapp de Ingrid S. Silveira`}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp
              size={40}
              className="text-whatsapp-color hover:translate-y-2 hover:text-green-700"
            />
          </a>
          <a
            href="https://docs.google.com/document/d/1K2waePJbltmot6mHhPIowOVboaE_zA7YGXcuTHohUEY/edit?tab=t.0"
            aria-label={`Link para o Currículo de Ingrid S. Silveira`}
            target="_blank"
            rel="noreferrer"
          >
            <PiReadCvLogoFill
              size={40}
              className="dark:text-black hover:translate-y-2 hover:text-gray-400"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
