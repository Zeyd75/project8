//imports
const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/user.route");

//création d'une appli express
const app = express();

//import connexion db
const mysql = require("./config/db/db.config");

//logger les request et response
app.use(morgan("dev"));

//gestion des CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//conversion du body en objet json utilisable
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route d'authentification
app.use("/api/authentication", userRoutes);

//export de app.js pour y accéder à partir d'un autre fichier
module.exports = app;
