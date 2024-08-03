import React, { useState } from "react";
import "./App.css";

function App() {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [randomNumber, setRandomNumber] = useState("");

  const generateRandomNumber = () => {
    setRandomNumber(
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
    );
  };

  return (
    <div className="App">
      <div className="container">
        <div className="randomNumber">
          <p>Random Number:</p> <span>{randomNumber}</span>
        </div>
        <div className="numContainer">
          <p>Min:</p>
          <input
            type="number"
            value={minValue}
            onChange={(e) => setMinValue(+e.target.value)}
          />
          <p>Max:</p>
          <input
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(+e.target.value)}
          />
        </div>
        <div className="btn">
          <button onClick={generateRandomNumber}>Get Random Number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
