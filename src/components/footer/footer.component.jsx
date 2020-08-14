import React from "react";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer u-container">
        <p className="footer__line">
          Made with{" "}
          <span role="img" aria-label="Heart Emoji">
            ❤️
          </span>{" "}
          by <span className="name">Abhushan A. Joshi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
