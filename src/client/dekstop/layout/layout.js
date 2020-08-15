import React from "react";
import HeaderContainer from "./header/HeaderContainer";
import SideBarContainer from "./sidebar/SideBarContainer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <SideBarContainer />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
