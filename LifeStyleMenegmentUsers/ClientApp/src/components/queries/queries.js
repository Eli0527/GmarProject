import React, { useState, useEffect } from "react";
import axios from "axios";
import "./queries.css";
import $ from "jquery";
import { v4 as uuidv4 } from "uuid";
import Nutrients from "./nutrients";
import Alert from "./alert";
const Queries = (props) => {
  const [searchFood, setSearchFood] = useState("");
  const [nutrients, setNutrients] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "2cb450df";
  const APP_KEY = "47c3c236126c49797ed9aac1bceb0b55";
  const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${searchFood}&limit=10&app_id=${APP_ID}&app_key=${APP_KEY}&category=generic-foods`;
  useEffect(() => {
    const GetFoodData = async () => {

      Translate()

    };
    GetFoodData();
  }, 0);
  const Translate = () => {
    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-key": "6f1aabd2aamsh9401db3ac7d2320p15d92djsnb6e978a13b44",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "useQueryString": true
      },
      data: {q: 'Hello, world!', target: 'es', source: 'en'}
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const GetFoodData = async () => {
    if (searchFood != "") {
      const result = await axios.get(url);
      console.log(result);
      setNutrients(result.data.hints);
      setSearchFood("");
      setAlert("");
    } else {
      setAlert("!!נא הזן ערך בשדה");
    }

  };
  const onChange = (e) => {
    setSearchFood(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    GetFoodData();
  };

  return (
    <div id="divQuery" className="container">
      <h1 >שאילתות</h1>
      <form method="post" action="" className="search-form" onSubmit={onSubmit}>
      {alert !== "" &&<Alert alert={alert} />}
        <input
          type="text"
          onChange={onChange}
          value={searchFood}
          placeholder="חפש אוכל"
        ></input>
        <input type="submit" value="חיפוש" className="btn btn-success"></input>
      </form>
      <div className="nutrients">
        {nutrients !== [] &&
          nutrients.map((nutrient) => (
            <Nutrients key={uuidv4()} nutrientsFood={nutrient} />
          ))}
      </div>
    </div>
  );
};
export default Queries;
