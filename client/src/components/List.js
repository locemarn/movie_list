import React, { Component } from "react";

export default class List extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        {data.moviesByYear ? (
          <ul>
            {data.moviesByYear.map((mov, i) => (
              <li key={i}>{mov.year}</li>
            ))}
          </ul>
        ) : (
          "No Movies Found!"
        )}
      </div>
    );
  }
}
