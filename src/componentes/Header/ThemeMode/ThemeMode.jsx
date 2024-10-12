import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

export const ThemeMode = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("header")?.classList.add("dark");
    } else {
      document.querySelector("header")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button className="flex gap-1 items-center justify-center"
    onClick={changeTheme}
    aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      {theme === "light" && <MdOutlineLightMode size={30} className="text-white"/>}
      {theme === "dark" && <MdDarkMode size={30} className="text-white"/>}
    </button>
  );
};
