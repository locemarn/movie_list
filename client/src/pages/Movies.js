import React, { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import List from "../components/list/List";
import SearchButton from "../components/searchbutton/SearchButton";
import Loading from "../components/loading/Loading";
import Badget from "../components/badget/Badget";

export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [badget, setBadget] = useState(false);

  function onTextChange(e) {
    const val = e.target.value;
    if (val === "") {
      setData({});
    }
    setSearchText(val);
  }

  async function onClickHandler(e) {
    try {
      e.preventDefault();
      setData({});
      setLoading(true);

      if (searchText === "") {
        setLoading(false);
        setData({ msg: "No Movies Found!" });
        setBadget(true);
        setTimeout(() => setBadget(false), 3000);
        return false;
      }

      await fetch(`/api/movies/count/${searchText}`)
        .then(res => res.json())
        .then(mov => {
          setData(mov);
          setLoading(false);
        })
        .catch(err => console.log("Error: ", err));
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div>
      <SearchBar changeText={onTextChange} placeholder="Movie" />
      <SearchButton clickHandler={onClickHandler} text="Search" />
      {loading && <Loading />}

      <List data={data} />
      <h1>Total: {data.total ? data.total : 0}</h1>
      {badget && <Badget msg="Please, type a movie!" color="red" />}
    </div>
  );
}
