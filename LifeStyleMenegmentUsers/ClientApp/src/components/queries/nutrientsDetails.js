
import React from "react";
import { v4 as uuidv4 } from "uuid";

const NutrientsDetails = ({ nutrients}) => {
    return (
      <ul key={uuidv4()} className="nutrient-list">
        <li className="nutrient-text"> קלוריות: {nutrients.ENERC_KCAL}  </li>
        <li className="nutrient-text">פחמימות: {nutrients.CHOCDF}</li>
        <li className="nutrient-text">שומנים: {nutrients.FAT}</li>
        <li className="nutrient-text">חלבונים: {nutrients.PROCNT}</li>
        <li className="nutrient-text">פחמימות: {nutrients.CHOCDF}</li>

      </ul>
    );

};

export default NutrientsDetails;