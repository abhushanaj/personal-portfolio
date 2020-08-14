import React from "react";
import { withRouter } from "react-router-dom";

import "./button.styles.scss";

export const PrimaryButton = ({ children, url }) => {
  return (
    <a className="btn btn--primary" href={url}>
      {children}
    </a>
  );
};

export const SecondaryTagButton = ({ children, url }) => {
  return (
    <a className="btn btn--secondary" href={url}>
      {children}
    </a>
  );
};

const SecondaryButton = ({ children, routeTo, history }) => {
  return (
    <button
      className="btn btn--secondary"
      onClick={() => history.push(routeTo)}
    >
      {children}
    </button>
  );
};

export default withRouter(SecondaryButton);
