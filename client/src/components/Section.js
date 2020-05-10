import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";


export default () => {
  const [section, setSection] = useState("login");
  return section === "login" ? (
    <Login toSignup={() => setSection("signup")} />
  ) : (
    <Signup toLogin={() => setSection("login")} />
  );
};
