import React from "react";
import HeaderStyle from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import HeaderLink from "./components/HeaderLink/HeaderLink";

const Header = (props) => {
  return (
    <div className={HeaderStyle.Header}>
      <Logo />
      <Search />
      <HeaderLink text={"Login"} path={"/login"} />
      <HeaderLink text={"Register"} path={"/register"} />
    </div>
  );
};

export default Header;
