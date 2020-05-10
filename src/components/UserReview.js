import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles({
  rating: {
    marginBottom: "1px"
  }
});

export default ({ name, review, rating }) => {
  const classes = useStyles();
  return (
    <div id="reviewcard">
      <div id="userName">
        <h1>{name}</h1>
      </div>
      <Rating
        id="rating"
        className={classes.rating}
        name="customized-empty"
        defaultValue={rating}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
      <div id="userreview">
        <h2>{review}</h2>
      </div>
    </div>
  );
};
