const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"

// THEN METHOD:

/* mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  }); */


// FUNCTIONS:
const deleteAll = async function() {
  try {
    const empty = await Recipe.deleteMany()
    console.log("all empty")
  } catch (err){
    console.log(err)
  }

}
const deleteOne = async function(condition) {
  try {
    const emptyOne = await Recipe.deleteOne(condition)
    console.log("Recipe deleted")
  } catch (err){
    console.log(err)
  }

}

const findUpdate = async function(condition, entryChange) {
  try {
    const update = await Recipe.findOneAndUpdate(condition, entryChange)
    console.log("Entry has been successfuly updated1")
  } catch (err){
    console.log(err)
  }

}

const insertArr = async function(data) {
  try {
    const entries = await Recipe.insertMany(data)
    console.log("Array inserted, check MongoDB Compass")
    const response = data.map(obj => {
      return obj.title})
    
    console.log(response, "all the recepies above have been updated to MongoDB")
    
    } catch (err){
    console.log(err)
  }

}

const addRecipe = async function(title, level, ingredients, cuisine, dishType,img, duration, creator, created) {
  try {
    const recipe = await Recipe.create({ 
      title: title,
      level: level,
      ingredients: ingredients,
      cuisine: cuisine,
      dishType: dishType,
      img: img,
      duration: duration,
      creator: creator,
      created: created
    })
    console.log(title)
  } catch (err){
    console.log(err)
  }
}

// ASYNC METHOD:

const connectMongoose = async function() {
  try {
    const x = await mongoose.connect(MONGODB_URI)
    console.log(`Connected to the database: "${x.connection.name}"`);

  } catch (err) {
    console.log(err)
  }
} 

connectMongoose()

//deleteAll()
//addRecipe("Pumpkin-Soup", "Easy Peasy", ["Pumpkin", "Cream", "Salt", "Herbs"], "german", "soup","https://www.gaumenfreundin.de/wp-content/uploads/2020/10/Kuerbissuppe-rezeptfoto.jpg", 20, "Ivana")
//insertArr(data)
//findUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
deleteOne({title: "Carrot Cake"})