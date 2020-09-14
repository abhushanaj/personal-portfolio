import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <nav className="navbar u-container">
        <div className="logo-box">
          <Link to="/">
            <img src={logo} alt="Abhushan Portfolio Logo." />
          </Link>
        </div>
        <ul className="navbar__items">
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/projects" className="navbar__link">
              Projects
            </Link>
          </li>

          {/* <li className="navbar__item">
          <Link to="/experience" className="navbar__link">
            Experience
          </Link>
        </li> */}
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
