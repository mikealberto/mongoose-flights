//no module.exports because it doesn't return anything that we will be using

//once ran, mongoose package is going to be connected to our database
const mongoose = require("mongoose");

//we create a collection simply by using it
//used to connect to our database module to the mongoose db
mongoose.connect("mongodb://localhost/flights");

//shortcut to mongoose.connection object
const db = mongoose.connection;

//on - event listener
db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
