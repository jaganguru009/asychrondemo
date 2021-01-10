const express = require("express");
const router = express.Router();

router.use("/students", require("../_api/students"));

module.exports = router;
