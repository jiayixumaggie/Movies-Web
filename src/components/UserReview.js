import React from "react";

export default ({ name, review }) => {
  console.log(name);
  console.log(review);

  return (
    <div id="reviewcard">
      <div id="userName">
        <h1>{name}</h1>
      </div>
      <div id="userreview">
        <h2>{review}</h2>
      </div>
    </div>
  );
};
