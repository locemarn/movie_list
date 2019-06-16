import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import SearchButton from "../components/SearchButton";

export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  function onTextChange(e) {
    const val = e.target.value;
    setSearchText(val);
  }

  function onClickHandler(e) {
    e.preventDefault();
    setData([]);
    fetch(`/api/movies/count/${searchText}`)
      .then(res => res.json())
      .then(mov => {
        setData(mov);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Movies</h1>
      <SearchBar changeText={onTextChange} />
      <SearchButton clickHandler={onClickHandler} />
      <List data={data} />
    </div>
  );
}
