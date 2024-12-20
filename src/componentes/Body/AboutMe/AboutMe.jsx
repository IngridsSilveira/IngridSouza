import { useLanguage } from "../../index";

export const AboutMe = () => {
  const { language, texts } = useLanguage();
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="py-12 px-6 md:px-12 text-white dark:bg-slate-100"
      aria-labelledby="about-heading"
    >
      <h2
        className="text-3xl md:text-4xl tracking-wide text-center mb-6 dark:text-gray-950 font-protest"
        id="about-heading"
      >
        {texts[language].about}
      </h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg leading-relaxed mb-6 dark:text-gray-800 font-poppins">
          {texts[language].ingrid}
        </p>
        <div className="mt-8">
          <a
            href="#Projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            aria-label={texts[language].btnLookProjetcs}
          >
            {texts[language].btnLookProjetcs}
          </a>
        </div>
      </div>
    </section>
  );
};
