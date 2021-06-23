import React, { useState,useEffect } from "react";
import WeeklyDestinationMorning from "./weeklyDestinationMorning";
import WeeklyDestinationLanch from "./weeklyDestinationLanch";
import WeeklyDestinationDiner from "./weeklyDestinationDiner";
import DetailsUser from "./detailsUser";
import Graph from "./graph";
import axios from "axios";

const HomePage = (props) => {
  const [graphData , setGraphData] = useState([]);

  useEffect(() => {
    const GetGoalsData = async () => {
      const result = await axios.get("http://localhost:3001/goals/goals/");
        setGraphData({
        calories: result.data[0].CaloriesMorning + result.data[0].CaloriesLunch  + result.data[0].CaloriesDiner,
        fats: result.data[0].FatsMorning +result.data[0].FatsLunch + result.data[0].FatsDiner,
        sugar: result.data[0].SugarsMorning + result.data[0].SugarsLunch + result.data[0].SugarsDiner,
      });

    };
    GetGoalsData();

    },0)

  return (
    <div className="container">
      <div class="container-fluid">
        <div
          class="row"
          style={{ justifyContent: "space-around", display: "flex" }}
        >
          <WeeklyDestinationMorning >
          </WeeklyDestinationMorning>
          <WeeklyDestinationLanch></WeeklyDestinationLanch>
          <WeeklyDestinationDiner></WeeklyDestinationDiner>
          <DetailsUser></DetailsUser>
        </div>
        <div
          className="row"
          style={{ justifyContent: "space-around", display: "flex" }}
        >

          <Graph graphData={graphData}></Graph>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
