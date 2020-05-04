import React from "react";
import { useHistory } from "react-router-dom";

export default ({movie_info}) => {
    const history = useHistory();
    const closetrailer = ()=>{
        history.goBack();
      }
  return (
    <div id="lightbox">
      <button class="closebutton" onClick={closetrailer}>
        {" "}
        X{" "}
      </button>
      <iframe
        width="640"
        height="360"
        src={movie_info.movie_info.Trailer_URL}
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </div>
  );
};
