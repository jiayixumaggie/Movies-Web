import React, { useState } from "react";
import app from "./base";

export default ({ toSignup }) => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const handlelogin = async evt => {
    evt.preventDefault();
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(login.email, login.password);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div id="login">
      <h1 style={{ color: "red" }}>Log in</h1>
      <form onSubmit={handlelogin}>
        <label>
          Email:
          <input
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={e => setLogin({ ...login, email: e.target.value })}
          ></input>
        </label>
        <label>
          Password:
          <input
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={e => setLogin({ ...login, password: e.target.value })}
          ></input>
        </label>
        <button>Log in</button>
      </form>
      <button onClick={toSignup}>Sign up</button>
    </div>
  );
};
