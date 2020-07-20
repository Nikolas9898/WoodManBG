import React from "react";
import PropTypes from "prop-types";
import RegisterContainer from "../../modules/register/RegisterContainer";
import LayoutWOL from "../../layout/layoutWOL";

const RegisterPage = (props) => {
  return (
    <div>
      <LayoutWOL>
        <RegisterContainer />
      </LayoutWOL>
    </div>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
