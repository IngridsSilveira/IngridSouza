import "./styles.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer containter-fluid bg-dark hidden">
        <div className="footer_copy">
          <p>
            Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="ttps://github.com/IngridsSilveira"
            >
              Ingrid Souza 🔥
            </a>
          </p>
        </div>
        <div className="footer_area">
          <a
            className="icons_first me-2"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ingridssilveira/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="icons_first me-2"
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/dev_ingrid/"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="icons_first me-2"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/IngridsSilveira"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            className="icons_first"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=552179661084"
            target="_blank"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
