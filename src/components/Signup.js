import React, { useState } from "react";
import app from "./base";

export default ({ toLogin }) => {
  const [signup, setSignup] = useState({ email: "", password: "" });
  const handleSignUp = async evt => {
    evt.preventDefault();
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(signup.email, signup.password);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div id="signup">
      <h1 style={{ color: "red" }}>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input
            name="email"
            placeholder="Email"
            value={signup.email}
            onChange={e => setSignup({ ...signup, email: e.target.value })}
          ></input>
        </label>
        <label>
          Password:
          <input
            name="password"
            placeholder="Password"
            value={signup.password}
            onChange={e => setSignup({ ...signup, password: e.target.value })}
          ></input>
        </label>
        <button>Sign up</button>
      </form>
      <button onClick={toLogin}>Log in</button>
    </div>
  );
};
