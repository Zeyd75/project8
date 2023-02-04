//imports fichiers
const db = require("../config/db/db.config");
const UserFile = require("../models/userFile.model");

//imports packages
const fs = require("fs");

exports.create = (req, res) => {
  const userFileObject = JSON.parse(req.body.UserFile);
  console.log("USERFILEOBJECT");
  console.log(userFileObject);

  const { userId, lastName, firstName, age } = userFileObject;
  const profilePicUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  //instance userFile
  const user_file = new UserFile({
    userId,
    lastName,
    firstName,
    age,
    profilePicUrl,
  });
};

exports.getAll = (req, res) => {
  try {
    const userFile = db.query(
      "SELECT * FROM `user_file` WHERE ?",
      ["1"],
      (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          res.status(200).json({ results });
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getOne = (req, res) => {
  try {
    const id = req.params.id;

    const query = "SELECT * FROM user_file WHERE user_file_userId = ?";
    const userFile = db.query(query, [id], (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        res.status(200).json({ results });
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//V162
// exports.update = (req, res, next) => {

// }

//V163
// exports.delete = (req, res, next) => {}
