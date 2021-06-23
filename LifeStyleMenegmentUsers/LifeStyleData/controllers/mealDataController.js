const MealData = require("../models/mealDataModel");


//new get all recipes
exports.allMealData = async (request, response) => {
  console.log(request.query);

  const mealData = await MealData.find();
  try {
    response.json(mealData);
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
// exports.getOneGoals = async (request, response) => {
//   const myGoals = await Goals.findById(request.params.id);
//   try {
//     response.json(myGoals);
//   } catch (error) {
//     response.json({
//       status: "failed",
//       data: {
//         message: "goals not found",
//       },
//     });
//   }
// };

//new create new goals
exports.createNewMealData = async (request, response) => {
  console.log("request.body ----- ", request.body);
  const NewMealData = await MealData.create({
    brakeFast: request.body.brakeFast,
    lanch: request.body.lanch,
    diner: request.body.diner,
    moode: request.body.moode,
    dateOfMeal: request.body.dateOfMeal,
  });

  try {
    await NewMealData .save();
    response.json({
      status: "inserted",
      data: {
        data: NewMealData,
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

//new update a recipe
// exports.updateRecipe = async (request, response) => {
//   try {
//     const updatedRecipe = await Recipe.findByIdAndUpdate(
//       request.params.id,
//       request.body,
//       {
//         new: true, //return the updated object
//         runValidators: true,
//       } //run validators again on the updated object
//     );

//     response.json({
//       status: "updated",
//       data: {
//         data: updatedRecipe,
//       },
//     });
//   } catch (error) {
//     response.json({
//       status: "an error occured",
//       data: {
//         data: error,
//       },
//     });
//   }
// };

//delete a recipe
// exports.deleteRecipe = async (request, response) => {
//   const myRecipe = await Recipe.deleteOne({ _id: request.params.id});
//   try {
//     response.json(myRecipe);
//   } catch (error) {
//     response.json({
//       status: "failed",
//       data: {
//         message: "recipe not found",
//       },
//     });
//   }
// };
