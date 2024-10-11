import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para detectar a rolagem da página
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Monitorar o scroll da página
    window.addEventListener("scroll", toggleVisibility);

    // Limpar o event listener ao desmontar o componente
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-slate-200 dark:bg-dark-bg p-3 rounded-full shadow-lg text-black dark:text-white hover:bg-gray-200 transition duration-300"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="w-5 h-5 dark:text-white" />
        </button>
      )}
    </div>
  );
};

