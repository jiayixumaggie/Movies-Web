import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from "axios";
import UserReview from "./UserReview";
import { AuthContext } from "./Auth";

const useStyles = makeStyles({
  rating: {
    marginBottom: "1px"
  }
});

export default ({ movie_info, callback, rate_val }) => {
  console.log(rate_val);
  const classes = useStyles();
  const [video, setVideo] = useState(false);
  const [review, setReview] = useState(false);
  const [reviewlist, setReviewlist] = useState([]);
  const [add, setAdd] = useState({ rating: 0, name: "", review: "" });
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("/userName/" + currentUser.email)
      .then(function(response) {
        setAdd({ ...add, name: response.data });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const trailer_display = () => {
    setVideo(true);
  };
  const closetrailer = () => {
    setVideo(false);
  };
  const backtomain = () => {
    callback(true);
  };
  const Review = evt => {
    setReview(true);
    evt.preventDefault();
    axios
      .get("/movies/comment/" + movie_info.Movie_name)
      .then(function(response) {
        setReviewlist(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const backtotrailer = () => {
    setReview(false);
  };

  const ReviewButton = evt => {
    evt.preventDefault();
    axios
      .put("/movies/updateComment/" + movie_info.Movie_name, add)
      .then(function(response) {
        console.log(response);
        axios
          .get("/movies/comment/" + movie_info.Movie_name)
          .then(function(response) {
            setReviewlist(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      {!video ? (
        !review ? (
          <div id="back">
            <button id="backbutton" onClick={backtomain}>
              {" "}
              Back{" "}
            </button>
            <div id="rating_review">
              <div>
                <img
                  id="image"
                  alt="poster"
                  src={movie_info.Poster_URL}
                  width="280"
                  height="450"
                ></img>
              </div>
              <div id="intro">
                <h1>{movie_info.Movie_name.replace(/_/g, " ")}</h1>
                <h2> Director: {movie_info.Director.replace(/_/g, " ")}</h2>
                <h2>{movie_info.Genre} </h2>

                <Rating
                  id="rating"
                  className={classes.rating}
                  name="customized-empty"
                  value={rate_val}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                />
                <h2>{movie_info.Intro}</h2>
                <div id="review_trailer">
                  <button className="btn" onClick={trailer_display}>
                    Watch Trailer <i class="fa fa-play"></i>
                  </button>
                  <button className="btn" onClick={Review}>
                    {" "}
                    See Review <i className="fa fa-book"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="review">
            <div id="upperpart">
              <button id="back_button" onClick={backtotrailer}>
                Back
              </button>

              <textarea
                placeholder="Add Review here"
                id="comment"
                onChange={e => setAdd({ ...add, review: e.target.value })}
              ></textarea>
              <div style = {{display: "flex", flexDirection: "row"}}>
              <h1 style = {{color: "DodgerBlue"}}>Add a Rating</h1>
              <div style = {{marginTop: "20px", marginLeft: "10px"}}>
              <Rating
                className={classes.rating}
                name="customized-empty"
                defaultValue={0}
                precision={0.5}
                onChange={e =>
                  setAdd({ ...add, rating: Number(e.target.value) })
                }
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
              </div>
              </div>
              <button id="add_review_button" onClick={ReviewButton}>
                Share Review
              </button>
            </div>
            <div id="reviewarea">
              {reviewlist.map(comment => (
                <UserReview name={comment.name} review={comment.review} rating = {comment.rating}/>
              ))}
            </div>
          </div>
        )
      ) : (
        <div id="lightbox">
          <button className="closebutton" onClick={closetrailer}>
            {" "}
            X{" "}
          </button>
          <iframe
            title="movie tralier"
            width="640"
            height="400"
            src={movie_info.Trailer_URL}
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>
      )}
    </div>
  );
};
