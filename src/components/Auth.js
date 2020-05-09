import React, { useEffect, useState } from "react";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setTimeout(function() {
        setPending(false);
      }, 2000);
    });
  }, []);

  if (pending) {
    return <h1 style={{ color: "DodgerBlue", textAlign: "center", marginTop: "21%"}}>Loading...</h1>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
