const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors');
const validate = require("./middlewares/requestValidator").validate;
const PORT = process.env.PORT || 3000;
const path =require("path");

const app = express();
app.use(cors());
const http = require("http").Server(app); 
try {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  //app.all("*", validate);
  app.use("/api", validate, require("./routes/routes")); 
} catch (e) {
  console.log("Eror occucered " + e.message);
}
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
var dbURL =
  "mongodb+srv://jj:Reset123@asychrondemo.18uxg.mongodb.net/AsychronDemo?retryWrites=true&w=majority";

//commented code using callbacks
/*
app.get("/messages", (req, res) => {
  Message.find({}, (err, msgs) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send(msgs);
  });
});*/
/*app.post("/messages", (req, res) => {
  var message = new Message(req.body);
  message.save(message, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    console.log("called post");
    io.emit("message", req.body);
    res.sendStatus(200);
  });
});*/
 
mongoose.connect(
  dbURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(`Error while connecting DB ${err}`);
  }
);
app.listen(PORT);
