import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./header/HeaderContainer";
import SideBarContainer from "./sidebar/SideBarContainer";

const Layout = (props) => {
  return (
    <div>
      <HeaderContainer />
      <SideBarContainer />
      {props.children}
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
