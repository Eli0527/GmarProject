const express = require("express");
const foodController = require("../controllers/foodController");
const router = express.Router();

router
  .route("/foodData/")
  .get(foodController.allFood)
  .post(foodController.createNewFood);
  router
  .route("foodData/:id")
  .get(foodController.getOnefood)
module.exports = router;