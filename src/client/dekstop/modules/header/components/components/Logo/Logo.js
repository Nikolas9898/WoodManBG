import React from "react";
import { Link } from "react-router-dom";
import LogoStyle from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div>
      <div className={LogoStyle.logoHolder}>
        <Link to={"/"} className={LogoStyle.logoHolder}>
          WoodMan.bg
        </Link>
      </div>
    </div>
  );
};

export default Logo;
