const express = require("express");
const payment = require("../models/paymentsModel");
const stduent = require("../models/studentsModel");
const router = express.Router();
const http = require("http"); 


router.get("/", (req, res) => {
  let parentName = req.query.parentName;
  console.log("req.query.parentName " +req.query.parentName)
  if (req.query.parentName != undefined) {
    payment.find({
      $and: [
        { $and: [{ middleName: parentName }] }
      ]
    }, function (err, results) {
      if (err) {
        console.log("error occured while searching stduents for parent ");
        res.sendStatus(500);
      }
      else {
        res.send(results);
      }
      // if (results.length == 0) {
      //     return false;
      // } else {
      //     return true;
      // }
    });
  } else {
    payment.find({}, (err, msgs) => {
      if (err) {
        res.sendStatus(500);
      }
      res.send(msgs);
    });

  }
});

router.post("/", (req, res) => {
  console.log(`body   ${JSON.stringify(req.body)}`);
  var payments = req.body;
  for (let i = 0; i < payments.length; i++) {
    var payment = new payment(payments[i]);
    payment
      .save()
      .then(() => {
        console.log("called post");
        if (i == (payments.length - 1)) {
          res.send(req.body);
          return;
        }
      })
      .catch((err) => {
        res.send(err.message);
        return;
      });

  }

});

module.exports = router; 
