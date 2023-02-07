//imports packages
const dotenv = require("dotenv").config({ path: "../config/.env" });
const jwt = require("jsonwebtoken");

//middleware d'authentification
exports.userAuth = (req, res, next) => {
  try {
    //récupération du token dans le headers authorization (bearer token)
    const token = req.headers.authorization.split(" ")[1];
    console.log("TOKEN");
    console.log(token);

    //décodage du token
    const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`);
    console.log("DECODED TOKEN");
    console.log(decodedToken);

    //récupération du userId figurant dans le token décodé
    const userId = decodedToken.userId;
    console.log("USERID");
    console.log(userId);

    console.log("----->userId dans le body de la request");
    console.log(req.body.userId);

    console.log("CONTENU Authentification du req.body");
    console.log(req.body);

    //récupération de l'ID via l'URL
    userIdParamsUrl = req.originalUrl.split("=")[1];
    console.log("REQ.ORIGINALURL");
    console.log(req.originalUrl);
    console.log("USERIDPARAMSURL");
    console.log(userIdParamsUrl);
    console.log("REQ._BODY");
    console.log(req.body.userId);

    //comparaison du userId dans le req avec celui qui est dans le token
    if (req._body === true) {
      console.log("REQ._BODY : TRUE");
      //vérification via body raw
      if (req.body.userId == userId) {
        next();
      } else {
        throw "userId failed authentication";
      }
      //vérification via form-data (multer)
    } else if (userIdParamsUrl == userId) {
      next();
    } else {
      throw "form-data URL authentication error";
    }
  } catch (error) {
    res.status(401).json({
      message: "unidentified query",
      error: error,
    });
  }
};
