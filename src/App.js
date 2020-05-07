import React, { useState } from "react";

import { AuthProvider } from "./components/Auth";
import Home from "./components/Home";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
