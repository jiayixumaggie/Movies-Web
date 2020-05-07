import React, { useState, useContext } from "react";
import app from "./base";
import Signup from "./Signup";
import Login from "./Login";
import { AuthContext } from "./Auth";

export default () => {
  const [section, setSection] = useState("login");
  return section === "login" ? (
    <Login toSignup={() => setSection("signup")} />
  ) : (
    <Signup toLogin={() => setSection("login")} />
  );
};
