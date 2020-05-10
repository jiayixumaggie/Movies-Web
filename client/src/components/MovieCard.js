import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import CardContent from "@material-ui/core/CardContent";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: 280,
    backgroundColor: "grey",
    marginRight: "40px",
    marginBottom: "40px",
    height: 380
  },
  media: {
    height: 300,
    width: 300
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
});
export default ({ movieInfo, callback }) => {
  const classes = useStyles();
  const [rate_value, setRating] = useState(0);
  const Comment = () => {
    callback(false, movieInfo, rate_value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/movies/rating/" + movieInfo.Movie_name)
      .then(function(response) {
        console.log(response.data.number);
        setRating(response.data.number);
      })
      .catch(function(error) {
        console.log(error);
      });
  },[]);
   
  return (
    <div className="card">
      <Card className={classes.root}>
        <CardActionArea onClick={Comment}>
          <CardMedia className={classes.media} image={movieInfo.Poster_URL} />
          <CardContent className={classes.text}>
            {movieInfo.Movie_name.replace(/_/g, " ")}
          </CardContent>
        </CardActionArea>
        <Rating
          className={classes.rating}
          name="customized-empty"
          value={rate_value}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Card>
    </div>
  );
};
