//imports fichiers
const db = require("../config/db/db.config");
const UserFile = require("../models/userFile.model");

//imports packages
const fs = require("fs");

exports.create = (req, res) => {
  console.log("#########");
  console.log(req.body);
  console.log("#########");
  console.log(req.body.UserFile);

  const userFileObject = req.body.UserFile;

  //instance userFile (video MDB 159)
  // const user_file = new userFile({
  //   ...userFileObject
  // })
};

//V160?
exports.getAll = async (req, res) => {
  try {
    const userFile = await db.query(
      "SELECT * FROM `user_file` WHERE 1",
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

//V161
// exports.getOne = (req, res, next) => {
// res.status(200).json({
//   message: "ok",
//   contenu: {_id : req.params.id},
// });
// }

//V162
// exports.update = (req, res, next) => {

// }

//V163
// exports.delete = (req, res, next) => {}
