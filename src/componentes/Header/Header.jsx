import { useState } from "react";
import { MdClose } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { FaLanguage } from "react-icons/fa6";

import { ThemeMode } from "./ThemeMode/ThemeMode";
import { useLanguage } from "./LanguageContext/LanguageProvider";

const menuItems = ["Home", "Projects", "Contact"];

export const Header = () => {
  const [selectedMenu, setSelectMenu] = useState(menuItems[0]);
  const { toggleLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white h-16 w-full flex items-center justify-between p-3 font-poppins">
      {/* Menu de Navegação */}
      {isOpen && (
        <div className="absolute top-14 left-0 bg-black w-full text-white rounded-md shadow-md z-10 md:hidden">
          <nav className="flex flex-col">
            {menuItems.map((menuItem) => (
              <button
                key={menuItem}
                className={`${
                  selectedMenu === menuItem
                    ? "bg-primary-color text-white shadow-lg transition duration-300 px-4 py-2 rounded"
                    : "bg-transparent text-white transition duration-300 px-4 py-2 rounded"
                }`}
                onClick={() => {
                  setSelectMenu(menuItem);
                  // Scroll to the corresponding section
                  document.getElementById(menuItem)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {menuItem}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Menu visível em telas maiores */}
      <nav className="hidden md:flex md:items-center md:justify-center md:gap-2">
        {menuItems.map((menuItem) => (
          <div key={menuItem} className="font-poppins">
            <button
              className={`${
                selectedMenu === menuItem
                  ? "bg-white text-black shadow-lg transition duration-300 px-2 py-2 rounded"
                  : "bg-transparent text-white transition duration-300 px-2 py-2 rounded"
              }`}
              onClick={() => {
                setSelectMenu(menuItem);
                // Scroll to the corresponding section
                document.getElementById(menuItem)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {menuItem}
            </button>
          </div>
        ))}
      </nav>


      {/* botão mudar cor e idioma */}
      <div className="flex gap-3">
        <ThemeMode />
        <button
          id="btn-en"
          className="text-white"
          aria-label="button mudar linguagem"
          onClick={toggleLanguage}
        >
          <FaLanguage size={30} />
        </button>
      </div>
      {/* Ícone de Menu */}
      <button
        className="md:hidden flex items-center"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <MdClose size={30} />
        ) : (
          <TbMenuDeep size={35} className="text-white" />
        )}
      </button>

    </header>
  );
};
