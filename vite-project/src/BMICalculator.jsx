import React, { useState } from "react";

const BMICalculator = () => {
  const [mass, setMass] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = () => {
    const massNum = parseFloat(mass);
    const heightNum = parseFloat(height);

    if (isNaN(massNum) || isNaN(heightNum) || heightNum <= 0) {
      setError("Please enter valid mass and height values.");
      return;
    }

    // Calculate BMI
    const bmiValue = massNum / (heightNum * heightNum);
    setBmi(bmiValue.toFixed(2)); // Set BMI with 2 decimal places
    setError(""); // Clear any previous error
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Mass (kg):
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Height (m):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {bmi !== null && !error && <h2>Your BMI is: {bmi}</h2>}
    </div>
  );
};

export default BMICalculator;
