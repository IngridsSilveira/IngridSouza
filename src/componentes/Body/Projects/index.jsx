import "./styles.scss";
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";

const items = [
  {
    src: "/images/projetos/calculoRescisao.png",
    hrefGithub: "https://github.com/IngridsSilveira/CalculoRescisao",
    hrefDemo: "https://ingridssilveira.github.io/CalculoRescisao/",
    altText: "Calculadora de rescisão",
    key: 1,
  },
  {
    src: "/images/projetos/star.webp",
    hrefGithub: "https://github.com/IngridsSilveira/starWars-Planets",
    hrefDemo: "https://ingridssilveira.github.io/starWars-Planets/",
    altText: "Consuming API about Star Wars Planets",
    key: 2,
  },
  {
    src: "/images/projetos/alura.webp",
    hrefGithub: "https://github.com/IngridsSilveira/AluraGeek",
    hrefDemo: "https://ingridssilveira.github.io/AluraGeek/",
    altText: "E-commerce Alura Geek",
    key: 3,
  },
  {
    src: "/images/projetos/blog.webp",
    hrefGithub: "https://github.com/IngridsSilveira/blog",
    hrefDemo: "https://ingridssilveira.github.io/blog/",
    altText: "Blog about doramas",
    key: 4,
  },
  {
    src: "/images/projetos/animes.webp",
    hrefGithub: "https://github.com/IngridsSilveira/Lista_Animes",
    hrefDemo: "https://ingridssilveira.github.io/Lista_Animes/",
    altText: "CRUD with animes list",
    key: 5,
  },
  {
    src: "/images/projetos/login.webp",
    hrefGithub: "https://github.com/IngridsSilveira/loginSite",
    hrefDemo: "https://ingridssilveira.github.io/loginSite/",
    altText: "Login page with validation",
    key: 6,
  },
  {
    src: "/images/projetos/pet.webp",
    hrefGithub: "https://github.com/IngridsSilveira/petInfo",
    hrefDemo: "https://ingridssilveira.github.io/petInfo/",
    altText: "Landing Page with information about pets",
    key: 7,
  },
];

export default function Projects(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className="carousel-div">
          <div className="img_effect">
            <span>
              <img src={item.src} alt={item.altText} className="img-carousel" />
              <span className="desc">
                <strong>{item.altText}</strong>
              </span>
            </span>
          </div>

          <div className="botoes">
            <a
              className="btn btn-success"
              href={item.hrefGithub}
              aria-label="view repository"
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
            <a
              className="btn btn-success"
              href={item.hrefDemo}
              aria-label="view demo"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <section className="projects container hidden" id="Projects">
      <div className="widget_title hidden">
        <h3 className="projects_title">Projects</h3>
        <div className="widget_title_bar"></div>
      </div>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        className="hidden"
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </section>
  );
}
