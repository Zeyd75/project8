const validator = require("validator");

module.exports = (req, res, next) => {
  const { email } = req.body;

  if (validator.isEmail(email)) {
    console.log("-->validator");
    console.log(`email ${validator.isEmail(email)} format is valid`);
    next();
  } else {
    return res.status(400).json({ error: `email ${email} format is invalid` });
  }
};
