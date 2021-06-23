const mongoose = require("mongoose");
const goalsModel = new mongoose.Schema({
  CaloriesMorning: {
    type: Number,
  },
  CaloriesLunch: {
    type: Number,
  },
  CaloriesDiner: {
    type: Number,
  },
  FatsMorning: {
    type: Number,
  },
  FatsLunch: {
    type: Number,
  },
  FatsDiner: {
    type: Number,
  },
  SugarsMorning: {
    type: Number,
  },
  SugarsLunch: {
    type: Number,
  },
  SugarsDiner: {
    type: Number,
  },
  selectedDays: {
    type: Array,
  },
  weekNumber: {
    type: Number,
  },
    year: { type: Number },
    user: {
        type: Object
    }
});
module.exports = mongoose.model("Goals", goalsModel);
