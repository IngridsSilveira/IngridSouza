import { useLanguage } from "../../index";

export const AboutMe = () => {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="w-full bg-zinc-950 dark:bg-zinc-200 py-20 px-6 md:px-12 text-zinc-100 dark:text-zinc-900 transition-colors"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <span className="text-emerald-400 dark:text-emerald-600 text-sm font-semibold uppercase tracking-[0.2em]">
            {isEnglish ? "A little about me" : "Um pouco sobre mim"}
          </span>

          <h2
            className="text-3xl md:text-4xl tracking-wide font-bold mt-3 text-zinc-100 dark:text-zinc-900 font-protest transition-colors"
            id="about-heading"
          >
            {isEnglish ? "About Me" : "Sobre Mim"}
          </h2>
        </div>

        {/* Apresentação */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg leading-relaxed text-zinc-300 dark:text-zinc-700 font-poppins transition-colors">
            {isEnglish
              ? "I work in the digital field, combining creativity and technology to develop visual and functional content and solutions. I'm interested in exploring different possibilities to turn ideas into digital experiences."
              : "Atuo na área digital, unindo criatividade e tecnologia para desenvolver conteúdos e soluções visuais e funcionais. Tenho interesse em explorar diferentes possibilidades para transformar ideias em experiências digitais."}
          </p>

          <p className="text-base md:text-lg leading-relaxed text-zinc-300 dark:text-zinc-700 font-poppins mt-6 transition-colors">
            {isEnglish
              ? "My main focus is video editing for social media and digital content. I also work with digital design and web development, creating projects that combine communication, visual identity and technology."
              : "Meu principal foco é a edição de vídeos para redes sociais e conteúdos digitais. Também atuo com design digital e desenvolvimento web, criando projetos que combinam comunicação, identidade visual e tecnologia."}
          </p>
        </div>
      </div>
    </section>
  );
};
