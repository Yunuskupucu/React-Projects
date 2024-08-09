import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter weight and height...");
    } else {
      let heightInMeters = height / 100;
      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));
      console.log(bmi);

      if (bmi <= 18) {
        setMessage("You are WEAK.");
      } else if (bmi > 18 && bmi <= 25) {
        setMessage("You are NORMAL.");
      } else if (bmi > 25 && bmi <= 30) {
        setMessage("You are FAT.");
      } else {
        setMessage("You are OBESE.");
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI</h1>
        <div className="info-box">
          <p>Weight(kg):</p>
          <input type="number" onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="info-box">
          <p>Height(cm):</p>
          <input type="number" onChange={(e) => setHeight(e.target.value)} />
        </div>
        <button type="submit" onClick={(e) => calcBmi(e)}>
          Calculate
        </button>
        <div className="result">
          <p>BMI: {bmi}</p>
        </div>
        <div className="message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
