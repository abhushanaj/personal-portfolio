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
          src="https://avatars2.githubusercontent.com/u/49617450?s=460&u=1cd8bdacdd13324f4220a9d6c3ea542526efc388&v=4"
          alt="Abhushan Adhikari Joshi"
        />
      </div>
      <div className="aboutme__details">
        <p className="connect-me"> Let's Connect </p>

        <ul className="reach-out">
          <li>abhushanadhikarijoshi@gmail.com</li>
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
