const Goals = require("../models/goalsModel");
const moment = require("moment");
var currentWeekNumber = require("current-week-number");

const today = moment().startOf("day");

//new get all recipes
exports.allGoals = async (request, response) => {
  var query = {
    weekNumber: moment(response.date).startOf(1).isoWeek(),
  };
  console.log(response.params);

  const goals = await Goals.findById(response.params,query);
  try {
    response.json(goals);
  } catch (error) {
    response.json({
      status: "an error occured",
      data: {
        data: error,
      },
    });
  }
};

//new get one recipe
exports.getOneGoals = async (request, response) => {
  const myGoals = await Goals.findById(request.params.id);
  try {
    response.json(myGoals);
  } catch (error) {
    response.json({
      status: "failed",
      data: {
        message: "goals not found",
      },
    });
  }
};

//new create new goals
exports.createNewGoals = async (request, response) => {
  console.log("request.body ----- ", request.body);
  const NewGoals = await Goals.create({
    CaloriesMorning: request.body.CaloriesMorning,
    CaloriesLunch: request.body.CaloriesLunch,
    CaloriesDiner: request.body.CaloriesDiner,
    FatsMorning: request.body.FatsMorning,
    FatsLunch: request.body.FatsLunch,
    FatsDiner: request.body.FatsDiner,
    SugarsMorning: request.body.SugarsMorning,
    SugarsLunch: request.body.SugarsLunch,
    SugarsDiner: request.body.SugarsDiner,
    selectedDays: request.body.selectedDays,
    weekNumber: request.body.weekNumber,
    year: request.body.year,
    user: request.body.user,
  });

  try {
    await NewGoals.save();
    response.json({
      status: "inserted",
      data: {
        data: NewGoals,
      },
    });
  } catch (error) {
    response.json({
      status: "an error occured",
      data: {
        data: error,
      },
    });
  }
};

//new update a Goals
exports.updateGoals = async (request, response) => {
  const newGoals = {
    CaloriesMorning: request.body.NewCaloriesMorning,
    CaloriesLunch: request.body.NewCaloriesLunch,
    CaloriesDiner: request.body.NewCaloriesDiner,
    FatsMorning: request.body.NewFatsMorning,
    FatsLunch: request.body.NewFatsLunch,
    FatsDiner: request.body.NewFatsDiner,
    SugarsMorning: request.body.NewSugarsMorning,
    SugarsLunch: request.body.NewSugarsLunch,
    SugarsDiner: request.body.NewSugarsDiner,
    selectedDays: request.body.NewselectedDays,
    weekNumber: request.body.NewweekNumber,
    year: request.body.Newyear,
  };
  const id = request.body.Id;
  await Goals.findByIdAndUpdate(
    id,
    newGoals,
    function (err, newGoals) {
      try {
        if (err) {
          response.json({
            status: "failed",
            data: {
              data: err,
            },
          });
        } else {

          response.json({
            status: "updated",
            data: {
              data: newGoals,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }


  );
};

//delete a recipe
exports.deleteGoals = async (request, response) => {
  const myGoals = await Goals.deleteOne({
    _id: request.params.id
  });
  try {
    response.json(myGoals);
  } catch (error) {
    response.json({
      status: "failed",
      data: {
        message: "Goals not found",
      },
    });
  }
};