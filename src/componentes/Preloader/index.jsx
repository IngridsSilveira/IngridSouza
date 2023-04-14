import "./styles.scss";
import { windowLoading, topWindow } from './js/main.js'

export default function Preloader() {
  return (
    <>
      <div id="preloader" onLoad={windowLoading}>
        <h1>Loading</h1>
        <p className="c-loader"></p>
        <p className="c-loader"></p>
        <p className="c-loader"></p>
        <p className="c-loader"></p>
        <p className="c-loader"></p>
      </div>
    <div className="top" onClick={topWindow}><i className="bi bi-arrow-up-circle-fill"></i></div>

    </>
  );
}
