import { useLanguage } from "../../index";

export const AboutMe = () => {
  const { language, texts } = useLanguage();
  const currentTexts = texts?.[language] || {};

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="w-full bg-zinc-950 dark:bg-zinc-200 py-12 px-6 md:px-12 text-zinc-100 dark:text-zinc-900 transition-colors"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl tracking-wide font-bold mb-6 text-zinc-100 dark:text-zinc-900 font-protest transition-colors"
          id="about-heading"
        >
          {currentTexts.about || "Sobre Mim"}
        </h2>
        
        <p className="text-base md:text-lg leading-relaxed text-zinc-300 dark:text-zinc-700 font-poppins transition-colors">
          {currentTexts.ingrid || currentTexts.aboutMe}
        </p>
      </div>
    </section>
  );
};