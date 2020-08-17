import React from "react";

import {
  linkedInURL,
  githubURL,
  twitterURL,
} from "../../components/social-links/social-link.constants";

import "./about-me-card.styles.scss";

const AboutMeCard = () => {
  return (
    <div className="aboutme">
      <img
        src="https://user-images.githubusercontent.com/49617450/90225466-0fe95300-de2f-11ea-911a-1eb11f612b53.png"
        alt="Pin"
        className="pin"
      />
      <div className="aboutme__image">
        <img
          src="https://user-images.githubusercontent.com/49617450/90396713-53a0be80-e0b4-11ea-9173-d49c096a2cda.jpeg"
          alt="Abhushan Adhikari Joshi"
        />
      </div>
      <div className="aboutme__details">
        <p className="connect-me"> Let's Connect </p>

        <ul className="reach-out">
          <li>
            <a href="mailto: abhushanadhikarijoshi@gmail.com">Gmail</a>
          </li>
          <li>
            <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href={twitterURL} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeCard;
