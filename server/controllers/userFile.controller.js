//imports fichiers
const userFile = require("../models/userFile.model");

exports.createUserFile = (req, res, next) => {
  console.log("#########");
  console.log(req.body);
  console.log("#########");
  console.log(req.body.userFile);

  const userFileObject = req.body.userFile;
};
