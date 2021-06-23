const express = require("express");
const mealDataController = require("../controllers/mealDataController");
const router = express.Router();

router
  .route("/mealData/")
  .get(mealDataController.allMealData)
  .post(mealDataController.createNewMealData);


module.exports = router;