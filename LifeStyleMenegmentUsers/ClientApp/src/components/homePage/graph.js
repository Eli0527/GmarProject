import React, { useState,useEffect } from "react";
import axios from "axios";
import {Chart} from 'chart.js';
import './homePage.css';

const Graph = (props) => {


  const setBar= (a,b,c)=>{
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["קלוריות", "שומנים", "סוכרים"],
        datasets: [
          {
            label: "יעדי השבוע",
            data: [ a,b,c],
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange"
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1
          }
        ]
      }
    });
  }
  useEffect(() => {


    setBar(props.graphData.calories,props.graphData.fats,props.graphData.sugar)

  }, );
  return (
    <div
      className="card"
      id="graph"
    >
      {/* <button onClick={()=> }>ffffff</button> */}
      <div class="card-body" >
      <canvas id="myChart" style={{height:"100%",width:"100%"}}></canvas>

      </div>
    </div>
  );
};
export default Graph;
