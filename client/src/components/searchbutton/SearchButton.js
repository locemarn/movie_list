import React from "react";
import PropTypes from "prop-types";

const SearchButton = props => {
  const { text, clickHandler } = props;
  return (
    <div>
      <button onClick={clickHandler} className="waves-effect waves-light btn">
        {text}
      </button>
    </div>
  );
};

SearchButton.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default SearchButton;
