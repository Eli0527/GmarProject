import React, { useState } from "react";
import axios from "axios";
import $ from "jquery";
import useHistory from "use-history";
import DayPickerInput from "react-day-picker/DayPickerInput";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import moment from "moment";
import "./goals.css";
const Modal = (props) => {

  let showHide = props.show;

  const [hoverRange, setHoverRange] = useState();
  function getWeekRange(date) {
    return {
      from: moment(date).startOf("week").toDate(),
      to: moment(date).endOf("week").toDate(),
    };
  }
  function getWeekDays(weekStart) {
    const days = [weekStart];
    for (let i = 1; i < 7; i += 1) {
      days.push(moment(weekStart).add(i, "days").toDate());
    }
    return days;
  }
  const handleDayChange = (date) => {
    console.log("number", moment(date).isoWeek());
    props.setSelectedDays(getWeekDays(getWeekRange(date).from));
    props.setWeekNumber(moment(date).isoWeek());
    props.setYear(moment(date).isoWeekYear());
  };

  const handleWeekClick = (weekNumber, days, e) => {
    props.setSelectedDays({
      selectedDays: days,
    });
  };
  const handleDayLeave = () => {
    setHoverRange({
      hoverRange: undefined,
    });
  };
  const handleDayEnter = (date) => {
    setHoverRange(getWeekRange(date));
  };
  function getWeekRange(date) {
    return {
      from: moment(date).startOf("week").toDate(),
      to: moment(date).endOf("week").toDate(),
    };
  }
  const daysAreSelected = props.selectedDays.length > 0;

  const modifiers = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: props.selectedDays[0],
      to: props.selectedDays[6],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && props.selectedDays[0],
    selectedRangeEnd: daysAreSelected && props.selectedDays[6],
  };
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
              מלא את היעדים של השבוע
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
            <form className="form my-2 my-lg-0" onSubmit={props.submitGoals}>
              <div className="SelectedWeekExample">
                <DayPicker
                  required
                  selectedDays={props.selectedDays}
                  showWeekNumbers
                  showOutsideDays
                  modifiers={modifiers}
                  onDayClick={handleDayChange}
                  onDayMouseEnter={handleDayEnter}
                  onDayMouseLeave={handleDayLeave}
                  onWeekClick={handleWeekClick}
                ></DayPicker>{" "}
                {props.selectedDays.length === 7 && (
                  <div>
                    {" "}
                    {moment(props.selectedDays[0]).format("LL")}–{" "}
                    {moment(props.selectedDays[6]).format("LL")}{" "}
                  </div>
                )}{" "}
              </div>
              <div className="form-group">
                <h3>ארוחת בוקר</h3>
                <label htmlFor="CaloriesMorning">קלוריות</label>
                <input
                  className="form-control"
                  type="number"
                  name="CaloriesMorning"
                  aria-describedby="CaloriesMorning"
                  value={props.CaloriesMorning}
                  onChange={props.caloriesMorningChange}
                  step="0.01"
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="FatsMorning">שומנים</label>
                <input
                  className="form-control"
                  type="number"
                  name="FatsMorning"
                  aria-describedby="FatsMorning"
                  value={props.FatsMorning}
                  onChange={props.fatsMorningChange}
                  step="0.01"
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="SugarsMorning">סוכרים</label>
                <input
                  className="form-control"
                  type="number"
                  name="SugarsMorning"
                  aria-describedby="SugarsMorning"
                  value={props.SugarsMorning}
                  onChange={props.sugarsMorningChange}
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <h3>ארוחת צהריים</h3>
                <label htmlFor="CaloriesLunch">קלוריות</label>
                <input
                  className="form-control"
                  type="number"
                  name="CaloriesLunch"
                  aria-describedby="CaloriesLunch"
                  value={props.CaloriesLunch}
                  onChange={props.caloriesLunchChange}
                  step="0.01"
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="FatsLunch">שומנים</label>
                <input
                  className="form-control"
                  type="number"
                  name="FatsLunch"
                  aria-describedby="FatsLunch"
                  value={props.FatsLunch}
                  onChange={props.fatsLunchChange}
                  step="0.01"
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="SugarsLunch">סוכרים</label>
                <input
                  className="form-control"
                  type="number"
                  name="SugarsLunch"
                  aria-describedby="SugarsLunch"
                  value={props.SugarsLunch}
                  onChange={props.sugarsLunchChange}
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <h3>ארוחת ערב</h3>
                <label htmlFor="CaloriesDiner">קלוריות</label>
                <input
                  className="form-control"
                  type="number"
                  name="CaloriesDiner"
                  aria-describedby="CaloriesDiner"
                  value={props.CaloriesDiner}
                  onChange={props.caloriesDinerChange}
                  step="0.01"
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="FatsDiner">שומנים</label>
                <input
                  className="form-control"
                  type="number"
                  name="FatsDiner"
                  aria-describedby="FatsDiner"
                  value={props.FatsDiner}
                  onChange={props.fatsDinerChange}
                  step="0.01"
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="SugarsDiner">סוכרים</label>
                <input
                  className="form-control"
                  type="number"
                  name="SugarsDiner"
                  aria-describedby="SugarsDiner"
                  value={props.SugarsDiner}
                  onChange={props.sugarsDinerChange}
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

export default Modal;
