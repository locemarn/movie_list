import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="right">
            <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <Link to="/" className="waves-effect waves-light btn-large teal darken-2">
                <i className="material-icons right">home</i>
                Home
              </Link>
              <Link to="/movies" className="waves-effect waves-light btn-large teal darken-2">
                <i className="material-icons right">local_movies</i>
                Movies
              </Link>
              <Link to="/about" className="waves-effect waves-light btn-large teal darken-2">
                <i className="material-icons right">info</i>
                About
              </Link>
            </ul>
          </div>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Fakeflix</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
