import React from "react";
import HeaderStyle from "../../Header.module.css";
import { Link } from "react-router-dom";

const HeaderLink = ({ text, path }) => {
  return (
    <div className={HeaderStyle.linkContainer}>
      <div className={HeaderStyle.linkHolder}>
        <Link to={path} className={HeaderStyle.link}>
          {text}
        </Link>
      </div>
    </div>
  );
};

export default HeaderLink;
