import "./styles.scss";
import { windowLoading, topWindow } from './js/main.js'

export default function Preloader() {
  return (
    <>
      <div id="preloader" onLoad={windowLoading}>
        <p className="c-loader red"></p>
        <p className="c-loader green"></p>
        <p className="c-loader orange"></p>
        <p className="c-loader blue"></p>
        <p className="c-loader pink"></p>
      </div>
    <div className="top" onClick={topWindow}><i className="bi bi-arrow-up-circle-fill"></i></div>

    </>
  );
}
