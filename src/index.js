import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import { UserProvider } from "./context/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);
