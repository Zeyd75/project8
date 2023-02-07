//imports fichiers
const db = require("../config/db/db.config");
const UserFile = require("../models/userFile.model");

//imports packages
const fs = require("fs");
const { log } = require("console");

//async/await ou pas?
exports.create = (req, res) => {
  const userFileObject = JSON.parse(req.body.userFile);
  console.log("CONSTANTE FICHEOBJECT");
  console.log(userFileObject);

  console.log("POUR FABRIQUER L'URL DE L'IMAGE");
  console.log(req.protocol);
  console.log(req.get("host"));
  console.log(req.file.filename);

  const { userId, lastName, firstName, age } = userFileObject;

  const profilePic = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  console.log("USERID, LASTNAME, FIRSTNAME, AGE, PROFILEPICURL");
  console.log(userId, lastName, firstName, age, profilePic);

  //instance userFile
  const userFile = new UserFile(userId, lastName, firstName, age, profilePic);
  console.log("CONTENU USERFILE");
  console.log(userFile);

  try {
    const sqlInsert = `
    INSERT INTO user_file(user_file_userId, user_file_lastName, user_file_firstName, user_file_age, user_file_profilePic) VALUES (?)
    `;
    const values = [userId, lastName, firstName, age, profilePic];
    const userFile = db.query(sqlInsert, [values], (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        res.status(200).json({ results });
      }
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
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
    const query = "SELECT * FROM user_file WHERE id_user_file = ?";
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

exports.update = (req, res) => {
  console.log("ROUTE PUT: UPDATEONEFICHEUSER");
  console.log(req.params.id);

  console.log("CONTENU PUT: REQ.FILE");
  console.log(req.file);

  //Recherche de l'objet dans table user_file
  try {
    const id = req.params.id;
    const sqlSelect = "SELECT * FROM user_file WHERE id_user_file = ?";

    const userFile = db.query(sqlSelect, [id], (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        console.log("SELECT DE L'OBJET A UPDATE");
        console.log(results);
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//V163
// exports.delete = (req, res, next) => {}
