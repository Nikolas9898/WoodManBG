import React from "react";
import PropTypes from "prop-types";
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

Layout.propTypes = {};

export default Layout;
