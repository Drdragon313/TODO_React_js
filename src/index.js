import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Login from "./login page/login";
import Home from "./Home page/home";
import Profile from "./Profile page/profile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/profile" element={<Profile />}></Route>
    </Routes>
  </Router>
  </Provider>
);
