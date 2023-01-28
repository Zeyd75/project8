//imports packages
const bcrypt = require("bcrypt");
const cryptojs = require("crypto-js");

//imports fichiers
const dotenv = require("dotenv").config({ path: "../config/.env" });

//modèle table user
class User {
  constructor(pseudo, email, password) {
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
  }

  //chiffrement et déchifrement email
  emailEncryption() {
    const emailcrypt = cryptojs
      .HmacSHA256(this.email, `${process.env.CRYPTOJS}`)
      .toString();
    return emailcrypt;
  }

  //hash du password
  passwordHash = async function () {
    try {
      const passwordHash = bcrypt.hash(this.password, 10);
      return passwordHash;
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = User;
