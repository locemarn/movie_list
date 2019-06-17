import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6 offset-m3 margin">
            <div className="card teal darken-2">
              <div className="card-content white-text">
                <span className="card-title">Fakeflix</span>
                <p>
                  Welcome to Fakeflix. Go to our Movies page to search for a
                  movie by name and get all information about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
