import React from "react";
import Chessboard from "./Components/Chessboard";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="container">
        <h1>Given Task</h1>
      </div>
      <Chessboard />
    </div>
  );
};

export default App;
