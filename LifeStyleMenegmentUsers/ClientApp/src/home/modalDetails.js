import React, { useState } from "react";
import axios from "axios";
import "./modal.css";


const ModalDetails = (props) => {
  let showHide = props.show;

  return (
    <div
      className={`modal modal-scrollable ${showHide} `}
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        style={{ maxWidth: "50%", maxHeight: "50%", overflowY: "initial" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              !!מלא הפרטים האישיים שלך
            </h5>
          </div>
          <div
            className="modal-body"
            style={{
              overflowY: "auto",
              padding: 20,
              height: "30vh",
            }}
          >
            <form className="form my-2 my-lg-0"onSubmit={props.submitUsers}>
            <div className="form-group">
                <label htmlFor="FirstName">שם פרטי</label>
                <input
                  className="form-control"
                  type="text"
                  name="FirstName"
                  aria-describedby="FirstName"
                  value={props.FirstName}
                  onChange={props.first_name}
                  required
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="LastName">שם משפחה</label>
                <input
                  className="form-control"
                  type="text"
                  name="LastName"
                  aria-describedby="LastName"
                  value={props.LastName}
                  onChange={props.last_name}
                  required
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="Address">כתובת</label>
                <input
                  className="form-control"
                  type="text"
                  name="Address"
                  aria-describedby="Address"
                  value={props.Address}
                  onChange={props.address}
                  required
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="PhoneNumber"> טלפון</label>
                <input
                  className="form-control"
                  type="text"
                  name="PhoneNumber"
                  aria-describedby="PasswordPhoneNumber"
                  value={props.PhoneNumber}
                  onChange={props.phone_number}
                  required
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="YearBirthDate">תאריך לידה</label>
                <input
                  className="form-control"
                  type="date"
                  name="YearBirthDate"
                  aria-describedby="YearBirthDate"
                  value={props.YearBirthDate}
                  onChange={props.year_birth_date}
                  required
                ></input>
              </div>
              <div className="form-group">
                <label for="Status">מצב אישי</label>
                <select onChange={props.status} required value={props.Status} name="Status">
                  <option selected>בחר</option>
                  <option value={props.Single}>רווק/ה</option>
                  <option value={props.Married}>נשוי</option>
                  <option value={props.Divorcee}>גרוש/ה</option>
                  <option value={props.Widower}>אלמן/ה</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Height">גובה</label>
                <input
                  className="form-control"
                  type="number"
                  name="Height"
                  step="0.01"
                  aria-describedby="Height"
                  value={props.Height}
                  onChange={props.height}
                  required
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="Weight">משקל</label>
                <input
                  className="form-control"
                  type="number"
                  name="Weight"
                  step="0.01"
                  aria-describedby="Weight"
                  value={props.Weight}
                  onChange={props.weight}
                  required
                ></input>
              </div>
              <br></br>
              <input
                className="btn btn-primary"
                type="submit"
                value="שמירה"
              ></input>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.reset}
            >
              יציאה
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
