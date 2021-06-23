import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import './melData.css';
const MealData = (props) => {
  let history = createBrowserHistory();

  const [foodGaneral, setFoodGaneral] = useState([]);
  const [brakeFast, setBrakeFast] = useState([]);
  const [lanch, setLanch] = useState([{}]);
  const [diner, setDiner] = useState([]);
  const [dateOfMeal, setdateOfMeal] = useState("");
  const [moode, setMoode] = useState("");
  // const history = useHistory();

  useEffect(() => {
    const GetFoodData = async () => {
      const result = await axios.get(
        "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=pQMbxx8uLlCiadckZLbHKVgNkPFT3WlP0wtAE4yy"
      );
      setFoodGaneral(result.data);

      console.log(foodGaneral);
    };
    GetFoodData();
  }, 0);

  const submitMealData = () => {
    const data = {
      brakeFast: brakeFast,
      lanch: lanch,
      diner: diner,
      moode:moode,
      dateOfMeal: dateOfMeal,
    };
    axios({
      method: "post",
      url: "http://localhost:3001/mealData/mealData/",
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

  const onChangeDate = (e) => {
    setdateOfMeal(e.target.value);
  };
  const onChangeBrakeFast = (e) => {
    setBrakeFast(e.target.value);
  };
  const onChangeLanch = (e) => {
    setLanch(e.target.value);
  };
  const onChangeDiner = (e) => {
    setDiner(e.target.value);
  };
  const onChangeMoode = (e) => {
    setMoode(e.target.value);
  };
  return (
    <div className="container">
      <h1>נתוני ארוחות</h1>
      <div class="form-group">
        <form onSubmit={submitMealData}>
          <div className="dateMeal">
          <label for="date">תאריך</label>
          <input type="date" onChange={onChangeDate} value={dateOfMeal} />
          </div>
          <div className="brakeFast">
            <label>ארוחת בוקר</label>
            <select
              class="form-control"
              onChange={onChangeBrakeFast}
              value={brakeFast}
            >
              <option selected></option>
              {foodGaneral.map((f) => (
                <option >{f.description}</option>
              ))}
            </select>
          </div>
          <div className="lanch">
            <label>ארוחת צהריים</label>
            <select class="form-control" onChange={onChangeLanch} value={lanch}>
              <option selected></option>
              {foodGaneral.map((f,i) => (
                <option value={ f.foodNutrients[0].name} >{f.description}</option>
              ))}
            </select>
          </div>
          <div className="diner">
            <label>ארוחת ערב</label>
            <select class="form-control" onChange={onChangeDiner} value={diner}>
              <option selected></option>

              {foodGaneral.map((f) => (
                <option key={uuidv4()}>{f.description}</option>
              ))}
            </select>
          </div>
          <div className="diner">
            <label>מצב רוח</label>
            <select class="form-control" onChange={onChangeMoode} value={moode}>
              <option selected></option>
              <option>שמח</option>
              <option>מבואס</option>
              <option>עצבני</option>
              <option>רגוע</option>
            </select>
          </div>
          <input className="btn btn-primary" type="submit" value="שמור"></input>
        </form>
      </div>
    </div>
  );
};
export default MealData;
