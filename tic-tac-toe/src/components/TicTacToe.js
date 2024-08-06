import React, { useState } from "react";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

export const TicTacToe = () => {
  const [boardData, setBoardData] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(cross_icon);
  const [winner, setWinner] = useState(null);

  const checkForWinner = (newBoardData) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        newBoardData[a] &&
        newBoardData[a] === newBoardData[b] &&
        newBoardData[a] === newBoardData[c]
      ) {
        return newBoardData[a];
      }
    }
    return null;
  };

  const switchPlayer = () => {
    setPlayer((prevPlayer) =>
      prevPlayer === cross_icon ? circle_icon : cross_icon
    );
  };

  const updateBoard = (index) => {
    if (boardData[index] === null && !winner) {
      const newBoardData = [...boardData];
      newBoardData[index] = player;
      setBoardData(newBoardData);
      const winner = checkForWinner(newBoardData);
      if (winner) {
        setWinner(winner);
      } else {
        switchPlayer();
      }
    }
  };

  const resetBoard = () => {
    setBoardData(Array(9).fill(null));
    setPlayer(cross_icon);
    setWinner(null);
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      {winner ? (
        <h2 className="winState">
          Winner: {winner === cross_icon ? "X" : "O"}
        </h2>
      ) : null}
      <div className="board">
        {boardData.map((value, index) => (
          <div key={index} className="boxes" onClick={() => updateBoard(index)}>
            {value && <img src={value} alt="icon" />}
          </div>
        ))}
      </div>
      <button className="reset" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
};
