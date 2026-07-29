import { useState } from "react";
import { MdClose } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { FaLanguage } from "react-icons/fa6";

import { ThemeMode } from "./ThemeMode/ThemeMode";
import { useLanguage } from "./LanguageContext/LanguageProvider";

const menuItems = ["Home", "Projects", "Contact"];

export const Header = () => {
  const [selectedMenu, setSelectMenu] = useState(menuItems[0]);
  const { language, toggleLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Função centralizada para navegar e fechar o menu mobile
  const handleNavigation = (menuItem) => {
    setSelectMenu(menuItem);
    setIsOpen(false); // Fecha o menu mobile automaticamente ao clicar

    document.getElementById(menuItem)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/95 dark:bg-zinc-100/95 backdrop-blur-md text-zinc-100 dark:text-zinc-900 h-16 w-full flex items-center justify-between px-6 font-poppins border-b border-zinc-800/80 dark:border-zinc-300/80 shadow-md transition-colors">
      {/* Logo */}
      <div 
        className="flex items-center cursor-pointer group"
        onClick={() => handleNavigation("Home")}
      >
        <img 
          src="https://i.imgur.com/Im0x624.png" 
          alt="Logo IS" 
          className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Menu visível em telas maiores (Desktop) */}
      <nav
        className="hidden md:flex md:items-center md:justify-center md:gap-3"
        aria-label="Menu Principal"
      >
        {menuItems.map((menuItem) => (
          <button
            key={menuItem}
            role="menuitem"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedMenu === menuItem
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/30 font-semibold"
                : "text-zinc-300 dark:text-zinc-700 hover:text-white dark:hover:text-zinc-950 hover:bg-zinc-800/60 dark:hover:bg-zinc-200"
            }`}
            onClick={() => handleNavigation(menuItem)}
          >
            {menuItem}
          </button>
        ))}
      </nav>

      {/* Botões de Ação (Tema + Idioma + Menu Mobile) */}
      <div className="flex items-center gap-4">
        <ThemeMode />

        {/* Botão Mudar Idioma com Indicador (PT / EN) */}
        <button
          id="btn-en"
          className="flex items-center gap-1 text-zinc-300 dark:text-zinc-700 hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors p-1 rounded-lg"
          aria-label="Mudar linguagem"
          onClick={toggleLanguage}
          title="Alternar idioma / Switch language"
        >
          <FaLanguage size={28} />
          <span className="text-xs font-mono font-bold uppercase bg-zinc-900 dark:bg-zinc-200 px-1.5 py-0.5 rounded border border-zinc-800 dark:border-zinc-300 text-emerald-400 dark:text-emerald-600">
            {language}
          </span>
        </button>

        {/* Ícone de Menu Mobile */}
        <button
          className="md:hidden flex items-center text-zinc-200 dark:text-zinc-800 hover:text-white transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="menu"
        >
          {isOpen ? (
            <MdClose size={28} />
          ) : (
            <TbMenuDeep size={32} />
          )}
        </button>
      </div>

      {/* Menu Modal / Dropdown Mobile */}
      {isOpen && (
        <div
          className="absolute top-16 left-0 bg-zinc-950/95 dark:bg-zinc-100/95 backdrop-blur-md w-full text-zinc-100 dark:text-zinc-900 border-b border-zinc-800 dark:border-zinc-300 shadow-2xl z-50 md:hidden animate-fadeIn"
          role="menu"
        >
          <nav className="flex flex-col p-4 gap-2">
            {menuItems.map((menuItem) => (
              <button
                key={menuItem}
                role="menuitem"
                className={`w-full text-left px-4 py-3 rounded-xl text-base transition-all duration-200 ${
                  selectedMenu === menuItem
                    ? "bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-950/20"
                    : "text-zinc-300 dark:text-zinc-700 hover:bg-zinc-900 dark:hover:bg-zinc-200 hover:text-white dark:hover:text-zinc-950"
                }`}
                onClick={() => handleNavigation(menuItem)}
              >
                {menuItem}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};