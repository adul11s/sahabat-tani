import React from "react";

const Search = (props) => {
  return (
    <div>
      <form className="form-inline">
        <input
          className="form-control "
          type="search"
          placeholder={props.placeholder}
          onChange={props.doSearch}
          value={props.keyword}
          aria-label="Search"
        />
        <button className="btn btn-outline-dark" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
