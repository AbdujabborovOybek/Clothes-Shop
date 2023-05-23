import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Assets/Global.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Fragment>
);
