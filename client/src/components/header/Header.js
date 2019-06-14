import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
        <div className="left">
          <a className="btn-floating btn-large waves-effect waves-light" href="!#">
            <i className="material-icons teal">home</i>
          </a>
        </div>
        <div className="nav-wrapper teal">
          <a href="#!" className="brand-logo center">Fakeflix</a>
        </div>
      </nav>
      </div>
    )
  }
}
