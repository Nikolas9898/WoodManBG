import React from "react";
import Header from "./components/Header";
import HeaderContainerStyle from "./HeaderContainer.module.css";

const HeaderContainer = () => {
  return (
    <div className={HeaderContainerStyle.HeaderContainer}>
      <Header />
    </div>
  );
};

export default HeaderContainer;
