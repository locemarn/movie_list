import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'

export default function Movies() {

  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState([])

  function onTextChange(e) {
    const val = e.target.value
    setSearchText(val)

    if (val.length === 0) {
      setData([])
    }

    fetch(`/api/movies/count/${searchText}`)
      .then(res => res.json())
      .then(mov => {
        setData(mov)
      })
  }

  return (
    <div>
      <h1>Movies</h1>
      <SearchBar
        changeText={onTextChange}
      />
    </div>
  )
}
