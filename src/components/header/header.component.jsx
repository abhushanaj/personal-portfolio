import React from "react";

import * as SocialLink from "../../components/social-links/social-links.component";

import coolReactGuy from "../../assets/person.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header u-container">
      <div className="header__content">
        <h1 className="main-heading">
          Hi!
          <span>I'm Abhushan.</span>
        </h1>
        <p className="tagline">
          Frontend Developer with a focus on building fast, robust and optimized
          User Experiences. I believe in developing Interfaces which bring a
          smile.
        </p>
      </div>

      <div className="header__image">
        <img src={coolReactGuy} alt="Illustration of guy wearing react swag" />
      </div>

      <div className="header__social-links">
        <SocialLink.Github />
        <SocialLink.LinkedIn />
        <SocialLink.Twitter />
      </div>
    </header>
  );
};

export default Header;
