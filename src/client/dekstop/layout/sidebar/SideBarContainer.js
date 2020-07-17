import React from "react";
import SideBarStyle from "./SideBarContainer.module.css";

const SideBarContainer = (props) => {
  return (
    <div className={SideBarStyle.SideBarContainerHolder}>
      <div className={SideBarStyle.CategoryHolder}>Кухни</div>
      <div className={SideBarStyle.CategoryHolder}>Гардероби</div>
      <div className={SideBarStyle.CategoryHolder}>Спални</div>
      <div className={SideBarStyle.CategoryHolder}>Холова гарнитура</div>
      <div className={SideBarStyle.CategoryHolder}>Кухни</div>
    </div>
  );
};

export default SideBarContainer;
