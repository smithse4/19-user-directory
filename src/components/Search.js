import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="container">
        <div className="row">
        <div className="input-group mb-3 col-sm-4 searchBar">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary searchBtn"
            type="button"
            id="button-addon2 "
          >
            Search
          </button>
        </div>
      </div>
        </div>
      
    </div>
  );
};

export default Search;
