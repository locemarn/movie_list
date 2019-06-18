import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const menuHeader = props => {
  const { text, icon, to } = props;
  return (
    <Link to={to} className="waves-effect waves-light btn-large teal darken-2">
      <i className="material-icons right">{icon}</i>
      {text}
    </Link>
  );
};

menuHeader.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default menuHeader;
