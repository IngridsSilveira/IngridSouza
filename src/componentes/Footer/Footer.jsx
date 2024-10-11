import { Contact } from "../index";

export const Footer = () => {
  return (
    <>
      <footer className="dark:bg-slate-100 text-white  py-8 flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:px-16">
          {/* Seção do Formulário */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Contact />
          </div>
          {/* Seção Desenvolvedor */}
          <div className="text-center">
            <h4 className="font-poppins text-lg flex gap-2 items-center justify-center dark:text-black">
              Developed by{" "}
              <a
                className="hover:scale-105 transition-all duration-300"
                href="https://www.linkedin.com/in/ingridssilveira/"
              >
                <img className="w-8 h-8" src="images/favicon.ico" alt="logo" />
              </a>
            </h4>
          </div>
        </div>
        {/* Texto Final */}
        <div className="mt-4 text-sm text-gray-400 dark:text-gray-800 text-center">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
};
