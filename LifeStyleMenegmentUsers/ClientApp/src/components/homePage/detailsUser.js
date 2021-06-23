import React, { useState, useEffect } from "react";
import axios from "axios";
import authService from "../api-authorization/AuthorizeService";

const DetailsUser = (props) => {
  const [userDetails, setUserDetails] = useState({});


  useEffect(() => {
    const populateState = async () => {
      const [user] = await Promise.all([
        authService.getUser(),
      ]);


        console.log(user);

          const result = await axios.get(`https://localhost:44301/GetDetailsUser/${user.sub}`);
          setUserDetails(result.data);
          console.log(result);

    };
    populateState();


  }, 0);

  return (
    <div class="card" id="cardUser">
      <div class="card-body">
        <h5 class="card-title">פרטי משתמש</h5>

        <p><b>שם מלא:</b> {userDetails.firstName} {userDetails.lastName}</p>
        <br></br>
        <p><b>כתובת:</b> {userDetails.address}</p>
        <br></br>
        <p><b>תאריך לידה:</b> {userDetails.yearBirthDate}</p>
        <br></br>
        <p><b>מספר טלפון:</b> {userDetails.phoneNumber}</p>
        <br></br>
        <p><b>מצב אישי:</b> {userDetails.status}</p>
        <br></br>
        <p><b>משקל:</b> {userDetails.weight}</p>
        <br></br>
        <p><b>גובה:</b> {userDetails.height}</p>
        <br></br>
      </div>
    </div>
  );
};
export default DetailsUser;
