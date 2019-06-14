import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div>
      <nav>
        <div className="right">
          <ul>
            <Link to="/" class="waves-effect waves-light btn-large teal darken-2"><i className="material-icons right">home</i>Home</Link>
            <Link to="/movies" class="waves-effect waves-light btn-large teal darken-2"><i className="material-icons right">local_movies</i>Movies</Link>
            <Link to="/about" class="waves-effect waves-light btn-large teal darken-2"><i className="material-icons right">info</i>About</Link>
          </ul>
        </div>
        <div className="nav-wrapper teal">
          <a href="#!" className="brand-logo center">Fakeflix</a>
        </div>
      </nav>
    </div>
  )
}

export default Header
