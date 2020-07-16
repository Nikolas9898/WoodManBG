import React from "react";
import HeaderStyle from "../../Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <div className={HeaderStyle.searchHolder}>
      <FontAwesomeIcon className={HeaderStyle.iconHolder} icon={faSearch} />
      <input className={HeaderStyle.inputHolder} />
    </div>
  );
};

export default Search;
