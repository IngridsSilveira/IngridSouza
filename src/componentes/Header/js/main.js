const btnToggleColor = () => {
  let icon = document.querySelector(".bi-brightness-high");
  let bg_div = document.querySelector(".bg-div");
  let background = document.querySelector(".background");
  let titles = [...document.querySelectorAll("h3")];
  let paragraphs = [...document.querySelectorAll("p")];

  icon.classList.toggle("bi-moon");
  bg_div.classList.toggle("bg-black");
  background.classList.toggle("bg-image-white");
  titles.forEach((el) => {
    el.classList.toggle("titulos-black");
  });
  paragraphs.forEach((el) => {
    el.classList.toggle("titulos-black");
  });
};
export { btnToggleColor };
