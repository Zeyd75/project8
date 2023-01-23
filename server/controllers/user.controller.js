//import packages
const bcrypt = require("bcrypt");
const cryptojs = require("crypto-js");

//import fichiers
const db = require("../config/db/db.config");
const dotenv = require("dotenv").config({ path: "../config/.env" });

//fonction permettant d'enregistrer user dans bdd
exports.signup = (req, res) => {
  //données envoyées
  const { pseudo, email, password } = req.body;

  //chiffrement email
  const emailcrypt = cryptojs
    .HmacSHA256(req.body.email, `${process.env.CRYPTOJS}`)
    .toString();

  //hash du password
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      console.log(hash);

      const user = {
        pseudo: pseudo,
        email: emailcrypt,
        password: hash,
      };
      console.log(user);

      //requête permettant d'envoyer les datas à table 'users'
      db.query("INSERT INTO users SET ?", user, (error, results) => {
        if (error) {
          console.log(error);
          res.json({ error });
        } else {
          console.log(results);
          res.json({ message: "user registered" });
        }
      });
    })
    .catch((error) => res.status(500).json({ error }).send(console.log(error)));
};
