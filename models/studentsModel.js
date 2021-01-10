const mongoose = require("mongoose");
var StudentScema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  gender: String, 
  dateOfBirth: Date,
  roll: String,
  class: String,
});

module.exports = mongoose.model("Student", StudentScema);
