// eslint-disable-next-line no-unused-vars
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