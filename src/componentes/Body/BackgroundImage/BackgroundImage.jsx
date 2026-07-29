import { FaLinkedin, FaGithub, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { useLanguage } from "../../index";

export const BackgroundImage = () => {
  const { language, texts } = useLanguage();
  const currentTexts = texts?.[language] || {};

  return (
    <section
      id="Home"
      data-aos="fade-up"
      className="w-full bg-zinc-950 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-900 py-12 px-4 md:px-8 transition-colors"
      aria-labelledby="home-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        
        {/* Cabeçalho do Topo: Nome, Profissão e Ícones */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-800/80 dark:border-zinc-400/80">
          
          {/* Nome e Profissão */}
          <div className="text-center md:text-left">
            <h1
              id="home-heading"
              className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-zinc-100 dark:text-zinc-900 font-mono transition-colors"
            >
              Ingrid S. Silveira
            </h1>
            <h2
              id="profission"
              className="text-base md:text-lg text-emerald-400 dark:text-emerald-700 font-semibold font-mono transition-colors"
            >
              {currentTexts.profission || "Criadora Digital"}
            </h2>
          </div>

          {/* Ícones de Redes Sociais */}
          <div className="flex items-center gap-3 bg-zinc-900/90 dark:bg-zinc-100 p-3 rounded-2xl border border-zinc-800 dark:border-zinc-300 shadow-sm transition-colors">
            <a
              href="https://www.linkedin.com/in/ingridssilveira/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 dark:text-zinc-600 hover:text-sky-400 dark:hover:text-sky-600 transition-all hover:-translate-y-1"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://github.com/IngridsSilveira/"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-100 dark:hover:text-zinc-950 transition-all hover:-translate-y-1"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5521979661084"
              aria-label="Whatsapp"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 dark:text-zinc-600 hover:text-emerald-400 dark:hover:text-emerald-600 transition-all hover:-translate-y-1"
            >
              <FaWhatsapp size={26} />
            </a>
            <a
              href="https://www.youtube.com/@tsuki_editssD"
              aria-label="Youtube"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 dark:text-zinc-600 hover:text-red-500 dark:hover:text-red-600 transition-all hover:-translate-y-1"
            >
              <FaYoutube size={26} />
            </a>
            <a
              href="https://www.tiktok.com/@tsukidx"
              aria-label="TikTok"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 dark:text-zinc-600 hover:text-pink-400 dark:hover:text-pink-600 transition-all hover:-translate-y-1"
            >
              <AiFillTikTok size={26} />
            </a>
          </div>
        </div>

        {/* Símbolo Dev Vetorial com Brilho Sutil */}
        <div className="flex justify-center pt-2">
          <div className="p-4 rounded-2xl bg-zinc-900/90 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 shadow-xl shadow-emerald-500/10 transition-colors">
            <svg 
              className="w-16 h-16 md:w-20 md:h-20 text-emerald-400 dark:text-emerald-600 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.8} 
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};