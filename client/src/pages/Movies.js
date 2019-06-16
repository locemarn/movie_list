import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import SearchButton from "../components/SearchButton";
import Loading from "../components/Loading";

export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function onTextChange(e) {
    const val = e.target.value;
    if (val === "") {
      setData([]);
    }
    setSearchText(val);
  }

  function onClickHandler(e) {
    e.preventDefault();

    setLoading(true);

    fetch(`/api/movies/count/${searchText}`)
      .then(res => res.json())
      .then(mov => {
        setData(mov);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Search Movie</h1>
      <SearchBar changeText={onTextChange} placeholder="Movie" />
      <SearchButton clickHandler={onClickHandler} text="Search" />
      {loading && <Loading />}
      <List data={data} />
    </div>
  );
}
