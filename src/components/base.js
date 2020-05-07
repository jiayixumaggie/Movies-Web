import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAuC8npowkshVai9yChdt81YJuajagKVEs",
  authDomain: "final-project-94ce2.firebaseapp.com",
  databaseURL: "https://final-project-94ce2.firebaseio.com",
  projectId: "final-project-94ce2",
  storageBucket: "final-project-94ce2.appspot.com",
  messagingSenderId: "701041941591"
});

export default app;
