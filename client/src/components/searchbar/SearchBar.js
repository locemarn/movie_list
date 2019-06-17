import React from "react";
import PropTypes from "prop-types";
import "../../App.css";

const SearchBar = props => {
  const { placeholder, changeText } = props;
  return (
    <div className="row">
      <div className="input-field col s6 offset-s3 margin-top">
        <input
          id="first_name"
          type="text"
          className="validate"
          onChange={changeText}
        />
        <label htmlFor="first_name">{placeholder}</label>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired
};

export default SearchBar;
