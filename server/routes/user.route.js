//imports packages
const express = require("express");

//imports fichiers
const userController = require("../controllers/user.controller");
const password = require("../middleware/password");
const email = require("../middleware/email");

//fonction Router() d'express
const router = express.Router();

//route signup
router.post("/signup", email, password, userController.signup);

//route login
router.post("/login", userController.login);

//export
module.exports = router;
