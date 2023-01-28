//immports packages
const express = require("express");

//imports fichiers
const auth = require("../middleware/authentication");
const userFile = require("../controllers/userFile.controller");

//Router
const router = express.Router();

//routes
router.post("/create_user_file", auth.userAuth, userFile.createUserFile);

//export
module.exports = router;
