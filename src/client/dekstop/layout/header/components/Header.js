import React from "react";
import Logo from "./components/Logo/Logo";
import HeaderStyle from "./Header.module.css";
import Search from "./components/Search/Search";
import HeaderLink from "./components/HeaderLink/HeaderLink";
import UserProfile from "./components/UserProfile/UserProfile";

const Header = (props) => {
  return (
    <div className={HeaderStyle.Header}>
      <Logo />
      <Search />
      <HeaderLink text={"Login"} path={"/login"} />
      <HeaderLink text={"Register"} path={"/register"} />
      <HeaderLink text={"fege"} path={"/register"} />
      <UserProfile />
    </div>
  );
};

export default Header;
