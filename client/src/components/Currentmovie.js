import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieCard";

export default ({ callback }) => {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/movies")
      .then(function(response) {
        setList(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="Movie">
      {List.map((movie, idx) => (
        <MovieList movieInfo={movie} callback={callback} key={idx} />
      ))}
    </div>
  );
};
