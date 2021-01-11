const mongoose = require("mongoose");
var paymentScema = mongoose.Schema({
  roll: String,
  amount: String,
  lastName: String,
  paymentId:String,
  status:String,
  date:Date,
  middleName:String
});

module.exports = mongoose.model("Payment", paymentScema);
