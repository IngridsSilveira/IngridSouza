const btnToggleColor = () => {
  let icon = document.querySelector(".bi-brightness-high");
  let bg_div = document.querySelector(".bg-div");
  let background = document.querySelector(".background");
  let titles = [...document.querySelectorAll("h3")];
  let paragraphs = [...document.querySelectorAll("p")];
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
  bi_github.classList.toggle("bi-github-black");
};

const texts = {
  en: {
      profission: "Web Developer",
      aboutMe: "I'm a 22-year-old web developer from Brasil, involved in web development since 2021.",
      info: "For more information contact me!!",
      wantContact: "Want to contact me?",
      preenchaContact: "Fill out the form and I will contact you as soon as possible.",
      btn_cv: "https://drive.google.com/file/d/1mUBqfvxftXu7Tvl4ElfgZVnRj0WmjNhe/view?usp=share_link"
  },
  pt: {
      profission: "Desenvolvedora Front-End",
      aboutMe: "Eu tenho 22 anos, sou uma desenvolvedora front-end.<br/> Me envolvi com o desenvolvimento web desde 2021.",
      info: "Para mais informações entre em contato!!",
      wantContact: "Quer entrar em contato comigo?",
      preenchaContact: "Preencha o formulário e entrarei em contato o mais rápido possível.",
      btn_cv: "https://drive.google.com/file/d/1SO9LrWxJwX7IyjkQrkuS8xjXsidyb4MM/view?usp=share_link"
  }
}

const updateLanguage=(lang)=> {
  document.getElementById("profission").innerHTML = texts[lang].profission;
  document.getElementById("aboutMe").innerHTML = texts[lang].aboutMe;
  document.getElementById("info").innerHTML = texts[lang].info;
  document.getElementById("wantContact").innerHTML = texts[lang].wantContact;
  document.getElementById("preenchaContact").innerHTML = texts[lang].preenchaContact;
  document.querySelector(".btn_cv").href = texts[lang].btn_cv;
}

export { btnToggleColor, updateLanguage};