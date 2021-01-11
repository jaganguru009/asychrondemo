const express = require("express");
const fee = require("../models/feesModel");
const router = express.Router();
const http = require("http"); 


router.get("/", (req, res) => { 
  if (req.query.parentName != undefined) {
    fee.find({
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
    fee.find({}, (err, msgs) => {
      if (err) {
        res.sendStatus(500);
      }
      res.send(msgs);
    });

  }
});

router.post("/", (req, res) => {
  console.log(`body   ${JSON.stringify(req.body)}`);
  var fees = req.body;
  for (let i = 0; i < fees.length; i++) {
    var fee = new fee(fees[i]);
    fee
      .save()
      .then(() => {
        console.log("called post");
        if (i == (fees.length - 1)) {
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
