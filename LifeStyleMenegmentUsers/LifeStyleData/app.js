const express = require("express");
const cors = require("cors");

var bodyParser = require("body-parser");
const goalsRouter = require("./routes/routeGoals");
const foodRouter=require("./routes/routeFood")
const mealDataRouter=require("./routes/routeMealData")
// Start express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/food",foodRouter);
app.use("/goals",goalsRouter);
app.use("/mealData",mealDataRouter);



module.exports = app;