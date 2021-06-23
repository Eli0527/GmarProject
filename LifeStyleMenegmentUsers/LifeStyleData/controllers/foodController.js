const Food = require("../models/foodModel");

//new get all recipes
exports.allFood = async (request, response) => {
  const food = await Food.find();
  console.log(food);
  try {
    response.json(food);
  } catch (error) {
    response.json({
      status: "an error occured",
      data: {
        data: error,
      },
    });
  }
};
//new get one food
exports.getOnefood = async (request, response) => {
  const myFood = await Food.findById(request.params.id);
  try {
    response.json(myFood);
  } catch (error) {
    response.json({
      status: "failed",
      data: {
        message: "food not found",
      },
    });
  }
};

exports.createNewFood = async (request, response) => {
  console.log("request.body ----- ", request.body);
  const NewFood = await Food.create({
    description: request.body.description,
    foodNutrients: request.body.foodNutrients,
  });

  try {
    await NewFood.save();
    response.json({
      status: "inserted",
      data: {
        data: NewFood,
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
