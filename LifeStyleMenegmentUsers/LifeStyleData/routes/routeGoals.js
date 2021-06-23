const express = require("express");
const goalsController = require("../controllers/goalsController");
const router = express.Router();

router
  .route("/goals/:user")
  .get(goalsController.allGoals)
  .post(goalsController.createNewGoals);
router
  .route("/:id")
  .get(goalsController.getOneGoals)
  .delete(goalsController.deleteGoals);
router
  .route("/update/").put(goalsController.updateGoals);

module.exports = router;
