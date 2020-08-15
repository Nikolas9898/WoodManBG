import React from "react";
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


export default RegisterPage;
