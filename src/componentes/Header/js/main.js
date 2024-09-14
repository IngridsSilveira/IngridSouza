//FUNÇÃO PARA MUDAR COR DA PÁGINA
const btnToggleColor = () => {
  let icon = document.querySelector(".bi-brightness-high");
  let bg_div = document.querySelector(".bg-div");
  let background = document.querySelector(".background");
  let titles = [...document.querySelectorAll("h3")];
  let paragraphs = [...document.querySelectorAll("p")];
  let label = [...document.querySelectorAll("label")];
  let bi_github = document.querySelector(".bi-github");

  icon.classList.toggle("bi-moon");
  bg_div.classList.toggle("bg-black");
  background.classList.toggle("bg-image-white");
  titles.forEach((el) => {
    el.classList.toggle("titulos-black");
  });
  paragraphs.forEach((el) => {
    el.classList.toggle("titulos-black");
  });
  label.forEach((el) => {
    el.classList.toggle("titulos-black")
  })
  bi_github.classList.toggle("bi-github-black");
};

//TEXTOS DO SITE
const texts = {
  en: {
      profission: "Web Developer",
      aboutMe: "Specialized in creating modern and responsive digital experiences, with a focus on performance and usability.",
      wantContact: "Want to contact me?",
      preenchaContact: "Fill out the form and I will contact you as soon as possible."
  },
  pt: {
      profission: "Desenvolvedora web",
      aboutMe: "Especializada em criar experiências digitais modernas e responsivas, com um foco em desempenho e usabilidade.",
      wantContact: "Quer entrar em contato comigo?",
      preenchaContact: "Preencha o formulário e entrarei em contato o mais rápido possível."
  }
}

//FUNÇÃO PARA ATUALIZAR A LINGUAGEM
const updateLanguage=(lang)=> {
  document.getElementById("profission").innerHTML = texts[lang].profission;
  document.getElementById("aboutMe").innerHTML = texts[lang].aboutMe;
  document.getElementById("wantContact").innerHTML = texts[lang].wantContact;
  document.getElementById("preenchaContact").innerHTML = texts[lang].preenchaContact;
}

export { btnToggleColor, updateLanguage};