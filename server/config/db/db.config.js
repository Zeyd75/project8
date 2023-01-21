//imports
const dotenv = require("dotenv").config({ path: "./config/.env" });
const mysql = require("mysql2");

//connexion db
const db = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

//test connexion db
db.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err}`);
  } else {
    console.log(`Connected as id ${db.threadId}`);
  }
});

module.exports = db;
