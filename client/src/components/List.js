import React, { Component } from "react";

export default class List extends Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <div className="row">
        {data.moviesByYear ? (
          <ul className="collection col s6 offset-s3">
            {data.moviesByYear.map((mov, i) => (
              <li key={i} className="collection-item avatar">
                <i className="material-icons circle teal">movie</i>
                <p>Year - {mov.year}</p>
                <p>Movies - {mov.movies}</p>
              </li>
            ))}
            <br />
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}
