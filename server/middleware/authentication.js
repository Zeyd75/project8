//imports packages
const dotenv = require("dotenv").config({ path: "../config/.env" });
const jwt = require("jsonwebtoken");

//middleware d'authentification
exports.userAuth = (req, res, next) => {
  try {
    //récupération du token dans le headers authorization : bearer token
    const token = req.headers.authorization.split(" ")[1];

    //décodage du token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    //récupération du userId figurant dans le token décodé
    const userId = decodedToken.userId;

    console.log("#################");
    console.log(req.originalUrl);

    if (req.body.userId && req.body.userId !== userId) {
      throw "invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: "unidentified query",
      error: error,
    });
  }
};
