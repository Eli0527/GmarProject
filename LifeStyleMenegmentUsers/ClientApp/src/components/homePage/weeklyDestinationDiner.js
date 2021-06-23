import React, { useState, useEffect } from "react";
import axios from "axios";

const WeeklyDestinationDiner = (props) => {
  const [myDestinationDiner, setMyDestinationDiner] = useState([]);
  useEffect(() => {
    const GetWeeklyDestinationDiner = async () => {
      const result = await axios.get("http://localhost:3001/goals/goals/");
      setMyDestinationDiner(result.data);

    };
    GetWeeklyDestinationDiner();
  }, 0);

  return (
    <div
      className="cardGoals"

    >
      <div className="card-body">
      <h5 className="card-title ">יעדים ערב</h5>

        {myDestinationDiner.map((d) => {
          return (
            <div >
              <p className = "pragraph" style={{ color: "black" }}> {d.CaloriesDiner} קלוריות </p>
              <p className = "pragraph" style={{ color: "black" }}> {d.FatsDiner} שומנים</p>
              <p className = "pragraph" style={{ color: "black" }}> {d.SugarsDiner} סוכרים</p>

            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WeeklyDestinationDiner;
