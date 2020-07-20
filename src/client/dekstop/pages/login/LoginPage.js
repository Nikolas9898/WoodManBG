import React from "react";
import LoginContainer from "../../modules/login/LoginContainer";
import LayoutWOL from "../../layout/layoutWOL";

const LoginPage = (props) => {
  return (
    <div>
      <LayoutWOL>
        <LoginContainer />
      </LayoutWOL>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
