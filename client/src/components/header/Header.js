import React from "react";
import MenuHeader from "./menuHeader";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = props => {
  const { title } = props;
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="right">
            <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <MenuHeader text="Home" icon="home" to="/" />
              <MenuHeader text="Movies" icon="local_movies" to="/movies" />
              <MenuHeader text="About" icon="info" to="/about" />
            </ul>
          </div>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              {title}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
