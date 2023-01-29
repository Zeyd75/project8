//imports packages
const dotenv = require("dotenv").config({ path: "../config/.env" });
const jwt = require("jsonwebtoken");

//middleware d'authentification
exports.userAuth = (req, res, next) => {
  try {
    //récupération du token dans le headers authorization (bearer token)
    const token = req.headers.authorization.split(" ")[1];
    console.log("TOKEEEEEN");
    console.log(token);

    //décodage du token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("DECODED TOKEN");
    console.log(decodedToken);

    console.log("REQ.BODY");
    console.log(req.body);

    //récupération du userId figurant dans le token décodé
    const userId = decodedToken.userId;
    console.log("USER ID");
    console.log(userId);

    console.log("ORIGINALURL");
    console.log(req.originalUrl);

    //récupération de l'ID via l'URL
    userIdParamsUrl = req.originalUrl.split("=")[1];
    console.log("USERIDPARAMSURL");
    console.log(userIdParamsUrl);

    //comparaison du userId dans le req avec celui qui est dans le token
    if (req._body === true) {
      //vérification via body raw
      console.log("----> REQ.BODY : TRUE");
      if (req.body.userId == userId) {
        next();
      } else {
        console.log("ERROR AUTH BODY RAW");
        throw "userId failed authentication";
      }
      //vérification via form-data (multer)
    } else if (userIdParamsUrl === decodedToken) {
      next();
    } else {
      throw "form-data URL authentication error";
    }
  } catch (error) {
    res.status(401).json({
      message: "unidentified query",
      error: error,
    });
    console.log("ERROOOOOR");
    console.log(error);
  }
};
