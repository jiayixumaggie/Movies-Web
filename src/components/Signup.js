import React, { useState } from "react";
import app from "./base";
import axios from "axios";

export default ({ toLogin }) => {
  const [signup, setSignup] = useState({ email: "", password: "" });
  const [userName, setUserName] = useState({ uid: "", username: "" });
  const handleSignUp = async evt => {
    evt.preventDefault();

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(signup.email, signup.password)
        .then(function(response) {
          axios
            .post("http://localhost:8080/userName", userName)
            .then(function(response) {
              console(response);
            })
            .catch(function(error) {
              console.log(error);
            });
        });
    } catch (error) {
      alert(
        "Error: The email address is already in use. Please use the log in button"
      );
    }
  };
  return (
    <div id="signup">
      <h1
        style={{
          color: "DodgerBlue",
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        Sign up
      </h1>
      <form onSubmit={handleSignUp}>
        <input
          name="email"
          placeholder="Email"
          value={signup.email}
          onChange={e => {
            setSignup({
              ...signup,
              email: e.target.value
            });
            setUserName({ ...userName, uid: e.target.value });
          }}
        ></input>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signup.password}
          id = "myInput"
          onChange={e => setSignup({ ...signup, password: e.target.value })}
        ></input>

        <input
          name="username"
          placeholder="Username"
          value={userName.username}
          onChange={e => setUserName({ ...userName, username: e.target.value })}
        ></input>

        <button>Sign up</button>
      </form>
      <button onClick={toLogin}>Log in</button>
    </div>
  );
};
