import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <h2>Star Components:</h2>
      <Star color="red" isFilled />
      <Star color="orange" />
      <Star color="green" isFilled /> */}
      <h2>Rating Component:</h2>
      <Rating stars={3} meanings={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
