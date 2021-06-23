import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './homePage.css';
const WeeklyDestinationMorning = (props) => {
  const [myDestinationMorning, setMyDestinationMorning] = useState([]);

  useEffect(() => {
    const GetWeeklyDestinationMorning = async () => {
      const result = await axios.get("http://localhost:3001/goals/goals/");
      setMyDestinationMorning(result.data);
    };
    GetWeeklyDestinationMorning();
  }, 0);
  return (
    <div
      class="cardGoals"

    >
      <div class="card-body">
        <h5 class="card-title">יעדים בוקר</h5>

        {myDestinationMorning.map((d) => {
          return (
            <div >
              <p className = "pragraph"  style={{ color: "black" }}>{d.CaloriesMorning} קלוריות</p>
              <p className = "pragraph" style={{ color: "black" }}>{d.FatsMorning} שומנים</p>
              <p className = "pragraph" style={{ color: "black" }}>{d.SugarsMorning} סוכרים</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WeeklyDestinationMorning;
