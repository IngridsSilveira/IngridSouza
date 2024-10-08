//FUNÇÃO PARA LOADING
export default function Loading() {
  const observar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("show");
      } else {
        entrada.target.classList.remove("show");
      }
    }); 
  });
  const esconderElementos = document.querySelectorAll(".hidden");
  esconderElementos.forEach((elemento) => observar.observe(elemento));
}
setTimeout(Loading, 1000)