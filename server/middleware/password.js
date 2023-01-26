//imports packages
const passwordValidator = require("password-validator");

//création du schéma
const schema = new passwordValidator();

//ajout des propriétés au schéma
schema
  .is()
  .min(6) // Minimum length 8
  .is()
  .max(30) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 1 digit
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

//vérification des restrictions imposées pour le mot de passe
module.exports = (req, res, next) => {
  if (schema.validate(req.body.password)) {
    next();
  } else {
    return res.status(400).json({
      error: `Password is not strong enough : ${schema.validate(
        "req.body.password",
        { list: true }
      )}`,
    });
  }
};
