//imports packages
const express = require("express");

//imports fichiers
const userController = require("../controllers/user.controller");
const password = require("../middleware/password");

//fonction Router() d'express
const router = express.Router();

//route signup
router.post("/signup", password, userController.signup);

//route login
router.post("/login", userController.login);

//export
module.exports = router;
