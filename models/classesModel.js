const mongoose = require("mongoose");
var ClassScema = mongoose.Schema({
  className: String,
  classIntake: Number,
  totalStudent: String,
  fees: String
});

module.exports = mongoose.model("Class", ClassScema);
