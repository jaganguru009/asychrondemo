const express = require("express");
const Classes = require("../models/classesModel");
const router = express.Router();
const http = require("http"); 


router.get("/", (req, res) => {  
   
  Classes.find({}, (err, msgs) => {
      if (err) {
        res.sendStatus(500);
      }
      res.send(msgs);
    });

  
});

router.post("/", (req, res) => {
  console.log(`body   ${JSON.stringify(req.body)}`);
  var ClassesIn = req.body;
  for (let i = 0; i < ClassesIn.length; i++) {
    var Class = new Classes(ClassesIn[i]);
    Class
      .save()
      .then(() => {
        console.log("called post");
        if (i == (ClassesIn.length - 1)) {
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
