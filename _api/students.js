const express = require("express");
const Student = require("../models/studentsModel");
const router = express.Router();
const http = require("http");
const events = require("events"); 


router.get("/", (req, res) => {
  let parentName = req.query.parentName;
  console.log("req.query.parentName " +req.query.parentName)
  if (req.query.parentName != undefined) {
    Student.find({
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
        for(let i=0; i<results.length;i++)
        {
          delete results[i]._id;
          delete results[i].__v;
        }

      }
      // if (results.length == 0) {
      //     return false;
      // } else {
      //     return true;
      // }
    });
  } else {
    Student.find({}, (err, msgs) => {
      if (err) {
        res.sendStatus(500);
      }
      res.send(msgs);
    });

  }
});

router.post("/", (req, res) => {
  console.log(`body   ${JSON.stringify(req.body)}`);
  var students = req.body;
  for (let i = 0; i < students.length; i++) {
    var student = new Student(students[i]);
    student
      .save()
      .then(() => {
        console.log("called post");
        if (i == (students.length - 1)) {
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
