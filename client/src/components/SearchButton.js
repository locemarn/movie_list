import React, { Component } from "react";

export default class SearchButton extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.clickHandler}
          className="waves-effect waves-light btn margin"
        >
          Search
        </button>
      </div>
    );
  }
}
