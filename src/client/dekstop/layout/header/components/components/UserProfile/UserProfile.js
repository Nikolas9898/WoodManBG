import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserProfileStyle from "./UserProfile.module.css";
const UserProfile = (props) => {
  return (
    <div className={UserProfileStyle.UserProfileHolder}>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

export default UserProfile;
