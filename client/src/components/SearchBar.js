import React from 'react'

const SearchBar = props => {
  return (
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <input id="first_name" type="text" class="validate" />
        <label for="first_name">Movie</label>
      </div>
    </div>
  )
}

export default SearchBar