const mongoose = require("mongoose");
const mealDataModel = new mongoose.Schema(
  {
    brakeFast: {
      type: Array,
    },
    lanch: {
      type: Array,
    },
    diner: {
      type: Array,
    },
    moode: {
      type: String,
    },
    dateOfMeal: {
      type: Date,
    },
  },
  { collection: "MealData" }
);
module.exports = mongoose.model("MealData", mealDataModel);
