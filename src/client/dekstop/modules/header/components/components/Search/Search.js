import React from "react";
import SearchStyle from './Search.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {
  return (
    <div className={SearchStyle.searchHolder}>
      <FontAwesomeIcon className={SearchStyle.iconHolder} icon={faSearch} />
      <input className={SearchStyle.inputHolder} />
    </div>
  );
};

export default Search;
