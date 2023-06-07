import React from "react";
// Styles//
import "./styles.css";
// img //
import searchImg from "../../../Assests/Header/search-icon.svg";

const Search = () => {
  return (
    <div className="SearchMainContainer">
      <div className="sectionContainer container">
        <h3 className="titleSearch">
          Find your Dream vehicle from wide range of Search
        </h3>
        <div className="searchFilter grid">
          <input className="rightMargin" type="text" placeholder="Type" />
          <input className="rightMargin" type="text" placeholder="Model" />
          <input className="rightMargin" type="number" placeholder="Year" />
          <input className="rightMargin" type="number" placeholder="Price" />
          <button className="btn2 flex">
            <img src={searchImg} className="imgIcon" alt="search" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
