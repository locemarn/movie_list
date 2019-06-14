import React from 'react'

const SearchBar = props => {
  return (
    <div className="row">
      <div className="input-field col s6 offset-s3">
        <input
          id="first_name"
          type="text"
          className="validate"
          onChange={props.changeText}
        />
        <label htmlFor="first_name">Movie</label>
      </div>
    </div>
  )
}

export default SearchBar