//imports packages
const express = require("express");

//imports fichiers
const userController = require("../controllers/user.controller");

//fonction Router() d'express
const router = express.Router();

//route signup
router.post("/signup", userController.signup);

//route login

//export
module.exports = router;
