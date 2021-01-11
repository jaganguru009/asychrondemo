const mongoose = require("mongoose");
var StudentScema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  gender: String, 
  dateOfBirth: Date,
  roll: String,
  class: String,
  fees:Number,
  batch:String,
  phone:Number,
  email:String,
  college:String
});

module.exports = mongoose.model("Student", StudentScema);
