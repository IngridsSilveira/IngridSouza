import { Contact } from "../index";
import { useLanguage } from "../Header/LanguageContext/LanguageProvider"; // Ajuste o caminho se necessário

export const Footer = () => {
  const { language, texts } = useLanguage();
  const currentTexts = texts?.[language] || {};

  return (
    <footer
      data-aos="fade-down"
      className="w-full bg-zinc-950 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 py-12 px-4 md:px-8 flex flex-col items-center border-t border-zinc-800 dark:border-zinc-300 transition-colors"
    >
      {/* Seção do Formulário de Contato */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <Contact />
      </div>

      {/* Linha Divisória */}
      <div className="w-full max-w-6xl border-t border-zinc-800/80 dark:border-zinc-300/80 my-6" />

      {/* Seção Desenvolvedor */}
      <div className="text-center flex flex-col items-center gap-2">
        <div className="font-poppins text-base md:text-lg flex items-center justify-center gap-2 font-medium">
          <span>{currentTexts.footerDevelopedBy}</span>
          <a
            className="inline-flex items-center gap-2 hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors group"
            href="https://www.linkedin.com/in/ingridssilveira/"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil do LinkedIn de Ingrid Silveira"
          >
            <span className="font-semibold decoration-emerald-500">
              Ingrid Souza
            </span>
          </a>
        </div>

        <p className="font-poppins text-xs md:text-sm text-zinc-400 dark:text-zinc-600 transition-colors">
          {currentTexts.footerCTA}
        </p>
      </div>

      {/* Direitos Reservados */}
      <div className="mt-6 text-xs text-zinc-500 dark:text-zinc-600 font-mono text-center transition-colors">
        © {new Date().getFullYear()} {currentTexts.footerRights}
      </div>
    </footer>
  );
};