import React from "react";
import "./Badget.css";
import PropTypes from "prop-types";

const Badget = props => {
  const { msg, color } = props;
  return (
    <div className="row">
      <ul
        className={
          "collection with-header badget col s12 m2 offset-m5 " + color
        }
      >
        <li className={"collection-item " + color}>
          <div>
            {msg}
            <a href="#!" className="secondary-content">
              <i className="material-icons ">error_outline</i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

Badget.propTypes = {
  msg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Badget;
