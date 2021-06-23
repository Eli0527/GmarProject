import React, { useState, useEffect } from "react";
import axios from "axios";

const WeeklyDestinationLanch = (props) => {
  const [myDestinationLanch, setMyDestinationLanch] = useState([]);

  useEffect(() => {
    const GetWeeklyDestinationLanch = async () => {
      const result = await axios.get("http://localhost:3001/goals/goals/");
      setMyDestinationLanch(result.data);
    };
    GetWeeklyDestinationLanch();
  }, 0);
  return (
    <div
      class="cardGoals"

    >
      <div class="card-body">
        <h5 class="card-title">יעדים צהריים</h5>

        {myDestinationLanch.map((d) => {
          return (
            <div >
              <p className="pragraph" style={{ color: "black"}}>{d.CaloriesLunch} קלוריות</p>
              <p className="pragraph" style={{ color: "black" }}>{d.FatsLunch} שומנים</p>
              <p className="pragraph" style={{ color: "black" }}>{d.SugarsLunch} סוכרים</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WeeklyDestinationLanch;
