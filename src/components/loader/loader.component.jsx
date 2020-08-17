import React from "react";

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./loader.styles.scss";

const PageLoader = () => {
  return (
    <div className="loader__component">
      <Loader type="Oval" color="#f28482" height={80} width={80} />
    </div>
  );
};

export default PageLoader;
