import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles({
  rating: {
    marginBottom: "10px"
  }
});
export default ({movie_info, callback}) => {
  const classes = useStyles();
  const [video, setVideo] = useState(true);

  const trailer_display = () => {
    setVideo(false);
  };
  const closetrailer = () => {
    setVideo(true);
  };
  const backtomain = () =>{ 
      callback(true);
  }
  return (
    <div>
      {video ? (
        <div id="back">
          <button id="backbutton" onClick = {backtomain}> Back </button>
          <div id="rating_review">
            <div>
              <img
                id="image"
                alt="poster"
                src={movie_info.Poster_URL}
                width="280"
                height="350"
              ></img>
            </div>
            <div id="intro">
              <h1>{movie_info.Movie_name}</h1>

              <Rating
                id="rating"
                className={classes.rating}
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
              <h2>{movie_info.Intro}</h2>
              <div id="review_trailer">
                <button class="btn" onClick={trailer_display}>
                  Watch Trailer <i class="fa fa-play"></i>
                </button>
                <button class="btn">
                  {" "}
                  See Review <i class="fa fa-book"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="lightbox">
          <button class="closebutton" onClick={closetrailer}>
            {" "}
            X{" "}
          </button>
          <iframe
            width="640"
            height="360"
            src={movie_info.Trailer_URL}
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>
      )}
    </div>
  );
};
