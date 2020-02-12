import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1 className="title">Hello!</h1>
        <p className="text">
          I am trying to find a nice way of stopping the keyboard on iOS from
          pushing all the view up. This problem only happens on iOS. On Android,
          things work as expected.
        </p>
      </div>
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="focus to expand this block"
        />
      </div>
    </div>
  );
}

export default App;
