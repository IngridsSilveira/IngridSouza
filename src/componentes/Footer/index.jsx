import "./styles.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer containter-fluid bg-black hidden">
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
      </footer>
    </>
  );
}
