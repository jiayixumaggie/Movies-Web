var admin = require("firebase-admin");
var serviceAccount = require("./serviceaccount.json");
const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://final-project-94ce2.firebaseio.com"
});

const db = admin.firestore();

const app = express();
app.use(bodyParser.json());
// app.use(cors());
// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
//   );
//   if (req.method === "OPTIONS") {
//     return res.status(200).end();
//   }
//   next();
// });
const port = 8080;

const moviesCollection = db.collection("movies");
const userNameCollection = db.collection("userName");

app.post("/movies", function(req, res) {
  const movies = req.body;
  moviesCollection.doc().set(movies);
  res.send("movie added");
});

app.post("/userName", function(req, res) {
  const userinfo = req.body;
  console.log(userinfo);
  userNameCollection.doc().set(userinfo);
  res.send("userName added");
});

app.get("/userName/:uid", async function(req, res) {
  const allusersDoc = await userNameCollection
    .where("uid", "==", req.params.uid)
    .get();

  for (let doc of allusersDoc.docs) {
    let name = doc.data();
    name.id = doc.id;
    res.send(name.username);
  }
 
});

app.get("/movies", async function(req, res) {
  const allMoviesDoc = await moviesCollection.get();
  const movie = [];
  for (let doc of allMoviesDoc.docs) {
    let mov = doc.data();
    mov.id = doc.id;
    movie.push(mov);
  }
  res.send(movie);
});

app.get("/movies/director/:Director", async function(req, res) {
  const allMoviesDoc = await moviesCollection
    .where("Director", "==", req.params.Director)
    .get();
  const movie = [];
  for (let doc of allMoviesDoc.docs) {
    let mov = doc.data();
    mov.id = doc.id;
    movie.push(mov);
  }
  if (movie.length == 0) {
    res.send("no result");
  } else {
    res.send(movie);
  }
});

app.get("/movies/name/:Movie_name", async function(req, res) {
  const allMoviesDoc = await moviesCollection
    .where("Movie_name", "==", req.params.Movie_name)
    .get();

  const movie = [];
  for (let doc of allMoviesDoc.docs) {
    let mov = doc.data();

    mov.id = doc.id;
    movie.push(mov);
  }
  if (movie.length == 0) {
    res.send("no result");
  } else {
    res.send(movie);
  }
});

app.get("/movies/comment/:Movie_name", async function(req, res) {
  const allMoviesDoc = await moviesCollection
    .where("Movie_name", "==", req.params.Movie_name)
    .get();

  for (let doc of allMoviesDoc.docs) {
    let mov = doc.data();
    mov.id = doc.id;
    res.send(mov.Comment);
  }
});

app.get("/movies/genre/:Genre", async function(req, res) {
  const allMoviesDoc = await moviesCollection
    .where("Genre", "==", req.params.Genre)
    .get();
  const movie = [];
  for (let doc of allMoviesDoc.docs) {
    let mov = doc.data();
    mov.id = doc.id;
    movie.push(mov);
  }
  if (movie.length == 0) {
    res.send("no result");
  } else {
    res.send(movie);
  }
});

app.put("/movies/updateComment/:Movie_name", async function(req, res) {
  const allMoviesDoc = await moviesCollection
    .where("Movie_name", "==", req.params.Movie_name)
    .get();

  for (let doc of allMoviesDoc.docs) {
    let mov = doc.data();
    mov.id = doc.id;
    console.log(mov);
    const movies = req.body;
    let movie = mov.Comment;

    await moviesCollection.doc(mov.id).update({ Comment: [...movie, movies] });
  }

  res.send("UPDATED");
});

app.put("/movies/:Genre", async function(req, res) {
  const Genre = req.params.Genre;
  const updatedGenre = req.body.Genre;
  moviesCollection.doc(Genre).update(updatedGenre);
  res.send("updated");
});
app.put("/movies/:Directors", async function(req, res) {
  const Directors = req.params.Directors;
  const updatedDirectors = req.body.Directors;
  moviesCollection.doc(Directors).update(updatedDirectors);
  res.send("updated");
});
app.delete("/movies/:id", async function(req, res) {
  const id = req.params.id;
  await moviesCollection.doc(id).delete();
  res.send("Deleted");
});
app.put("/updateRating", async function(req, res) {
  const id = req.name.id;
  const updatedRating = req.body;
  await songsCollection.doc(id).update(updatedRating);
  res.send("UPDATED");
});

app.listen(port, function() {
  console.log("app started");
});
