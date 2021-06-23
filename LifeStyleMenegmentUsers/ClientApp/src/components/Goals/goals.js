import React, { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserHistory } from 'history';
import "./goals.css";
import authService from "../api-authorization/AuthorizeService";
import Modal from "./modalGoals";
import ModalUpdate from "./modaUpdteGoals";



const Goals = (props) => {
  const [myDestination, setMyDestination] = useState([]);
  const [CaloriesMorning, setCaloriesMorning] = useState(0);
  const [CaloriesLunch, setCaloriesLunch] = useState(0);
  const [CaloriesDiner, setCaloriesDiner] = useState(0);
  const [FatsMorning, setFatsMorning] = useState(0);
  const [FatsLunch, setFatsLunch] = useState(0);
  const [FatsDiner, setFatsDiner] = useState(0);
  const [SugarsMorning, setSugarsMorning] = useState(0);
  const [SugarsLunch, setSugarsLunch] = useState(0);
  const [SugarsDiner, setSugarsDiner] = useState(0);
  const [selectedDays, setSelectedDays] = useState([]);
  const [weekNumber, setWeekNumber] = useState(0);
  const [year, setYear] = useState(0);
  const [user, setUser] = useState("");
  const [display, setDisplay] = useState("");
  const [displayUpdate, setDisplayUpdate] = useState("");
  const [userId, setUserId] = useState(null);


  let history = createBrowserHistory();
  const [NewCaloriesMorning, setNewCaloriesMorning] = useState(0);
  const [NewCaloriesLunch, setNewCaloriesLunch] = useState(0);
  const [NewCaloriesDiner, setNewCaloriesDiner] = useState(0);
  const [NewFatsMorning, setNewFatsMorning] = useState(0);
  const [NewFatsLunch, setNewFatsLunch] = useState(0);
  const [NewFatsDiner, setNewFatsDiner] = useState(0);
  const [NewSugarsMorning, setNewSugarsMorning] = useState(0);
  const [NewSugarsLunch, setNewSugarsLunch] = useState(0);
  const [NewSugarsDiner, setNewSugarsDiner] = useState(0);
  const [NewselectedDays, setNewSelectedDays] = useState([]);
  const [NewweekNumber, setNewWeekNumber] = useState(0);
  const [Newyear, setNewYear] = useState(0);

  useEffect(() => {
    const populateState = async () => {
      const [user] = await Promise.all([
        authService.getUser(),
      ]);


        console.log(user);

          const result = await axios.get(`http://localhost:3001/goals/goals/`, {
            params: {
              user:user.name
            }
          });
          setMyDestination(result.data);
          console.log('-------------------------------------',result);

    };
    populateState();




    // const GetWeeklyDestination = async () => {
    //   const result = await axios.get("http://localhost:3001/goals/goals/");
    //   setMyDestination(result.data);
    //   console.log(myDestination)

    // };
    // GetWeeklyDestination();
  }, []);

  const caloriesMorning = (event) => {
    setCaloriesMorning(event.target.value);
  };
  const caloriesLunch = (event) => {
    setCaloriesLunch(event.target.value);
  };
  const caloriesDiner = (event) => {
    setCaloriesDiner(event.target.value);
  };
  const fatsMorning = (event) => {
    setFatsMorning(event.target.value);
  };
  const fatsLunch = (event) => {
    setFatsLunch(event.target.value);
  };
  const fatsDiner = (event) => {
    setFatsDiner(event.target.value);
  };
  const sugarsMorning = (event) => {
    setSugarsMorning(event.target.value);
  };
  const sugarsLunch = (event) => {
    setSugarsLunch(event.target.value);
  };
  const sugarsDiner = (event) => {
    setSugarsDiner(event.target.value);
  };



  const NewcaloriesMorning = (event) => {
    setNewCaloriesMorning(event.target.value);
  };
  const NewcaloriesLunch = (event) => {
    setNewCaloriesLunch(event.target.value);
  };
  const NewcaloriesDiner = (event) => {
    setNewCaloriesDiner(event.target.value);
  };
  const NewfatsMorning = (event) => {
    setNewFatsMorning(event.target.value);
  };
  const NewfatsLunch = (event) => {
    setNewFatsLunch(event.target.value);
  };
  const NewfatsDiner = (event) => {
    setNewFatsDiner(event.target.value);
  };
  const NewsugarsMorning = (event) => {
    setNewSugarsMorning(event.target.value);
  };
  const NewsugarsLunch = (event) => {
    setNewSugarsLunch(event.target.value);
  };
  const NewsugarsDiner = (event) => {
    setNewSugarsDiner(event.target.value);
  };



  useEffect(() => {
    const populateState = async () => {
      const [isAuthenticated, user] = await Promise.all([
        authService.isAuthenticated(),
        authService.getUser(),
      ]);
      setUser(user && user.name);
    };
    populateState();
  },[]);

  const submitGoals = () => {
    const data = {
      CaloriesMorning: CaloriesMorning,
      CaloriesLunch: CaloriesLunch,
      CaloriesDiner: CaloriesDiner,
      FatsMorning: FatsMorning,
      FatsLunch: FatsLunch,
      FatsDiner: FatsDiner,
      SugarsMorning: SugarsMorning,
      SugarsLunch: SugarsLunch,
      SugarsDiner: SugarsDiner,
      selectedDays: selectedDays,
      weekNumber: weekNumber,
      year: year,
      user: user,
    };
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:3001/goals/goals/",
      data: data,
    }).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    history.push("/homePage");
  };
  const reset = () => {
    setDisplay("display-none");
  };
  const resetUpdate = () => {
    setDisplayUpdate("display-none");
  };
  const update = (Id) => {
    const data = {
      Id: Id,
      NewCaloriesMorning: NewCaloriesMorning,
      NewCaloriesLunch: NewCaloriesLunch,
      NewCaloriesDiner: NewCaloriesDiner,
      NewFatsMorning: NewFatsMorning,
      NewFatsLunch: NewFatsLunch,
      NewFatsDiner: NewFatsDiner,
      NewSugarsMorning: NewSugarsMorning,
      NewSugarsLunch: NewSugarsLunch,
      NewSugarsDiner: NewSugarsDiner,
      NewselectedDays: NewselectedDays,
      NewweekNumber: NewweekNumber,
      Newyear: Newyear,
    };
    axios({
      method: "put",
      url: `http://localhost:3001/goals/update/`,
      data: data,
    }).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    history.push("/homePage");

  };
  return (
    <div className="container">
      <div className="jumbotron">
              <div className="SelectedWeekExample">
                <Modal
                  CaloriesMorning={CaloriesMorning}
                  caloriesMorningChange={caloriesMorning}
                  FatsMorning={FatsMorning}
                  fatsMorningChange={fatsMorning}
                  SugarsMorning={SugarsMorning}
                  sugarsMorningChange={sugarsMorning}
                  CaloriesLunch={CaloriesLunch}
                  caloriesLunchChange={caloriesLunch}
                  FatsLunch={FatsLunch}
                  fatsLunchChange={fatsLunch}
                  SugarsLunch={SugarsLunch}
                  sugarsLunchChange={sugarsLunch}
                  CaloriesDiner={CaloriesDiner}
                  caloriesDinerChange={caloriesDiner}
                  FatsDiner={FatsDiner}
                  fatsDinerChange={fatsDiner}
                  SugarsDiner={SugarsDiner}
                  sugarsDinerChange={sugarsDiner}
                  selectedDays={selectedDays}
                  setSelectedDays={setSelectedDays}
                  setWeekNumber={setWeekNumber}
                  setYear={setYear}
                  submitGoals={submitGoals}
                  show={display}
                  reset={reset}
                ></Modal>{" "}
                {myDestination.map((f)=>{return (
                  <ModalUpdate
                    CaloriesMorning={NewCaloriesMorning}
                    caloriesMorningChange={NewcaloriesMorning}
                    FatsMorning={NewFatsMorning}
                    fatsMorningChange={NewfatsMorning}
                    SugarsMorning={NewSugarsMorning}
                    sugarsMorningChange={NewsugarsMorning}
                    CaloriesLunch={NewCaloriesLunch}
                    caloriesLunchChange={NewcaloriesLunch}
                    FatsLunch={NewFatsLunch}
                    fatsLunchChange={NewfatsLunch}
                    SugarsLunch={NewSugarsLunch}
                    sugarsLunchChange={NewsugarsLunch}
                    CaloriesDiner={NewCaloriesDiner}
                    caloriesDinerChange={NewcaloriesDiner}
                    FatsDiner={NewFatsDiner}
                    fatsDinerChange={NewfatsDiner}
                    SugarsDiner={NewSugarsDiner}
                    sugarsDinerChange={NewsugarsDiner}
                    selectedDays={NewselectedDays}
                    setSelectedDays={setNewSelectedDays}
                    setWeekNumber={setNewWeekNumber}
                    setYear={setNewYear}
                    update={() => update(f._id)}
                    show={displayUpdate}
                    reset={resetUpdate}
                  ></ModalUpdate>
                )})}
              </div>
          <input
            className="btn btn-primary"
            type="button"
            value="צור יעדים"
            onClick={() => setDisplay("display-block")}
          ></input>{" "}
{myDestination.map((f)=>{
  return(

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>מספר שבוע</th>
                    <th>קלוריות</th>
                    <th>שומנים </th>
                    <th>סוכרים</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{f.weekNumber}</td>
                    <td>{f.CaloriesMorning}</td>
                    <td>{f.FatsMorning}</td>
                    <td>{f.SugarsMorning}</td>
                    <th scope="row">ארוחת בוקר</th>
                  </tr>

                  <tr>
                    <td>{f.weekNumber}</td>

                    <td>{f.CaloriesLunch}</td>
                    <td>{f.FatsLunch}</td>
                    <td>{f.SugarsLunch}</td>
                    <th scope="row">ארוחת צהריים</th>
                  </tr>

                  <tr>
                    <td>{f.weekNumber}</td>
                    <td>{f.CaloriesDiner}</td>
                    <td>{f.FatsDiner}</td>
                    <td>{f.SugarsDiner}</td>
                    <th scope="row">ארוחת ערב</th>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
  )
})}
          <input
            className="btn btn-primary"
            type="button"
            value="עדכון"
            onClick={() => setDisplayUpdate("display-block")}
          ></input>{" "}
      </div>{" "}
    </div>
  );
};
export default Goals;
