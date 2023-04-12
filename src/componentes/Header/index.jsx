import "./styles.scss";
import { useState } from "react";

const menuItems = ["Home", "Projects", "Contact"];

export default function Header() {
  const [selectedMenu, setSelectMenu] = useState(menuItems[-0]);
  return (
    <header className="container-fluid bg-dark header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="d-flex align-items-center justify-content-between w-75">
          <a href="https://ingridssilveira.github.io/IngridSouza/">
            <img src="images/favicon.ico" alt="logo" />
          </a>

          <button className="btn-brightness rounded-circle">
            <i className="btn-mode bi bi-brightness-high"></i>
          </button>

          <div>
            <button id="btn-en" className="btn-translate bi bi-translate">
              EN
            </button>
            <button id="btn-pt" className="btn-translate bi bi-translate">
              PT
            </button>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            {menuItems.map((menuItem) => (
              <a href={`#${menuItem}`} className="menu-link"
              key={menuItem}>
                <li
                  className={
                    selectedMenu === menuItem ? "nav-item menu-item active" : ""
                  }
                  onClick={() => setSelectMenu(menuItem)}
                >
                  {menuItem}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}