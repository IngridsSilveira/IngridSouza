import "./styles.scss";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import {btnToggleColor, updateLanguage} from './js/main.js'

const menuItems = ["Home", "Projects", "Contact"];

export default function Header() {
  const [selectedMenu, setSelectMenu] = useState(menuItems[-0]);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark header">
      <Navbar className="navbar-expand-lg justify-content-between" dark>
        <NavbarBrand href="https://ingridssilveira.github.io/IngridSouza/">
          <img src="images/favicon.ico" alt="logo" />
        </NavbarBrand>
        <NavbarBrand>
          <button className="btn-bg rounded-circle" onClick={btnToggleColor} aria-label="btn-mode">
            <i className="btn-mode bi bi-brightness-high"></i>
          </button>
        </NavbarBrand>
        <NavbarBrand>
          <button id="btn-en" className="btn-translate bi bi-translate" aria-label="btn-en" onClick={(en)=>{updateLanguage('en')}}>
            EN
          </button>
          <button id="btn-pt" className="btn-translate bi bi-translate" aria-label="btn-pt" onClick={()=>{updateLanguage("pt")}}>
            PT
          </button>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto " navbar>
            <NavItem className="menuItem">
              {menuItems.map((menuItem) => (
                <NavLink
                  href={`#${menuItem}`}
                  className="menu-link"
                  key={menuItem}
                >
                  <span
                    className={
                      selectedMenu === menuItem
                        ? "nav-item menu-item active"
                        : ""
                    }
                    onClick={() => setSelectMenu(menuItem)}
                  >
                    {menuItem}
                  </span>
                </NavLink>
              ))}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
