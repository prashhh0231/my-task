import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tileClick } from "../state/action/action";

const Chessboard = () => {
  const position = useSelector((state) => state.changeposition);
  const dispatch = useDispatch();
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
    border: "1px solid black",
  };

  const red = {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
  };

  const makeBoard = () => {
    let arr = [];

    for (let i = 0; i < 8; i++) {
      let temp = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2)
          temp.push(
            <div
              style={position.i === i && position.j === j ? red : white}
              onClick={() => {
                dispatch(tileClick(i, j));
              }}
            ></div>
          );
        else
          temp.push(
            <div
              style={position.i === i && position.j === j ? red : black}
              onClick={() => {
                dispatch(tileClick(i, j));
              }}
            ></div>
          );
      }
      arr.push(temp);
    }

    setChess(arr);
  };

  useEffect(() => {
    makeBoard();
  });
  return (
    <div className="chess">
      <div style={chessBox}>{chess}</div>
    </div>
  );
};

export default Chessboard;
