

const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(()=> {
    let newRecipe = Recipe.create({
      title: "Pumpkin-Soup",
      level: "Easy Peasy",
      ingredients: ["Pumpkin", "Cream", "Salt", "Herbs"],
      cuisine: "german",
      dishType: "soup",
      img: "https://www.gaumenfreundin.de/wp-content/uploads/2020/10/Kuerbissuppe-rezeptfoto.jpg",
      duration: 20,
      creator: "Ivana"
    })
    return newRecipe
  })
  .then (recipe => console.log(recipe.title))
  .then(() => {
    return Recipe.insertMany(data)
  })
  .then (() => {
    let response = data.map(obj => {
      return obj.title})
      console.log(response, "all the recepies above have been updated to MongoDB")
  })
  .then(() => {
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
  })
  .then (() => console.log("Entry has been successfuly updated!"))
  .then(() => {
    return Recipe.deleteOne({title: "Carrot Cake"})
  })
  .then (() => console.log("Recipe deleted"))
  .then (() => mongoose.connection.close())
  .catch(error => {
    console.error('Error connecting to the database', error);
  });






