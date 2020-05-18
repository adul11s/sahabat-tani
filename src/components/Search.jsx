import React from "react";
import "../style/search.css";
const Search = (props) => {
  return (
    <div>
      <form className="form-inline">
        <input
          className="form-control w-100"
          type="search"
          placeholder={props.placeholder}
          onChange={props.doSearch}
          value={props.keyword}
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Search;
