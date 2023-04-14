import "./styles.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer containter-fluid bg-dark hidden">
        <div className="footer_copy">
          <h4>
            Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ingriddev.netlify.app/"
              aria-label="portfilio page"
            >
              Ingrid Souza 🔥
            </a>
          </h4>
        </div>
        <div className="footer_area">
          <a
            className="icons_first me-2"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ingridssilveira/"
            aria-label="linkedin page"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="icons_first me-2"
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/dev_ingrid/"
            aria-label="instagram page"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="icons_first me-2"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/IngridsSilveira"
            aria-label="github page"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            className="icons_first"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=552179661084"
            target="_blank"
            aria-label="whatsapp page"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
