const validate = (err, req, res, next) => {
  let isValid = true;
  console.log(`body   ${JSON.stringify(req.body)}`);
  if (err) {
    res.send({ error: err.message });
    isValid = false;
  } else {
    if (req.body === undefined) {
      res.send("INVALID request body");
      isValid = false;
    } else if (req.body.length > 0) {
      res.send("Student should not be empty");
      isValid = false;
    }
    if (isValid) next();
  }
};

module.exports.validate = validate;
