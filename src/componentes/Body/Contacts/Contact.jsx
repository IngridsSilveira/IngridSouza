import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../Header/LanguageContext/LanguageProvider"; // Ajuste o caminho se necessário
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaSpinner } from "react-icons/fa";

export const Contact = () => {
  const { language, texts } = useLanguage();
  const currentTexts = texts?.[language] || texts?.pt || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estados de carregamento e feedback
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    // Pega as chaves salvas no seu arquivo .env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Dados enviados para o template do EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatusMessage({
          type: "success",
          text: language === "pt" ? "Mensagem enviada com sucesso!" : "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erro no EmailJS:", error);
        setStatusMessage({
          type: "error",
          text: language === "pt" ? "Ocorreu um erro ao enviar. Tente novamente." : "An error occurred. Please try again.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="Contact" className="w-full">
      {/* Cabeçalho do Contato */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-zinc-100 dark:text-zinc-900 transition-colors">
          {currentTexts.contactTitle || "Entre em Contato"}
        </h2>
        <p className="text-zinc-400 dark:text-zinc-600 text-base md:text-lg max-w-2xl mx-auto transition-colors">
          {currentTexts.contactSubtitle ||
            "Tem um projeto em mente ou quer transformar a presença digital da sua empresa? Vamos conversar!"}
        </p>
      </div>

      {/* Grid de 2 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
        
        {/* Lado Esquerdo: Canais de Atendimento */}
        <div className="w-full flex flex-col justify-between bg-zinc-900/90 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 p-6 md:p-8 rounded-2xl shadow-xl transition-colors">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-emerald-400 dark:text-emerald-600 transition-colors">
              {language === "pt" ? "Canais de Atendimento" : "Direct Channels"}
            </h3>

            <div className="flex flex-col gap-4 mb-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5521979661084"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center gap-4 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 p-4 rounded-xl transition-all font-medium group shadow-md"
              >
                <FaWhatsapp className="text-2xl shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base">{currentTexts.whatsappBtn || "Conversar no WhatsApp"}</span>
              </a>

              {/* Email Direto */}
              <a
                href="mailto:ingridsouzaok@gmail.com"
                className="w-full flex items-center gap-4 bg-zinc-800/80 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-300 text-zinc-200 dark:text-zinc-800 border border-zinc-700 dark:border-zinc-300 p-4 rounded-xl transition-all font-medium group"
              >
                <FaEnvelope className="text-2xl shrink-0 group-hover:scale-110 transition-transform text-emerald-400 dark:text-emerald-600" />
                <span className="text-sm md:text-base">{currentTexts.emailDirectBtn || "Enviar E-mail"}</span>
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="pt-4 border-t border-zinc-800 dark:border-zinc-300/80">
            <p className="text-xs md:text-sm text-zinc-400 dark:text-zinc-600 mb-3 font-mono transition-colors">
              {language === "pt" ? "Redes profissionais:" : "Social profiles:"}
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/IngridsSilveira"
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-800 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-800 hover:text-emerald-400 dark:hover:text-emerald-600 p-3 rounded-xl border border-zinc-700 dark:border-zinc-300 transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ingridssilveira/"
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-800 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-800 hover:text-emerald-400 dark:hover:text-emerald-600 p-3 rounded-xl border border-zinc-700 dark:border-zinc-300 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário com EmailJS */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-zinc-900/90 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-300 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col gap-4 transition-colors"
        >
          <div>
            <label className="block text-sm font-medium text-zinc-300 dark:text-zinc-700 mb-1.5 transition-colors">
              {currentTexts.nameLabel || "Seu Nome"}
            </label>
            <input
              type="text"
              name="name"
              required
              disabled={loading}
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingrid Silva"
              className="w-full bg-zinc-950 dark:bg-zinc-200/70 border border-zinc-800 dark:border-zinc-300 rounded-xl p-3 text-zinc-100 dark:text-zinc-900 focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 dark:text-zinc-700 mb-1.5 transition-colors">
              {currentTexts.emailLabel || "Seu E-mail"}
            </label>
            <input
              type="email"
              name="email"
              required
              disabled={loading}
              value={formData.email}
              onChange={handleChange}
              placeholder="cliente@empresa.com"
              className="w-full bg-zinc-950 dark:bg-zinc-200/70 border border-zinc-800 dark:border-zinc-300 rounded-xl p-3 text-zinc-100 dark:text-zinc-900 focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 dark:text-zinc-700 mb-1.5 transition-colors">
              {currentTexts.messageLabel || "Sua Mensagem"}
            </label>
            <textarea
              name="message"
              rows="4"
              required
              disabled={loading}
              value={formData.message}
              onChange={handleChange}
              placeholder={
                language === "pt"
                  ? "Descreva brevemente o projeto ou ideia..."
                  : "Briefly describe your project or idea..."
              }
              className="w-full bg-zinc-950 dark:bg-zinc-200/70 border border-zinc-800 dark:border-zinc-300 rounded-xl p-3 text-zinc-100 dark:text-zinc-900 focus:outline-none focus:border-emerald-500 transition-colors resize-none disabled:opacity-50"
            ></textarea>
          </div>

          {/* Mensagem de Feedback ao Enviar */}
          {statusMessage.text && (
            <p
              className={`text-sm font-medium p-3 rounded-lg text-center ${
                statusMessage.type === "success"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : "bg-red-500/10 text-red-400 border border-red-500/30"
              }`}
            >
              {statusMessage.text}
            </p>
          )}

          {/* Botão de Envio com Loading */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-950/30 flex items-center justify-center gap-2 active:scale-98 mt-2 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin text-lg" />
                <span>{language === "pt" ? "Enviando..." : "Sending..."}</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="text-sm" />
                <span>{currentTexts.sendMessageBtn || "Enviar Mensagem"}</span>
              </>
            )}
          </button>
        </form>

      </div>
    </section>
  );
};