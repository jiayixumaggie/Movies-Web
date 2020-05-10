import React, { useState } from "react";
import Currentmovie from "./Currentmovie";
import Addmovie from "./Addmovie";
import Searchmovie from "./Searchmovie";

export default function Menu({ callback }) {
  const [item, setItem] = useState({ itempage: "moviepage" });
  var pageswitch;

  if (item.itempage === "moviepage") {
    pageswitch = <Currentmovie callback={callback} />;
  } else if (item.itempage === "addmovie") {
    pageswitch = <Addmovie />;
  } else {
    pageswitch = <Searchmovie callback={callback}/>;
  }

  const menudropdown = () => {
    setItem({ itempage: "addmovie" });
  };
  const movielist = () => {
    setItem({ itempage: "moviepage" });
  };
  const searchmovie = () => {
    setItem({ itempage: "moviesearch" });
  };

  return (
    <div className="menumovie">
      <div className="menutext">
        <button className="addmovie" onClick={menudropdown}>
          <h1>Add a movie</h1>
        </button>
        <button className="addmovie" onClick={movielist}>
          <h1>Movie List</h1>
        </button>
        <button className="addmovie" onClick={searchmovie}>
          <h1>Search a movie</h1>
        </button>
      </div>
      <div className="Movie">{pageswitch}</div>
    </div>
  );
}
