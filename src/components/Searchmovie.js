import React, { useState } from "react";
import axios from "axios";
import MovieList from "./MovieCard";

export default ({ callback }) => {
  const [content, setContent] = useState("");
  const [result, setResult] = useState([]);
  const [warning, setWarning] = useState("");

  const searchMovie = evt => {
    evt.preventDefault();

    let selection;
    if (document.getElementById("movieName").checked) {
      selection = document.getElementById("movieName").value;
    } else if (document.getElementById("genre").checked) {
      selection = document.getElementById("genre").value;
    } else {
      if ((selection = document.getElementById("director").checked)) {
        selection = document.getElementById("director").value;
      } else {
        setWarning("You need to select one in order to search");
        return;
      }
    }

    if (selection === "movieName") {
      axios
        .get("/movies/name/" + content)
        .then(function(response) {
          setResult(response.data);
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else if (selection === "genre") {
      axios
        .get("/movies/genre/" + content)
        .then(function(response) {
          setResult(response.data);
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      axios
        .get("/movies/director/" + content)
        .then(function(response) {
          setResult(response.data);
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  return (
    <div id="search">
      <div id = "uppersearch">
      <h1>Movie search!</h1>
      <div id="radiobutton">
        <input
          type="radio"
          id="movieName"
          name="select"
          for="movieName"
          value="movieName"
        ></input>
        <label>Movie name</label>
        <input
          type="radio"
          id="genre"
          name="select"
          for="genre"
          value="genre"
        ></input>
        <label>Genre</label>
        <input
          type="radio"
          id="director"
          name="select"
          for="director"
          value="director"
        ></input>
        <label>Director</label>
      </div>

      <form type="submit" className="moviecontent1">
        <input
          placeholder=""
          value={content}
          onChange={e => setContent(e.target.value.replace(/ /g, "_").toUpperCase())}
        ></input>
        <button onClick={searchMovie}>
          <i className="fa fa-search"></i>
        </button>
      </form>
      </div>
      <div id ="searchresult">
        {warning.length > 0 ? (
          <h1>{warning}</h1>
        ) : result === "no result" ? (
          <h1>Result not found</h1>
        ) : result.length > 0 ? (
          result.map(movie => (
            <MovieList movieInfo={movie} callback={callback} />
          ))
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
 
