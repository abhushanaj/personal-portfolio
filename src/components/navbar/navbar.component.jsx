import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar u-container">
      <div className="logo-box">
        <Link to="/">
          <img src={logo} alt="Abhushan Portfolio Logo." />
        </Link>
      </div>
      <ul className="navbar__items">
        <li className="navbar__item">
          <a href="/#projects" className="navbar__link">
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <a href="#!" className="navbar__link">
            Experience
          </a>
        </li>
        <li className="navbar__item">
          <a href="/#contact" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
