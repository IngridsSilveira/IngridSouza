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
              ? "I'm a digital professional in continuous development, interested in technology, creativity and building digital experiences. I enjoy turning ideas into visual and functional solutions, combining design, communication and technology."
              : "Sou uma profissional em constante desenvolvimento na área digital, com interesse em tecnologia, criatividade e construção de experiências digitais. Gosto de transformar ideias em soluções visuais e funcionais, unindo design, comunicação e tecnologia."}
          </p>

          <p className="text-base md:text-lg leading-relaxed text-zinc-300 dark:text-zinc-700 font-poppins mt-6 transition-colors">
            {isEnglish
              ? "My main focus is video editing for social media and digital content. I also work on UI/UX design studies and web development projects, expanding my ability to create complete digital solutions."
              : "Meu principal foco é a edição de vídeos para redes sociais e conteúdos digitais. Também desenvolvo estudos de UI/UX Design e projetos de desenvolvimento web, ampliando minha capacidade de criar soluções digitais completas."}
          </p>
        </div>

        {/* Áreas de atuação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">

          <div className="p-6 rounded-2xl bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 hover:border-emerald-500/60 transition-colors">
            <h3 className="text-lg font-bold text-emerald-400 dark:text-emerald-600 mb-3">
              {isEnglish ? "Video Editing" : "Edição de Vídeo"}
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400 dark:text-zinc-600">
              {isEnglish
                ? "Editing promotional videos and short-form content for digital platforms."
                : "Edição de vídeos promocionais e conteúdos curtos para plataformas digitais."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 hover:border-emerald-500/60 transition-colors">
            <h3 className="text-lg font-bold text-emerald-400 dark:text-emerald-600 mb-3">
              UI/UX Design
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400 dark:text-zinc-600">
              {isEnglish
                ? "Interface design studies focused on usability, visual organization and user experience."
                : "Estudos de design de interfaces com foco em usabilidade, organização visual e experiência do usuário."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 hover:border-emerald-500/60 transition-colors">
            <h3 className="text-lg font-bold text-emerald-400 dark:text-emerald-600 mb-3">
              {isEnglish ? "Web Development" : "Desenvolvimento Web"}
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400 dark:text-zinc-600">
              {isEnglish
                ? "Building responsive websites and digital interfaces with attention to functionality and design."
                : "Criação de sites responsivos e interfaces digitais, com atenção à funcionalidade e ao design."}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};