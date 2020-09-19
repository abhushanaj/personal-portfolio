import React from "react";

import "./button.styles.scss";

export const PrimaryButton = ({ children, url }) => {
  return (
    <a
      className="btn btn--primary"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const SubmitButton = ({ children, ...otherProps }) => {
  return (
    <button className="btn btn--submit" {...otherProps} type="submit">
      {children}
    </button>
  );
};

export const SecondaryTagButton = ({ children, url }) => {
  return (
    <a
      className="btn btn--secondary"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
