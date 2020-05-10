import React, { useState, useContext } from "react";
import Main from "./Menu";
import Comment from "./Movie_intro";
import Section from "./Section";
import { AuthContext } from "./Auth";
import app from "./base.js";

function Page() {
  const [commentpage, setcommentPage] = useState({ Page: true, Info: "", rating: 0 });
  const Signout = ()=>{
    app.auth().signOut();

  }
  return (
    <div className="App">
      <div className="MovieMenu">
        <h1>Movie Recommendation</h1>
        <button onClick = {Signout}><i className="fa fa-user" style={{ color: "black", marginRight:"10px"
          }}></i>Sign Out</button>
      </div>
      {commentpage.Page ? (
        <Main
          callback={(page, info, rating1) => setcommentPage({ Page: page, Info: info, rating: rating1 })}
        />
      ) : (
        <Comment
          movie_info={commentpage.Info}
          rate_val = {commentpage.rating}
          callback={page => setcommentPage({ Page: page })}
        />
      )}
    </div>
  );
}

export default () => {
  const { currentUser } = useContext(AuthContext);
  const render = currentUser === null ? <Section /> : <Page />;
  return render;
};
