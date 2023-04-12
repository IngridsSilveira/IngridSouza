import "./styles.scss";

export default function Projects() {
  return (
    <>
      <section className="projects container" id="Projects">
        <div className="widget_title hidden">
          <h2 className="projects_title">Projects</h2>
          <div className="widget_title_bar"></div>
        </div>

        <div id="banner" className="carousel slide" data-bs-ride="carousel">
          <div id="indicadores" className="carousel-indicators hidden">
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="3"
            ></button>
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="4"
            ></button>
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="5"
            ></button>
            <button
              type="button"
              data-bs-target="#banner"
              data-bs-slide-to="6"
            ></button>
          </div>

          <div className="carousel-inner hidden">
            <div className="carousel-item active">
              <div className="carousel-div">
                <div className="img_effect">
                  <span href="#">
                    <img
                      src="/images/projetos/pagInicial.png"
                      className="img-carousel img-blog"
                      alt="blog"
                    />
                    <span className="desc">
                      <strong>Blog about K-Dramas.</strong>
                    </span>
                  </span>
                </div>

                <div className="botoes">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IngridsSilveira/blog"
                  >
                    Repositório
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ingridssilveira.github.io/blog/"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-div">
                <div className="img_effect">
                  <span href="#">
                    <img
                      src="/images/projetos/desktop.png"
                      className="img-carousel"
                      alt="alura geek"
                    />
                    <span className="desc">
                      <strong>Consuming Star Wars API.</strong>
                    </span>
                  </span>
                </div>

                <div className="botoes">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IngridsSilveira/starWars-Planets"
                  >
                    Repositório
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ingridssilveira.github.io/starWars-Planets/"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-div">
                <div className="img_effect">
                  <span href="#">
                    <img
                      src="/images/projetos/Alura-Geek-Home.png"
                      className="img-carousel"
                      alt="alura geek"
                    />
                    <span className="desc">
                      <strong>E-commerce about Alura Geek.</strong>
                    </span>
                  </span>
                </div>

                <div className="botoes">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IngridsSilveira/AluraGeek"
                  >
                    Repositório
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ingridssilveira.github.io/AluraGeek/"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-div">
                <div className="img_effect">
                  <span href="#">
                    <img
                      src="/images/projetos/Landing-Page1.png"
                      className="img-carousel"
                      alt="landing page"
                    />
                    <span className="desc">
                      <strong>Landing Page that captures e-mail.</strong>
                    </span>
                  </span>
                </div>

                <div className="botoes">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IngridsSilveira/LandingPage01"
                  >
                    Repositório
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ingridssilveira.github.io/LandingPage01/"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-div">
                <div className="img_effect">
                  <span href="#">
                    <img
                      src="/images/projetos/Lista-de-animes.png"
                      className="img-carousel"
                      alt="lista animes"
                    />
                    <span className="desc">
                      <strong>CRUD with animes list.</strong>
                    </span>
                  </span>
                </div>

                <div className="botoes">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IngridsSilveira/Lista_Animes"
                  >
                    Repositório
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ingridssilveira.github.io/Lista_Animes/"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-div">
                <div className="img_effect">
                  <span href="#">
                    <img
                      src="/images/projetos/Login.png"
                      className="img-carousel"
                      alt="login-site"
                    />
                    <span className="desc">
                      <strong>Login page with validation.</strong>
                    </span>
                  </span>
                </div>

                <div className="botoes">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IngridsSilveira/loginSite"
                  >
                    Repositório
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ingridssilveira.github.io/loginSite"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-div">
                <div className="img_effect">
                  <span href="#">
                    <img
                      src="/images/projetos/Pet-Info.png"
                      className="img-carousel"
                      alt="petinfo"
                    />
                    <span className="desc">
                      <strong>Landing Page with information about pets.</strong>
                    </span>
                  </span>
                </div>

                <div className="botoes">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/IngridsSilveira/petInfo"
                  >
                    Repositório
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ingridssilveira.github.io/petInfo/"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
