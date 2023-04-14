// eslint-disable-next-line no-unused-vars
/*FUNÇÃO PARA SUBIR AO TOPO*/
function topWindow() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function btnScroll() {
  if (window.scrollY === 0) {
    document.querySelector(".top").style.display = "none";
  } else {
    document.querySelector(".top").style.display = "block";
  }
}
window.addEventListener("scroll", btnScroll);

/* FUNÇÃO PARA RODAR O PRELOADER */
const windowLoading = () => {
  let loader = document.getElementById("preloader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
};
setTimeout(windowLoading, 3000);

export { topWindow, windowLoading };