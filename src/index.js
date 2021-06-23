import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
var name = "sikander";
var number = 9;
ReactDOM.render(
  <div>
    <h1>HELLO {name}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 11)}</p>
  </div>,
  document.getElementById("root")
);
