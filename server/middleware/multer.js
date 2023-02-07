//imports packages
const multer = require("multer");

//répertoire des formats d'images autorisés
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};

//destination du fichier et génération d'un nom de fichier unique
const storage = multer.diskStorage({
  //destination de stockage
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    //suppression des espaces dans les noms de fichiers
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];

    callback(null, name + "_" + Date.now() + "." + extension);
    //Nouvelle notation ES6 à essayer quand je serai sûr que la fonction sera bonne
    //callback(null, `${name}_${Date.now()}.${extension}` )
  },
});

module.exports = multer({ storage }).single("image");
