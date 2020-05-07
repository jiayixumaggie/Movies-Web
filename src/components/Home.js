import React, { useState, useContext } from "react";
import Main from "./Menu";
import Comment from "./Comment";
import app from "./base";
import Signup from "./Signup";
import Section from "./Section";
import { AuthContext } from "./Auth";

function Page() {
  const [commentpage, setcommentPage] = useState({ Page: true, Info: "" });
  return (
    <div className="App">
      <div className="MovieMenu">
        <h1>Movie Recommendation</h1>
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
