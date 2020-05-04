import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MovieList from "./MovieList";
import axios from "axios";

const useStyles = makeStyles({
  rating: {
    marginBottom: "10px"
  }
});
export default function Menu({ callback }) {
  //make the button function
  const [block, setunblock] = useState("block");
  const menudropdoown = () => {
    if (block === "block") {
      document.getElementById("dropdown-container").style.display = "block";
      setunblock("unblock");
    } else {
      document.getElementById("dropdown-container").style.display = "none";
      setunblock("block");
    }
  };

  //make the input value
  const [movieInfo, setmovieInfo] = useState({
    Movie_name: "",
    Director: "",
    Poster_URL: "",
    Trailer_URL: "",
    Intro: ""
  });

 
  const [List, setList] = useState([]);

  axios
      .get("http://localhost:8080/movies")
      .then(function(response) {
        setList(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

  const handlesubmit = (evt) => {
    evt.preventDefault(); 
    axios
      .post("http://localhost:8080/movies", movieInfo)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  

  useEffect(() => {
    console.log("render only once");
  }, [handlesubmit]);

  const classes = useStyles();

  const trailer = e => {
    let value = e.target.value;
    value = value.replace("watch?v=", "embed/");
    setmovieInfo({ ...movieInfo, Trailer_URL: value });
  };
  return (
    <div className="menumovie">
      <div className="menutext">
        <button className="addmovie" onClick={menudropdoown}>
          <h1>Add a movie</h1>
        </button>
        <div id="dropdown-container">
          <form type="submit" className="moviecontent">
            <input
              id="moviename"
              placeholder="Movie Name"
              value={movieInfo.Movie_name}
              onChange={e =>
                setmovieInfo({ ...movieInfo, Movie_name: e.target.value })
              }
            ></input>
            <input
              id="director_name"
              placeholder="Director"
              value={movieInfo.Director}
              onChange={e =>
                setmovieInfo({ ...movieInfo, Director: e.target.value })
              }
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
              id="trailer_URL"
              placeholder="Trailer URL"
              value={movieInfo.Trailer_URL}
              onChange={trailer}
            ></input>
            <h2 id="label">Rating</h2>

            <Rating
              className={classes.rating}
              name="customized-empty"
              defaultValue={0}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
            <textarea
              placeholder="Add Introduction"
              id="comment"
              onChange={e =>
                setmovieInfo({ ...movieInfo, Intro: e.target.value })
              }
            ></textarea>
            <button onClick={handlesubmit}>Submit </button>
            {/* <button onClick={handlerefresh}>refresh current list </button> */}
          </form>
        </div>
        <div className="addmovie">
          <h1>Search a movie</h1>
        </div>
        <form type="submit" className="moviecontent1">
          <input placeholder="Movie Name"></input>
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="Movie">
       {List.map(movie => (<MovieList movieInfo={movie} callback={callback} />))}
      </div>
    </div>
  );
}
