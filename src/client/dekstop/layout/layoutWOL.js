import React from "react";
import HeaderContainer from "./header/HeaderContainer";

const Layout = (props) => {
  return (
    <div>
      <HeaderContainer />
      {props.children}
    </div>
  );
};


export default Layout;
