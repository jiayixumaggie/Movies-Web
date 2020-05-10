import React, { useState } from "react";
import app from "./base";

export default ({ toSignup }) => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const handlelogin = async evt => {
    evt.preventDefault();
    try {
      await app.auth().signInWithEmailAndPassword(login.email, login.password);
    } catch (error) {
      alert(error);
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
        Log in
      </h1>
      <form onSubmit={handlelogin}>
        <input
          name="email"
          placeholder="Email"
          value={login.email}
          onChange={e => setLogin({ ...login, email: e.target.value })}
        ></input>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={login.password}
          onChange={e => setLogin({ ...login, password: e.target.value })}
        ></input>

        <button>Log in</button>
      </form>
      <button onClick={toSignup}>Sign up</button>
    </div>
  );
};
