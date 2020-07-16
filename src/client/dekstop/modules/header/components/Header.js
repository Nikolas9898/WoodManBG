import React from "react";
import Logo from "./components/Logo/Logo";
import HeaderStyle from "./Header.module.css";
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
