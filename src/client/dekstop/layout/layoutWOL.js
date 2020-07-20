import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./header/HeaderContainer";

const Layout = (props) => {
  return (
    <div>
      <HeaderContainer />
      {props.children}
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
