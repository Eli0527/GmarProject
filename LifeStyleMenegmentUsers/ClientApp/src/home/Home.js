/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import { createBrowserHistory } from 'history';
import authService from "../components/api-authorization/AuthorizeService";
import ModalDetails from "./modalDetails";

const Home = (props) => {
  var displayName = Home.name;
  let history = createBrowserHistory();

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [YearBirthDate, setYearBirthDate] = useState("");
  const [Status, setStatus] = useState("");
  const [Height, setHeight] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [user, setUser] = useState("");
  const [display, setDisplay] = useState("");
  const [disabled, setdisabled] = useState(false);



  useEffect(() => {
    const populateState = async () => {
      const user = await Promise.all([
        authService.isAuthenticated(),
        authService.getUser(),
      ]);
      setUser(user && user.name);
    };
    populateState();
  }, 0);

  const first_name = (event) => {
    setFirstName(event.target.value);
  };
  const last_name = (event) => {
    setLastName(event.target.value);
  };
  const address = (event) => {
    setAddress(event.target.value);
  };
  const phone_number = (event) => {
    setPhoneNumber(event.target.value);
  };
  const year_birth_date = (event) => {
    setYearBirthDate(event.target.value);
  };
  const status = (event) => {
    setStatus(event.target.value);
  };
  const height = (event) => {
    setHeight(event.target.value);
  };
  const weight = (event) => {
    setWeight(event.target.value);
  };

  const reset = () => {
    setDisplay("display-none");
  };

  const submitUsers = () => {
    const data = {
      FirstName: FirstName,
      LastName: LastName,
      Address: Address,
      PhoneNumber: PhoneNumber,
      YearBirthDate: YearBirthDate,
      Status: Status,
      Height: Height,
      Weight: Weight,
      UserName: user,
    };

    axios({
      method: "post",
      url: "https://localhost:44301/UpdateDetails",
      data: data,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);

      }
    );
    setdisabled(true)
    alert("!!שים לב עליך לעדכן את המשקל כל תחילת שבוע")
    history.push("/homePage");

  };
  return (
    <div className="home" style={{ textAlign: "center" }}>
      <h1>ברוכים הבאים למערכת לניהול אורח חיים בריא</h1>
      <button
        className="btn btn-primary"
        onClick={() => setDisplay("display-block")}
        disabled = {disabled}
      >
        מלא את הפרטים האישיים
      </button>
      <ModalDetails
        FirstName={FirstName}
        first_name={first_name}
        LastName={LastName}
        last_name={last_name}
        Address={Address}
        address={address}
        PhoneNumber={PhoneNumber}
        phone_number={phone_number}
        Status={Status}
        status={status}
        YearBirthDate={YearBirthDate}
        year_birth_date={year_birth_date}
        Weight={Weight}
        weight={weight}
        Height={Height}
        height={height}
        submitUsers={submitUsers}
        show={display}
        reset={reset}
        Single="רווק/ה"
        Married= "נשוי/ה"
        Divorcee= "גרוש/ה"
        Widower= "אלמן/ה"
      ></ModalDetails>
    </div>
  );
};
export default Home;
