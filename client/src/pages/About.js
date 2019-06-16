import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About App</h1>
        <p>This is a web app maked to the Senior/Mega challenge.</p>
        <p>
          This app was made in NodeJS backend, consuming a external API and send
          to other API format.
        </p>
        <p>
          In frontend, this backend API is consumed with a single page
          application with ReactJS for show all data requested.
        </p>
      </div>
    );
  }
}
