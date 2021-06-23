const mongoose = require("mongoose");
const a = new mongoose.Schema({
  name: { type: String },
  amount: { type: Number },
});

const foodModel = new mongoose.Schema({
  description: {
    type: String,
  },
  foodNutrients: [a],
},{ collection : 'foodData' });

module.exports = mongoose.model("FoodData", foodModel);
