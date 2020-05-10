import React, { useState } from "react";
import axios from "axios";

export default () => {

  const [movieInfo, setmovieInfo] = useState({
    Movie_name: "",
    Director: "",
    Poster_URL: "",
    Genre: "",
    Trailer_URL: "",
    Comment: [],
    Intro: ""
  });

  const MovieName = e => {
    let value = e.target.value;
    value = value.replace(/ /g, "_");
    value = value.toUpperCase();
    setmovieInfo({ ...movieInfo, Movie_name: value });
  };

  const trailer = e => {
    let value = e.target.value;
    value = value.replace("watch?v=", "embed/");
    setmovieInfo({ ...movieInfo, Trailer_URL: value });
  };

  const Director = e => {
    let value = e.target.value;
    value = value.replace(/ /g, "_");
    value = value.toUpperCase();
    setmovieInfo({ ...movieInfo, Director: value });
  };
  const handlesubmit = evt => {
    evt.preventDefault();
    axios
      .get("/movies/name/" + movieInfo.Movie_name)
      .then(function(response) {
        console.log(response.data);
        if (response.data !== "no result") {
          alert("This Movie has already been added by others");
        } else {
          axios
          .post("/movies", movieInfo)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });

  };
  return (
    <div id="dropdown-container">
      <form type="submit" className="moviecontent">
        <input
          id="moviename"
          placeholder="Movie Name"
          value={movieInfo.Movie_name}
          onChange={MovieName}
        ></input>
        <input
          id="director_name"
          placeholder="Director"
          value={movieInfo.Director}
          onChange={Director}
        ></input>
        <input
          id="poster_URL"
          placeholder="Poster URL"
          value={movieInfo.Poster_URL}
          onChange={e =>
            setmovieInfo({ ...movieInfo, Poster_URL: e.target.value })
          }
        ></input>
        <input
          id="Genre"
          placeholder="Genre"
          value={movieInfo.Genre}
          onChange={e => setmovieInfo({ ...movieInfo, Genre: e.target.value.toUpperCase()})}
        ></input>
        <input
          id="trailer_URL"
          placeholder="Trailer URL"
          value={movieInfo.Trailer_URL}
          onChange={trailer}
        ></input>
        <h2 id="label">Rating</h2>
        <textarea
          placeholder="Add Introduction"
          id="comment"
          onChange={e => setmovieInfo({ ...movieInfo, Intro: e.target.value })}
        ></textarea>
        <button onClick={handlesubmit}>Submit</button>
      </form>
    </div>
  );
};
