import React, { useState } from "react";
import NutrientsDetails from "./nutrientsDetails";

const Nutrients = ({ nutrientsFood }) => {
  const [show, setShow] = useState(false);
  const { label, image, nutrients } = nutrientsFood.food;

  return (
    <div className="nutrient">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <button onClick={() => setShow(!show)}>רכיבים תזונתיים</button>
      {show && <NutrientsDetails nutrients={nutrients} />}
    </div>
  );
};

export default Nutrients;