import React from "react";
import SideBarStyle from "./SideBarContainer.module.css";
import { Link } from "react-router-dom";

const SideBarContainer = (props) => {
  return (
    <div className={SideBarStyle.SideBarContainerHolder}>
      <div className={SideBarStyle.category_container}>
        <div className={SideBarStyle.CategoryHolder}>
          <Link className={SideBarStyle.linkHolder} to={"/kuhni"}>
            Кухни
          </Link>
        </div>
        <div className={SideBarStyle.CategoryHolder}>
          <Link className={SideBarStyle.linkHolder} to={"/garderobi"}>
            Гардероби
          </Link>
        </div>
        <div className={SideBarStyle.CategoryHolder}>
          <Link className={SideBarStyle.linkHolder} to={"/spalni"}>
            Спални
          </Link>
        </div>
        <div className={SideBarStyle.CategoryHolder}>
          <Link className={SideBarStyle.linkHolder} to={"/holova-garnitura"}>
            Холова гарнитура
          </Link>
        </div>
        <div className={SideBarStyle.CategoryHolder}>
          <Link className={SideBarStyle.linkHolder} to={"/kuhni"}>
            Кухни
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarContainer;
