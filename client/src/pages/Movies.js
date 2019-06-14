import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

export default class Content extends Component {
  render() {
    return (
      <div>
        <h1>Movies</h1>
        <SearchBar />
      </div>
    )
  }
}
