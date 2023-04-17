import { useEffect } from "react";
import "./styles.scss";
import { topWindow } from "./js/main.js";

export default function Preloader() {
  useEffect(() => {
    let loader = document.getElementById("preloader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1500);
  });

  return (
    <>
      <div id="preloader">
        <p className="c-loader red"></p>
        <p className="c-loader green"></p>
        <p className="c-loader orange"></p>
        <p className="c-loader blue"></p>
        <p className="c-loader pink"></p>
      </div>
      <div className="top" onClick={topWindow}>
        <i className="bi bi-arrow-up-circle-fill"></i>
      </div>
    </>
  );
}
