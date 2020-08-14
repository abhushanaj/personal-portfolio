import React from "react";

import "./taglists.styles.scss";

const TagLists = ({ tagLists }) => {
  return (
    <ul className="tag__lists">
      {tagLists.map((tag, index) => {
        return (
          <li className="tag" key={index}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default TagLists;
