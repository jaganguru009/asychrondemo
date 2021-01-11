const express = require("express");
const router = express.Router();

router.use("/students", require("../_api/students"));
router.use("/classes", require("../_api/classes"));
router.use("/payments", require("../_api/payments"));

module.exports = router;
