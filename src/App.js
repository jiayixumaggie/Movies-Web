import React, { useState } from "react";
import Main from "./components/Menu";
import Comment from "./components/Comment";

function App() {
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

export default App;
