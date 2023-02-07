//immports packages
const express = require("express");

//imports fichiers
const auth = require("../middleware/authentication");
const userFile = require("../controllers/userFile.controller");
const multer = require("../middleware/multer");

//Router
const router = express.Router();

//routes
router.post("/", auth.userAuth, multer, userFile.create);
router.get("/", auth.userAuth, userFile.getAll);
router.get("/:id", auth.userAuth, userFile.getOne);
//!!!!!!!!!!!!!"multer" = NEW!!!!!!!!!!!!!!!!!!!
router.put("/:id", auth.userAuth, multer, userFile.update);

//V163
// router.delete("/:id", auth.userAuth, userFile.delete);

//export
module.exports = router;
