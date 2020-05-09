import React, { useState, useContext } from "react";
import Main from "./Menu";
import Comment from "./Movie_intro";
import Section from "./Section";
import { AuthContext } from "./Auth";
import app from "./base.js";

function Page() {
  const [commentpage, setcommentPage] = useState({ Page: true, Info: "" });
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
          callback={(page, info) => setcommentPage({ Page: page, Info: info })}
        />
      ) : (
        <Comment
          movie_info={commentpage.Info}
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
