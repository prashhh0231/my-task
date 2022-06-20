import React, { useState, useEffect } from "react";
import "../Styles/chessboard.css";

const Chessboard = () => {
  const [chess, setChess] = useState([]);

  const black = {
    width: "50px",
    height: "50px",
    backgroundColor: "black",
  };
  const white = {
    width: "50px",
    height: "50px",
    backgroundColor: "white",
  };
  const chessBox = {
    width: 400,
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    boxShadow: `0px 10px 10px rgba(0,0,0,0.1)`,
    border: "1px solid black",
  };

  const red = {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
  };

  const [position, setPosition] = useState({
    i: null,
    j: null,
  });

  const update = (i, j) => {
    setPosition({
      i: i,
      j: j,
    });
  };

  const makeChessBoard = () => {
    let arr = [];

    for (let i = 0; i < 8; i++) {
      let temp = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2)
          temp.push(
            <div
              style={position.i === i && position.j === j ? red : white}
              onClick={() => {
                update(i, j);
              }}
            ></div>
          );
        else
          temp.push(
            <div
              style={position.i === i && position.j === j ? red : black}
              onClick={() => {
                update(i, j);
              }}
            ></div>
          );
      }
      arr.push(temp);
    }

    setChess(arr);
  };

  useEffect(() => {
    makeChessBoard();
  });
  return (
    <div className="chess">
      <div style={chessBox}>{chess}</div>
    </div>
  );
};

export default Chessboard;
