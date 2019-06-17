import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About App</h1>
        <p>
          This is a web application designed for the Senior / Mega challenge.
        </p>
        <p>
          This application was made in the NodeJS backend, consuming the
          external API and sending it to another API format.
        </p>
        <p>
          In the frontend, this back-end API is consumed with a single-page
          application with ReactJS to display all requested data.
        </p>
      </div>
    );
  }
}
