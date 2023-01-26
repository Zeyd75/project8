//import packages
const bcrypt = require("bcrypt");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

//import fichiers
const db = require("../config/db/db.config");
const dotenv = require("dotenv").config({ path: "../config/.env" });
const User = require("../models/user.model");

//########## SIGNUP ##########
exports.signup = (req, res) => {
  const { pseudo, email, password } = req.body;

  //instance de user
  const user = new User(pseudo, email, password);

  //chiffrement email
  const emailEncrypt = user.emailEncryption();

  //hash du password
  user
    .passwordHash()
    .then((hash) => {
      //data à envoyer dans la table users
      const data = {
        pseudo: pseudo,
        email: emailEncrypt,
        password: hash,
      };
      console.log("-->data");
      console.log(data);

      //requête permettant d'envoyer les datas à table 'users'
      db.query("INSERT INTO users SET ?", data, (error, results) => {
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

//########## LOGIN ##########
exports.login = (req, res, next) => {
  //chiffrement email
  const emailcrypt = cryptojs
    .HmacSHA256(req.body.email, `${process.env.CRYPTOJS}`)
    .toString();

  const email = emailcrypt;

  //vérification présence du user dans db
  db.query("SELECT * FROM users WHERE email = ?", email, (error, results) => {
    if (error) {
      console.log(error);
      res.json({ error });
    } else {
      //si l'email n'existe pas dans la db
      if (results == 0) {
        return res.status(404).json({ error: "user doesn't exist" });
      }

      //Comparaison du password
      bcrypt
        .compare(req.body.password, results[0].password)
        .then((controlPassword) => {
          console.log(controlPassword);

          //si le password ne correspond pas
          if (!controlPassword) {
            return res.status(401).json({ error: "incorrect password" });
          }

          //si le password correspond
          console.log(results[0].password);
          console.log(results[0].id);

          //token d'authentification
          const token = jwt.sign(
            { userId: results[0].id },
            `${process.env.JWT_SECRET}`,
            { expiresIn: "24h" }
          );
          console.log(token);

          //réponse du serveur avec userId et token
          res.status(201).json({
            userId: results[0].id,
            token,
          });
        })
        .catch((error) => res.status(500).json({ error }));
    }
  });
};
